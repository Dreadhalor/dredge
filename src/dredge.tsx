import { HullInventory } from './components/hull-inventory';
import { SelectionGrids } from './components/selection-grids';

export const Dredge = () => {
  return (
    <div className='flex h-full w-full items-center justify-center bg-black'>
      <div className='flex h-full w-full items-center justify-center'>
        <div className='hidden h-full flex-col md:flex'>
          <SelectionGrids />
        </div>
        <HullInventory />
      </div>
    </div>
  );
};
