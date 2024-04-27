import { HullInventory } from './components/hull-inventory';
import { SelectionGrids } from './components/selection-grids';

export const Dredge = () => {
  return (
    <div className='flex h-screen w-full flex-col bg-black'>
      <div className='h-[40px] w-full border'>Navbar</div>
      <div className='flex h-[calc(100%-40px)] w-full items-center justify-center'>
        <div className='hidden h-full flex-col md:flex'>
          <SelectionGrids />
        </div>
        <HullInventory />
      </div>
    </div>
  );
};
