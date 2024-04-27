import { GridItem } from '@dredge/types';
import { cn } from '@dredge/lib/utils';
import { useDredge } from '@dredge/providers/dredge-provider';

type Props = {
  item: GridItem;
  gridSquareSize?: number;
  rotation?: number;
  topLeft?: { x: number; y: number };
  className?: string;
};
export const GridImage = ({
  item: { image, width, height, imageWidth, imageHeight },
  gridSquareSize,
  rotation = 0,
  topLeft = { x: 0, y: 0 },
  className,
}: Props) => {
  const { getEncyclopediaGridSquareSize } = useDredge();
  const effectiveGridSquareSize =
    gridSquareSize || getEncyclopediaGridSquareSize();

  const getRotatedTop = () => {
    if (rotation === 270) return (topLeft?.y + width) * effectiveGridSquareSize;
    if (rotation === 180)
      return (topLeft?.y + height) * effectiveGridSquareSize;
    // Default case for rotation === 0 or 90
    return topLeft?.y * effectiveGridSquareSize;
  };

  const getRotatedLeft = () => {
    if (rotation === 90) return (topLeft?.x + height) * effectiveGridSquareSize;
    if (rotation === 180) return (topLeft?.x + width) * effectiveGridSquareSize;
    // Default case for rotation === 0 or 270
    return topLeft?.x * effectiveGridSquareSize;
  };

  return (
    <div
      className={cn(
        'pointer-events-none absolute flex origin-top-left items-center justify-center',
        className,
      )}
      style={{
        width: effectiveGridSquareSize * width,
        height: effectiveGridSquareSize * height,
        rotate: `${rotation}deg`,
        top: getRotatedTop(),
        left: getRotatedLeft(),
      }}
    >
      <img
        draggable={false}
        src={image}
        width={effectiveGridSquareSize * (imageWidth || width)}
        height={effectiveGridSquareSize * (imageHeight || height)}
      />
    </div>
  );
};
