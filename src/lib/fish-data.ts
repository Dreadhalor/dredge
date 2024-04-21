import {
  ArrowSquidImage,
  BlackGrouperImage,
  BlueMackerelImage,
  CodImage,
  GreyEelImage,
  GulfFlounderImage,
  SailfishImage,
  StingrayImage,
  BronzeWhalerImage,
  BlacktipReefSharkImage,
  CommonCrabImage,
  FiddlerCrabImage,
  OceanicPerchImage,
  TigerMackerelImage,
  BlackSeaBassImage,
  StonefishImage,
  BlackmouthSalmonImage,
  CongerEelImage,
  DevilRayImage,
  SturgeonImage,
  WreckfishImage,
  RockCrabImage,
  DecoratorCrabImage,
  AuroraJellyfishImage,
  FangtoothImage,
  BarreleyeImage,
  FireflySquidImage,
  RedSnapperImage,
  GiantAmphipodImage,
  LoosejawImage,
  SnailfishImage,
  CoralGrouperImage,
  GlowingOctopusImage,
  AnglerfishImage,
  BarracudaImage,
  HammerheadSharkImage,
  CrownOfThornsImage,
  BlueCrabImage,
  SpinyLobsterImage,
  GreyMulletImage,
  TarponImage,
  SergeantFishImage,
  GarImage,
  LongfinEelImage,
  CatfishImage,
  HorseshoeCrabImage,
  GiantMudCrabImage,
  ArmoredSearobinImage,
  CuskEelImage,
  SnakeMackerelImage,
  PaleSkateImage,
  GhostSharkImage,
  FrilledSharkImage,
  VolcanoSnailImage,
  SquatLobsterImage,
  SpiderCrabImage,
  AnchovyImage,
  ScarletPrawnImage,
  BlackfinTunaImage,
  ViperfishImage,
  MoonfishImage,
  RattailImage,
  OceanSunfishImage,
  IcefishImage,
  CharImage,
  WolffishImage,
  StargazerImage,
  LizardfishImage,
  ToothfishImage,
  GoblinSharkImage,
  ColossalSquidImage,
  SeaStarsImage,
  KingCrabImage,
  OarfishImage,
  GulperEelImage,
  GoliathTigerfishImage,
  CoelacanthImage,
  SleeperSharkImage,
} from '@dredge/assets/fish';
import { Fish } from '@dredge/types';

