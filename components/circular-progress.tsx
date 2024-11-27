interface CircularProgressProps {
  value: number;
  maxValue: number;
  size?: number;
  strokeWidth?: number;
}

export function CircularProgress({ value, maxValue, size = 20, strokeWidth = 2 }: CircularProgressProps) {
  const radius = (size - strokeWidth) / 2;
  const circumference = radius * 2 * Math.PI;
  const fillPercentage = ((maxValue - value) / maxValue) * 100;
  const strokeDashoffset = circumference - (fillPercentage / 100) * circumference;

  return (
    <svg height={size} width={size} className="transform -rotate-90">
      <circle
        className="text-muted-foreground/20"
        strokeWidth={strokeWidth}
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        className="text-muted-foreground transition-all duration-300 ease-in-out"
        strokeWidth={strokeWidth}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        stroke="currentColor"
        fill="transparent"
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
    </svg>
  );
}

