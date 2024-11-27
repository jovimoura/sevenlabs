import { CircularProgress } from "./circular-progress"

interface CreditsRemainingProps {
  credits: number;
  maxCredits: number;
}

export function CreditsRemaining({ credits, maxCredits }: CreditsRemainingProps) {
  return (
    <div className="flex items-center gap-2 text-muted-foreground">
      <CircularProgress value={credits} maxValue={maxCredits} />
      <span className="text-sm">{credits.toLocaleString()} credits remaining</span>
    </div>
  )
}