export const fishData: Fish[] = [
  {
    id: 'blue-mackerel',
    number: 1,
    name: 'Blue Mackerel',
    image: BlueMackerelImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },

  {
    id: 'cod',
    number: 2,
    name: 'Cod',
    image: CodImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [0, 1],
    ],
  },

  {
    id: 'arrow-squid',
    number: 3,
    name: 'Arrow Squid',
    image: ArrowSquidImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },

  {
    id: 'grey-eel',
    number: 4,
    name: 'Grey Eel',
    image: GreyEelImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'gulf-flounder',
    number: 5,
    name: 'Gulf Flounder',
    image: GulfFlounderImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'black-grouper',
    number: 6,
    name: 'Black Grouper',
    image: BlackGrouperImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'stingray',
    number: 7,
    name: 'Stingray',
    image: StingrayImage,
    width: 3,
    height: 3,
    shape: [
      [0, 1, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
  },
  {
    id: 'sailfish',
    number: 8,
    name: 'Sailfish',
    image: SailfishImage,
    width: 6,
    height: 2,
    shape: [
      [0, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ],
    imageWidth: 5,
    imageHeight: 2,
  },
  {
    id: 'bronze-whaler',
    number: 9,
    name: 'Bronze Whaler',
    image: BronzeWhalerImage,
    width: 4,
    height: 3,
    shape: [
      [0, 1, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ],
  },
  {
    id: 'blacktip-reef-shark',
    number: 10,
    name: 'Blacktip Reef Shark',
    image: BlacktipReefSharkImage,
    width: 4,
    height: 3,
    shape: [
      [0, 0, 1, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 0],
    ],
  },
  {
    id: 'common-crab',
    number: 11,
    name: 'Common Crab',
    image: CommonCrabImage,
    width: 1,
    height: 1,
    shape: [[1]],
  },
  {
    id: 'fiddler-crab',
    number: 12,
    name: 'Fiddler Crab',
    image: FiddlerCrabImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 0],
    ],
  },
  {
    id: 'oceanic-perch',
    number: 13,
    name: 'Oceanic Perch',
    image: OceanicPerchImage,
    width: 1,
    height: 1,
    shape: [[1]],
  },
  {
    id: 'tiger-mackerel',
    number: 14,
    name: 'Tiger Mackerel',
    image: TigerMackerelImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'black-sea-bass',
    number: 15,
    name: 'Black Sea Bass',
    image: BlackSeaBassImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'stonefish',
    number: 16,
    name: 'Stonefish',
    image: StonefishImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'blackmouth-salmon',
    number: 17,
    name: 'Blackmouth Salmon',
    image: BlackmouthSalmonImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 0],
    ],
  },
  {
    id: 'conger-eel',
    number: 18,
    name: 'Conger Eel',
    image: CongerEelImage,
    width: 4,
    height: 2,
    shape: [
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ],
  },
  {
    id: 'devil-ray',
    number: 19,
    name: 'Devil Ray',
    image: DevilRayImage,
    width: 4,
    height: 3,
    shape: [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [0, 1, 1, 0],
    ],
  },
  {
    id: 'sturgeon',
    number: 20,
    name: 'Sturgeon',
    image: SturgeonImage,
    width: 3,
    height: 2,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
  },
  {
    id: 'wreckfish',
    number: 21,
    name: 'Wreckfish',
    image: WreckfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'rock-crab',
    number: 22,
    name: 'Rock Crab',
    image: RockCrabImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'decorator-crab',
    number: 23,
    name: 'Decorator Crab',
    image: DecoratorCrabImage,
    width: 3,
    height: 2,
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
  },
  {
    id: 'aurora-jellyfish',
    number: 24,
    name: 'Aurora Jellyfish',
    image: AuroraJellyfishImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'fangtooth',
    number: 25,
    name: 'Fangtooth',
    image: FangtoothImage,
    width: 1,
    height: 1,
    shape: [[1]],
  },
  {
    id: 'barreleye',
    number: 26,
    name: 'Barreleye',
    image: BarreleyeImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'firefly-squid',
    number: 27,
    name: 'Firefly Squid',
    image: FireflySquidImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'red-snapper',
    number: 28,
    name: 'Red Snapper',
    image: RedSnapperImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'giant-amphipod',
    number: 29,
    name: 'Giant Amphipod',
    image: GiantAmphipodImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'loosejaw',
    number: 30,
    name: 'Loosejaw',
    image: LoosejawImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 0],
    ],
  },
  {
    id: 'snailfish',
    number: 31,
    name: 'Snailfish',
    image: SnailfishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'coral-grouper',
    number: 32,
    name: 'Coral Grouper',
    image: CoralGrouperImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 0],
      [1, 1, 1],
    ],
  },
  {
    id: 'glowing-octopus',
    number: 33,
    name: 'Glowing Octopus',
    image: GlowingOctopusImage,
    width: 3,
    height: 2,
    shape: [
      [0, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'anglerfish',
    number: 34,
    name: 'Anglerfish',
    image: AnglerfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [0, 1, 1],
    ],
  },
  {
    id: 'barracuda',
    number: 35,
    name: 'Barracuda',
    image: BarracudaImage,
    width: 4,
    height: 1,
    shape: [[1, 1, 1, 1]],
  },
  {
    id: 'hammerhead-shark',
    number: 36,
    name: 'Hammerhead Shark',
    image: HammerheadSharkImage,
    width: 5,
    height: 3,
    shape: [
      [0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 1],
    ],
  },
  {
    id: 'crown-of-thorns',
    number: 37,
    name: 'Crown of Thorns',
    image: CrownOfThornsImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'blue-crab',
    number: 38,
    name: 'Blue Crab',
    image: BlueCrabImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'spiny-lobster',
    number: 39,
    name: 'Spiny Lobster',
    image: SpinyLobsterImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'grey-mullet',
    number: 40,
    name: 'Grey Mullet',
    image: GreyMulletImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'tarpon',
    number: 41,
    name: 'Tarpon',
    image: TarponImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'sergeant-fish',
    number: 42,
    name: 'Sergeant Fish',
    image: SergeantFishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'gar',
    number: 43,
    name: 'Gar',
    image: GarImage,
    width: 4,
    height: 1,
    shape: [[1, 1, 1, 1]],
  },
  {
    id: 'longfin-eel',
    number: 44,
    name: 'Longfin Eel',
    image: LongfinEelImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
  },
  {
    id: 'catfish',
    number: 45,
    name: 'Catfish',
    image: CatfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'horseshoe-crab',
    number: 46,
    name: 'Horseshoe Crab',
    image: HorseshoeCrabImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'giant-mud-crab',
    number: 47,
    name: 'Giant Mud Crab',
    image: GiantMudCrabImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'armored-searobin',
    number: 48,
    name: 'Armored Searobin',
    image: ArmoredSearobinImage,
    width: 2,
    height: 2,
    shape: [
      [1, 0],
      [1, 1],
    ],
  },
  {
    id: 'cusk-eel',
    number: 49,
    name: 'Cusk Eel',
    image: CuskEelImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'snake-mackerel',
    number: 50,
    name: 'Snake Mackerel',
    image: SnakeMackerelImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'pale-skate',
    number: 51,
    name: 'Pale Skate',
    image: PaleSkateImage,
    width: 2,
    height: 3,
    shape: [
      [0, 1],
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'ghost-shark',
    number: 52,
    name: 'Ghost Shark',
    image: GhostSharkImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
  },
  {
    id: 'frilled-shark',
    number: 53,
    name: 'Frilled Shark',
    image: FrilledSharkImage,
    width: 5,
    height: 2,
    shape: [
      [1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1],
    ],
  },
  {
    id: 'volcano-snail',
    number: 54,
    name: 'Volcano Snail',
    image: VolcanoSnailImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'squat-lobster',
    number: 55,
    name: 'Squat Lobster',
    image: SquatLobsterImage,
    width: 3,
    height: 3,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
  },
  {
    id: 'spider-crab',
    number: 56,
    name: 'Spider Crab',
    image: SpiderCrabImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
    ],
  },
  {
    id: 'anchovy',
    number: 57,
    name: 'Anchovy',
    image: AnchovyImage,
    width: 1,
    height: 1,
    shape: [[1]],
  },
  {
    id: 'scarlet-prawn',
    number: 58,
    name: 'Scarlet Prawn',
    image: ScarletPrawnImage,
    width: 1,
    height: 1,
    shape: [[1]],
  },
  {
    id: 'blackfin-tuna',
    number: 59,
    name: 'Blackfin Tuna',
    image: BlackfinTunaImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'viperfish',
    number: 60,
    name: 'Viperfish',
    image: ViperfishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'moonfish',
    number: 61,
    name: 'Moonfish',
    image: MoonfishImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'rattail',
    number: 62,
    name: 'Rattail',
    image: RattailImage,
    width: 3,
    height: 3,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
  },
  {
    id: 'ocean-sunfish',
    number: 63,
    name: 'Ocean Sunfish',
    image: OceanSunfishImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'icefish',
    number: 64,
    name: 'Icefish',
    image: IcefishImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
  },
  {
    id: 'char',
    number: 65,
    name: 'Char',
    image: CharImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 0],
    ],
  },
  {
    id: 'wolffish',
    number: 66,
    name: 'Wolffish',
    image: WolffishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
  },
  {
    id: 'stargazer',
    number: 67,
    name: 'Stargazer',
    image: StargazerImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    id: 'lizardfish',
    number: 68,
    name: 'Lizardfish',
    image: LizardfishImage,
    width: 2,
    height: 3,
    shape: [
      [1, 1],
      [1, 0],
      [1, 1],
    ],
  },
  {
    id: 'toothfish',
    number: 69,
    name: 'Toothfish',
    image: ToothfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
  },
  {
    id: 'goblin-shark',
    number: 70,
    name: 'Goblin Shark',
    image: GoblinSharkImage,
    width: 4,
    height: 2,
    shape: [
      [0, 1, 0, 0],
      [1, 1, 1, 1],
    ],
  },
  {
    id: 'colossal-squid',
    number: 71,
    name: 'Colossal Squid',
    image: ColossalSquidImage,
    width: 5,
    height: 3,
    shape: [
      [0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
    ],
  },
  {
    id: 'sea-stars',
    number: 72,
    name: 'Sea Stars',
    image: SeaStarsImage,
    width: 1,
    height: 2,
    shape: [[1], [1]],
  },
  {
    id: 'king-crab',
    number: 73,
    name: 'King Crab',
    image: KingCrabImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
  },
  {
    // oarfish
    id: 'oarfish',
    number: 74,
    name: 'Oarfish',
    image: OarfishImage,
    width: 6,
    height: 2,
    shape: [
      [0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ],
  },
  {
    id: 'gulper-eel',
    number: 75,
    name: 'Gulper Eel',
    image: GulperEelImage,
    width: 4,
    height: 2,
    shape: [
      [1, 1, 1, 1],
      [1, 1, 0, 1],
    ],
  },
  {
    id: 'goliath-tigerfish',
    number: 76,
    name: 'Goliath Tigerfish',
    image: GoliathTigerfishImage,
    width: 4,
    height: 2,
    shape: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
  },
  {
    id: 'coelacanth',
    number: 77,
    name: 'Coelacanth',
    image: CoelacanthImage,
    width: 5,
    height: 2,
    shape: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
    ],
  },
  {
    id: 'sleeper-shark',
    number: 78,
    name: 'Sleeper Shark',
    image: SleeperSharkImage,
    width: 5,
    height: 1,
    shape: [[1, 1, 1, 1, 1]],
  },
] as const;
