import { FaChevronLeft, FaFishFins } from 'react-icons/fa6';
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetTrigger,
} from '@dredge/ui/sheet';
import { SelectionGrids } from './selection-grids';

export const FishSidebarButton = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='absolute left-2 top-2 z-30 flex aspect-square w-[40px] items-center justify-center rounded-full border border-white bg-[#1a1a1a] text-white md:hidden'>
          <FaFishFins className='h-[24px] w-[24px]' />
        </button>
      </SheetTrigger>
      <SheetContent side='left' className='w-fit p-0'>
        <SelectionGrids>
          <SheetClose className='text-black'>
            <FaChevronLeft size={14} />
          </SheetClose>
        </SelectionGrids>
      </SheetContent>
    </Sheet>
  );
};
