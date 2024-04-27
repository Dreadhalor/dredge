import { GridItem } from '@dredge/types';
import { useDredge } from '@dredge/providers/dredge-provider';

type Props = {
  fish: GridItem;
  gridSquareSize?: number;
  rotation?: number;
};
export const FishImage = ({
  fish: { image, width, height, imageWidth, imageHeight },
  gridSquareSize,
  rotation = 0,
}: Props) => {
  const { getEncyclopediaGridSquareSize } = useDredge();
  const effectiveGridSquareSize =
    gridSquareSize || getEncyclopediaGridSquareSize();

  return (
    <div
      className='flex items-center justify-center'
      style={{
        width: effectiveGridSquareSize * width,
        height: effectiveGridSquareSize * height,
        rotate: `${rotation}deg`,
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
