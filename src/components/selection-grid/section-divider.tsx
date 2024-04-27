import { TabImage } from '@dredge/assets/ui';

export const SectionDivider = ({ title }: { title: string }) => {
  return (
    <div className='sticky top-[53px] z-10 flex w-full items-center justify-start'>
      <img src={TabImage} alt='' />
      <div className='absolute inset-0 flex items-center pl-[16px]'>
        <span className=''>{title}</span>
      </div>
    </div>
  );
};
