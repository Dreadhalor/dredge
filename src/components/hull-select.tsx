import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@dredge/ui/select';
import { hulls } from '@dredge/data/hull-data';
import { useDredge } from '@dredge/providers/dredge-provider';
import { SlotType } from '@dredge/types';
export const HullSelect = () => {
  const { hull, setHull, setPackedItems } = useDredge();
  const handleSelect = (val: string) => {
    const selectedHull = hulls.find((hull) => hull.id === Number(val));
    if (selectedHull) {
      // if the hull is smaller, remove all packed items
      if (
        selectedHull.grid.flat().filter((slot) => slot === SlotType.Available)
          .length <
        hull.grid.flat().filter((slot) => slot === SlotType.Available).length
      ) {
        setPackedItems([]);
      }

      setHull(selectedHull);
    }
  };
  return (
    <Select value={`${hull?.id || ''}`} onValueChange={handleSelect}>
      <SelectTrigger className='w-[180px]'>
        <SelectValue placeholder='Select a hull'>
          {hull?.name || 'Select a hull'}
        </SelectValue>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectItem value='1'>Tier 1</SelectItem>
          <SelectItem value='2'>Tier 2</SelectItem>
          <SelectItem value='3'>Tier 2+</SelectItem>
          <SelectItem value='4'>Tier 3</SelectItem>
          <SelectItem value='5'>Tier 3+</SelectItem>
          <SelectItem value='6'>Tier 4</SelectItem>
          <SelectItem value='7'>Tier 4+</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};
