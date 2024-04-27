import { FishSidebarButton } from './components/fish-sidebar-button';
import { HullInventory } from './components/hull-inventory';
import { Navbar } from './components/navbar';
import { SelectionGrids } from './components/selection-grids';

export const Dredge = () => {
  return (
    <div className='flex h-full w-full flex-col bg-black'>
      <Navbar />
      <div className='relative flex h-[calc(100%-60px)] w-full items-center justify-center'>
        <FishSidebarButton />
        <div className='hidden h-full flex-col md:flex'>
          <SelectionGrids />
        </div>
        <HullInventory />
      </div>
    </div>
  );
};
