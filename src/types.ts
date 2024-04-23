export interface PackedItem {
  id: string;
  itemId: string;
  shape: number[][];
  rotation?: number;
  topLeft?: [number, number];
}

export interface GameItem {
  id: string;
  name: string;
  image: string;
  width: number;
  height: number;
  shape: number[][];
  imageWidth?: number;
  imageHeight?: number;
}

export interface InventoryItem {
  id: string;
  count: number;
}

export interface Fish extends GameItem {
  number: number;
  value?: number;
}

export interface HullData {
  id: number;
  name: string;
  grid: number[][];
}

export enum SlotType {
  Locked,
  Available,
  Damaged,
}
