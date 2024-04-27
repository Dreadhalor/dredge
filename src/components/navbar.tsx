import { DredgeAutopackerLogo } from 'src/assets/ui';
import { BuyMeACoffeeButton } from './buy-me-a-coffee-button';

export const Navbar = () => {
  return (
    <div className='flex h-[60px] w-full items-center justify-between border-b border-gray-800 bg-[#1a1a1a]'>
      <span className='ml-4 flex flex-col'>
        <DredgeAutopackerLogo className='h-8 text-white' fill='white' />
        <span className='-mt-0.5 text-xs text-muted-foreground'>
          a&nbsp;
          <a href='https://www.scottjhetrick.com' className='hover:underline'>
            Scott Hetrick
          </a>
          &nbsp;project
        </span>
      </span>
      <BuyMeACoffeeButton />
    </div>
  );
};
