import { prisma } from '@/lib/prisma'
import { stripe } from '@/lib/stripe'
import { headers } from 'next/headers'
import type Stripe from 'stripe'
import { PLANS } from '@/config/stripe'

function namePlan(amount: number | null) {
  if (typeof amount === "number") {
    const plan = PLANS.find(plan => plan.price.amount === amount);
    return plan ? plan.slug : "";
  } else {
    return "";
  }
}

export async function POST(request: Request) {
  const body = await request.text()
  const signature = headers().get('Stripe-Signature') ?? ''

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(
      body,
      signature,
      process.env.STRIPE_WEBHOOK_SECRET || ''
    )
  } catch (err) {
    return new Response(
      `Webhook Error: ${
        err instanceof Error ? err.message : 'Unknown Error'
      }`,
      { status: 400 }
    )
  }

  const session = event.data.object as Stripe.Checkout.Session

  if (!session?.metadata?.userId) {
    return new Response(null, {
      status: 200,
    })
  }

  console.log('EVENT TYPE', event.type)
  
  switch (event.type) {
    case 'checkout.session.completed':
      const subscriptionCheck = await stripe.subscriptions.retrieve(session.subscription as string)
      await prisma.user.create({
        data: {
          clerkId: session?.metadata?.userId,
          typePlan: "pro",
          status: subscriptionCheck.status,
          stripeSubscriptionId: subscriptionCheck.id,
          stripeCustomerId: subscriptionCheck.customer as string,
          stripePriceId: subscriptionCheck.items.data[0]?.price.id,
          stripeCurrentPeriodEnd: new Date(subscriptionCheck.current_period_end * 1000),
        },
      })
      break;

      case 'invoice.payment_succeeded':
        const subscription = await stripe.subscriptions.retrieve(session.subscription as string)

        await prisma.user.update({
          where: {
            stripeSubscriptionId: subscription.id,
          },
          data: {
            typePlan: "pro",
            status: subscription.status,
            stripePriceId: subscription.items.data[0]?.price.id,
            stripeCurrentPeriodEnd: new Date(subscription.current_period_end * 1000),
          },
        })
      break;

      case 'customer.subscription.updated':
        const subscriptionUpdated = await stripe.subscriptions.update(
          session.id as string
        );
        
        const updateSub = await prisma.user.update({
          where: {
            stripeSubscriptionId: event.data.object.id,
          },
          data: {
            status: subscriptionUpdated.status,
            typePlan: namePlan(subscriptionUpdated.items.data[0].plan.amount),
          },
        });
    
        if (updateSub.status === 'canceled') {
          const deleteSub = await prisma.user.delete({
            where: {
              stripeSubscriptionId: updateSub.stripeSubscriptionId as string,
            },
          });
        }

        break;
  
    default:
      break;
  }

  return new Response(null, { status: 200 })
}
