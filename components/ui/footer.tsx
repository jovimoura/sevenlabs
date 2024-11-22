import Link from 'next/link';
import { AnimatedContainer } from './animated-container';
import Image from 'next/image'; 

export const Footer = () => {
    return (
        <footer className="flex flex-col relative items-center justify-center border-t border-border pt-16 pb-8 md:pb-0 px-6 lg:px-8 w-full max-w-6xl mx-auto lg:pt-32 bg-[radial-gradient(35%_128px_at_50%_0%,theme(backgroundColor.white/8%),transparent)]">

            <div className="absolute top-0 left-1/2 right-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-1.5 bg-foreground rounded-full"></div>

            <div className="grid gap-8 xl:grid-cols-3 xl:gap-8 w-full">

                <AnimatedContainer delay={0.1}>
                    <div className="flex flex-col items-start justify-start md:max-w-[200px]">
                        <div className="flex items-start">
                            <Image width={32} height={32} className='border rounded' alt='logo' src={'/logo.png'} />
                        </div>
                        <p className="text-muted-foreground mt-4 text-sm text-start">
                        Reach everyone with AI audio
                        </p>
                        <span className="my-4 text-muted-foreground text-sm flex items-center">
                            Made by <Link href="https://jovimoura.vercel.app/" target='_blank' className="font-semibold ml-1">John Moura</Link>
                        </span>
                        <Link href="https://www.producthunt.com/posts/yoresume?embed=true&utm_source=badge-featured&utm_medium=badge&utm_souce=badge-yoresume" target="_blank"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=503796&theme=dark" alt="YoResume - A&#0032;Free&#0032;Resume&#0032;Builder&#0032;&#0124;&#0032;Write&#0032;your&#0032;Resume&#0032;in&#0032;Seconds | Product Hunt"  width="200" height="40" /></Link>
                    </div>
                </AnimatedContainer>

                <div className="grid-cols-2 gap-8 grid mt-16 xl:col-span-2 xl:mt-0">
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimatedContainer delay={0.2}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Product
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Features
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/pricing" className="hover:text-foreground transition-all duration-300">
                                            Pricing
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            Testimonials
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContainer>
                        <AnimatedContainer delay={0.3}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Integrations
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link target='_blank' href="https://www.instagram.com/ojohndev/" className="hover:text-foreground transition-all duration-300">
                                            Instagram
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link target='_blank' href="https://www.threads.net/@ojohndev" className="hover:text-foreground transition-all duration-300">
                                            Threads
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link target='_blank' href="https://www.linkedin.com/in/jovimoura10/" className="hover:text-foreground transition-all duration-300">
                                            LinkedIn
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContainer>
                    </div>
                    <div className="md:grid md:grid-cols-2 md:gap-8">
                        <AnimatedContainer delay={0.4}>
                            <div className="">
                                <h3 className="text-base font-medium text-white">
                                    Resources
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="mt-2">
                                        <Link href="/resources/blog" className="hover:text-foreground transition-all duration-300">
                                            Blog
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/resources/help" className="hover:text-foreground transition-all duration-300">
                                            Support
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContainer>
                        <AnimatedContainer delay={0.5}>
                            <div className="mt-10 md:mt-0 flex flex-col">
                                <h3 className="text-base font-medium text-white">
                                    Company
                                </h3>
                                <ul className="mt-4 text-sm text-muted-foreground">
                                    <li className="">
                                        <Link href="" className="hover:text-foreground transition-all duration-300">
                                            About Us
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/privacy" className="hover:text-foreground transition-all duration-300">
                                            Privacy Policy
                                        </Link>
                                    </li>
                                    <li className="mt-2">
                                        <Link href="/terms" className="hover:text-foreground transition-all duration-300">
                                            Terms & Conditions
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </AnimatedContainer>
                    </div>
                </div>

            </div>

            <div className="mt-8 border-t mb-5 border-border/40 pt-4 md:pt-8 md:flex md:items-center md:justify-between w-full">
                <AnimatedContainer delay={0.6}>
                    <p className="text-sm text-muted-foreground mt-8 md:mt-0">
                        &copy; {new Date().getFullYear()} SevenLabz INC. All rights reserved.
                    </p>
                </AnimatedContainer>
            </div>
        </footer>
    )
}
