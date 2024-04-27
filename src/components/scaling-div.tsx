import React, { useState } from 'react';
import { useResizeObserver } from '@dredge/hooks/use-resize-observer';

interface ScalingDivProps {
  children: React.ReactNode;
  desiredWidth: number;
  desiredHeight: number;
  className?: string;
  style?: React.CSSProperties;
}

const ScalingDiv = ({
  children,
  desiredWidth,
  desiredHeight,
  className,
  style,
}: ScalingDivProps) => {
  const [scale, setScale] = useState(1);

  const handleResize = ({
    width,
    height,
  }: {
    width: number;
    height: number;
  }) => {
    const scaleX = width / desiredWidth;
    const scaleY = height / desiredHeight;
    const minScale = Math.min(scaleX, scaleY);
    setScale(minScale);
  };

  const scalingDivRef = useResizeObserver(handleResize);

  return (
    <div
      ref={scalingDivRef}
      className={className}
      style={{
        ...style,
        position: 'relative',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          position: 'absolute',
          transformOrigin: 'center',
          transform: `scale(${scale})`,
          width: desiredWidth,
          height: desiredHeight,
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ScalingDiv;
