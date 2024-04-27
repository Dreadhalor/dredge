import { useDredge } from '@dredge/providers/dredge-provider';
import { FishImage } from '../fish/fish-image';
import { GridItem, PackedItem } from '@dredge/types';
import { EncyclopediaUnderlineImage } from '@dredge/assets/ui';
import { v4 as uuidv4 } from 'uuid';

const EncyclopediaGridSquare = () => {
  const { getEncyclopediaGridSquareSize } = useDredge();

  return (
    <div
      className='border border-encyclopedia-squareBorder'
      style={{
        width: getEncyclopediaGridSquareSize(),
        height: getEncyclopediaGridSquareSize(),
      }}
    ></div>
  );
};

type EncyclopediaGridProps = {
  width: number;
  height: number;
};

const EncyclopediaGrid = ({ width, height }: EncyclopediaGridProps) => {
  const { getEncyclopediaGridSquareSize } = useDredge();

  return (
    <div className='absolute inset-0 flex items-center justify-center'>
      <div
        className='grid'
        style={{
          gridTemplateColumns: `repeat(${width}, ${getEncyclopediaGridSquareSize()}px)`,
          gridTemplateRows: `repeat(${height}, ${getEncyclopediaGridSquareSize()}px)`,
        }}
      >
        {Array.from({ length: width * height }, (_, i) => (
          <EncyclopediaGridSquare key={i} />
        ))}
      </div>
    </div>
  );
};

const EncyclopediaGridSpacer = () => {
  const { getEncyclopediaGridSquareSize } = useDredge();
  return (
    <div
      style={{
        width: 6 * getEncyclopediaGridSquareSize(),
        height: 3 * getEncyclopediaGridSquareSize(),
      }}
    />
  );
};

type Props = {
  item: GridItem;
};

export const GridItemEntry = ({ item }: Props) => {
  const { id, name, width, height } = item;
  const { packedItems, packItems } = useDredge();

  const numberInInventory = packedItems.filter(
    (item) => item.itemId === id,
  ).length;

  const getTitle = () => {
    if (item.type === 'fish') {
      return `#${item.number} ${name}`;
    }
    return name;
  };

  const handleClick = () => {
    const newPackedItem: PackedItem = {
      id: uuidv4(),
      itemId: item.id,
      shape: item.shape,
    };
    packItems([newPackedItem]);
  };

  return (
    <div
      className='flex h-fit cursor-pointer select-none flex-col items-center gap-1 bg-encyclopedia-pageFill p-3 text-black hover:brightness-105'
      onClick={handleClick}
    >
      <span className='flex flex-col items-center text-[12px] md:text-[14px] lg:text-[16px]'>
        {`${getTitle()}${numberInInventory ? ` (${numberInInventory})` : ''}`}
        <img src={EncyclopediaUnderlineImage} width={100} />
      </span>
      <div className='relative items-center justify-center border-[5px] border-encyclopedia-border bg-encyclopedia-entryFill p-[2px]'>
        <EncyclopediaGridSpacer />
        <EncyclopediaGrid width={width} height={height} />
        {item.type === 'fish' && item.value && (
          <span className='absolute right-1 top-0 text-xs text-black'>
            {item.value.toLocaleString('en-US', {
              style: 'currency',
              currency: 'USD',
            })}
          </span>
        )}
        <div className='absolute inset-0 flex items-center justify-center'>
          <FishImage fish={item} />
        </div>
      </div>
    </div>
  );
};

export const GridItemBlankEntry = () => {
  return (
    <div className='pointer-events-none invisible flex h-fit cursor-pointer select-none flex-col items-center gap-1 bg-encyclopedia-pageFill p-3 text-black hover:brightness-105'>
      <span className='flex flex-col items-center text-[14px] lg:text-[16px]'>
        {'Empty'}
        <img src={EncyclopediaUnderlineImage} width={100} />
      </span>
      <div className='relative items-center justify-center border-[5px] border-encyclopedia-border bg-encyclopedia-entryFill p-[2px]'>
        <EncyclopediaGridSpacer />
        <EncyclopediaGrid width={6} height={3} />
      </div>
    </div>
  );
};
