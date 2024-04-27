import { SelectionGrid } from './selection-grid/selection-grid';
import { fishData } from '@dredge/data/fish-data';
import { itemData } from '@dredge/data/item-data';
import { crabPotData } from '@dredge/data/crab-pot-data';
import { SectionDivider } from './selection-grid/section-divider';
import { Input } from './ui/input';
import { useEffect, useState } from 'react';
import { questItemData } from '@dredge/data/quest-item-data';
import { trinketData } from '@dredge/data/trinket-data';
import { GridItemBlankEntry } from './selection-grid/grid-entry';
import { useDredge } from '@dredge/providers/dredge-provider';
import { data } from '@dredge/data/combined-data';

export const SelectionGrids = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const { packedItems } = useDredge();
  const inventoryTiles = data.filter((item) =>
    packedItems.some((i) => i.itemId === item.id),
  );
  const [filter, setFilter] = useState('' as string);
  const [filteredFishData, setFilteredFishData] = useState(fishData);
  const [filteredItemData, setFilteredItemData] = useState(itemData);
  const [filteredCrabPotData, setFilteredCrabPotData] = useState(crabPotData);
  const [filteredQuestItemData, setFilteredQuestItemData] =
    useState(questItemData);
  const [filteredTrinketData, setFilteredTrinketData] = useState(trinketData);

  useEffect(() => {
    setFilteredFishData(
      fishData.filter((fish) =>
        fish.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
    setFilteredItemData(
      itemData.filter((item) =>
        item.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
    setFilteredCrabPotData(
      crabPotData.filter((crabPot) =>
        crabPot.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
    setFilteredQuestItemData(
      questItemData.filter((questItem) =>
        questItem.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
    setFilteredTrinketData(
      trinketData.filter((trinket) =>
        trinket.name.toLowerCase().includes(filter.toLowerCase()),
      ),
    );
  }, [filter]);

  return (
    <div className='flex h-full flex-col overflow-auto bg-encyclopedia-pageFill'>
      <input className='hidden' />
      <div className='sticky top-0 z-20 flex w-full gap-2 bg-encyclopedia-pageFill p-2'>
        <Input
          autoFocus={false}
          type='search'
          placeholder='Search...'
          className='flex-1 rounded-none border-4 border-encyclopedia-border bg-encyclopedia-entryFill text-[16px] text-black placeholder:text-gray-600'
          value={filter}
          onChange={(e) => setFilter(e.target.value)}
        />
        {children}
      </div>
      {inventoryTiles.length > 0 && !filter && (
        <>
          <SectionDivider title='Current Inventory' />
          <SelectionGrid items={inventoryTiles} />
        </>
      )}
      <SectionDivider title='Fish' />
      <SelectionGrid items={filteredFishData} />
      <SectionDivider title='Items' />
      <SelectionGrid items={filteredItemData} />
      <SectionDivider title='Trinkets' />
      <SelectionGrid items={filteredTrinketData} />
      <SectionDivider title='Crab Pots' />
      <SelectionGrid items={filteredCrabPotData} />
      <SectionDivider title='Quest Items' />
      <SelectionGrid items={filteredQuestItemData} />
      <div className='grid h-0 w-full grid-cols-2 overflow-hidden p-0 2xl:grid-cols-3'>
        <GridItemBlankEntry />
        <GridItemBlankEntry />
        <GridItemBlankEntry />
      </div>
    </div>
  );
};
