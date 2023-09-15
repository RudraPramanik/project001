import React from "react";

function id(): string {
  return "_" + Math.random().toString(36).substr(2, 9);
}

export interface GradientCircularProgressProps {
  progress: number;
  size: number;
  startColor: string;
  endColor: string;
  middleColor: string;
  id?: string;
  strokeWidth?: number;
  emptyColor?: string;
  classes?: {
    indicator: {
      progression: string;
      container: string;
      empty: string;
    };
    snail: string;
    textContent: {
      container: string;
      text: string;
    };
  };
}

const GradientCircularProgress: React.FunctionComponent<
  GradientCircularProgressProps
> = ({
  size,
  progress,
  strokeWidth = 6,
  emptyColor,
  startColor,
  endColor,
  middleColor,
  classes,
  children,
}) => {
  const DIAMETER = 50;
  const WIDTH = DIAMETER + strokeWidth;
  const firstHalfProg = progress > DIAMETER ? 1 : progress / DIAMETER;
  const secondHalfProg =
    progress <= DIAMETER ? 0 : (progress - DIAMETER) / DIAMETER;
  const halfCircumference = (Math.PI * 2 * (DIAMETER / 2)) / 2;
  const firstHalfGradientId = id();
  const secondHalfGradientId = id();

  return (
    <div
      className={[
        "CircularProgress",
        classes?.indicator.container,
        "relative",
      ].join(" ")}
      style={{ width: `${size}px`, height: `${size}px` }}
    >
      {children ? (
        <div className="absolute top-[11px] left-[10px]">{children}</div>
      ) : (
        <div
          style={{ fontSize: size / 6 }}
          className={["textContent"].join(" ")}
        >
          <span className={["text"].join(" ")}>{progress / 10}</span>
        </div>
      )}
      <svg viewBox={`0 0 ${WIDTH} ${WIDTH}`}>
        <defs>
          <linearGradient
            id={firstHalfGradientId}
            x1="50%"
            y1="0%"
            x2="0%"
            y2="100%"
          >
            <stop offset="0%" stopColor={startColor} />
            <stop offset="90%" stopColor={middleColor} />
          </linearGradient>

          <linearGradient
            id={secondHalfGradientId}
            x1="0%"
            y1="0%"
            x2="50%"
            y2="100%"
          >
            <stop offset="0%" stopColor={endColor} />
            <stop offset="90%" stopColor={middleColor} />
          </linearGradient>
        </defs>

        <path
          className={classes?.indicator.empty}
          fill="none"
          stroke={emptyColor}
          d={`
              M ${strokeWidth / 2} ${WIDTH / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 ${DIAMETER} 0
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 -${DIAMETER} 0
            `}
          strokeWidth={strokeWidth}
        />

        <path
          className={classes?.indicator.progression}
          fill="none"
          stroke={`url(#${firstHalfGradientId})`}
          strokeDasharray={`${
            firstHalfProg * halfCircumference
          },${halfCircumference}`}
          strokeLinecap="round"
          d={`
              M ${WIDTH / 2} ${strokeWidth / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 1 1 0 ${DIAMETER}
            `}
          strokeWidth={strokeWidth}
        />

        {progress >= 50 && (
          <path
            className={classes?.indicator.progression}
            fill="none"
            stroke={`url(#${secondHalfGradientId})`}
            strokeDasharray={`${
              secondHalfProg * halfCircumference
            },${halfCircumference}`}
            strokeLinecap="round"
            d={`
              M ${WIDTH / 2} ${WIDTH - strokeWidth / 2}
              a ${DIAMETER / 2} ${DIAMETER / 2} 0 0 1 0 -${DIAMETER}
            `}
            strokeWidth={strokeWidth}
          />
        )}
      </svg>
    </div>
  );
};

export default GradientCircularProgress;
