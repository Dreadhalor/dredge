import * as FishImages from '@dredge/assets/fish';
import { Fish } from '@dredge/types';

export const fishData: Fish[] = [
  {
    type: 'fish',
    id: 'blue-mackerel',
    number: 1,
    name: 'Blue Mackerel',
    image: FishImages.BlueMackerelImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 10,
  },
  {
    type: 'fish',
    id: 'cod',
    number: 2,
    name: 'Cod',
    image: FishImages.CodImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [0, 1],
    ],
    value: 18,
  },
  {
    type: 'fish',
    id: 'arrow-squid',
    number: 3,
    name: 'Arrow Squid',
    image: FishImages.ArrowSquidImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 14,
  },
  {
    type: 'fish',
    id: 'grey-eel',
    number: 4,
    name: 'Grey Eel',
    image: FishImages.GreyEelImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 18,
  },
  {
    type: 'fish',
    id: 'gulf-flounder',
    number: 5,
    name: 'Gulf Flounder',
    image: FishImages.GulfFlounderImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 18,
  },
  {
    type: 'fish',
    id: 'black-grouper',
    number: 6,
    name: 'Black Grouper',
    image: FishImages.BlackGrouperImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 35,
  },
  {
    type: 'fish',
    id: 'stingray',
    number: 7,
    name: 'Stingray',
    image: FishImages.StingrayImage,
    width: 3,
    height: 3,
    shape: [
      [0, 1, 1],
      [1, 1, 1],
      [0, 1, 1],
    ],
    value: 60,
  },
  {
    type: 'fish',
    id: 'sailfish',
    number: 8,
    name: 'Sailfish',
    image: FishImages.SailfishImage,
    width: 6,
    height: 2,
    shape: [
      [0, 1, 1, 1, 0, 0],
      [1, 1, 1, 1, 1, 1],
    ],
    imageWidth: 5,
    imageHeight: 2,
    value: 120,
  },
  {
    type: 'fish',
    id: 'bronze-whaler',
    number: 9,
    name: 'Bronze Whaler',
    image: FishImages.BronzeWhalerImage,
    width: 4,
    height: 3,
    shape: [
      [0, 1, 0, 0],
      [1, 1, 1, 1],
      [0, 0, 1, 0],
    ],
    value: 100,
  },
  {
    type: 'fish',
    id: 'blacktip-reef-shark',
    number: 10,
    name: 'Blacktip Reef Shark',
    image: FishImages.BlacktipReefSharkImage,
    width: 4,
    height: 3,
    shape: [
      [0, 0, 1, 0],
      [1, 1, 1, 1],
      [0, 1, 0, 0],
    ],
    value: 120,
  },
  {
    type: 'fish',
    id: 'common-crab',
    number: 11,
    name: 'Common Crab',
    image: FishImages.CommonCrabImage,
    width: 1,
    height: 1,
    shape: [[1]],
    value: 5.25,
  },
  {
    type: 'fish',
    id: 'fiddler-crab',
    number: 12,
    name: 'Fiddler Crab',
    image: FishImages.FiddlerCrabImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 0],
    ],
    value: 35,
  },
  {
    type: 'fish',
    id: 'oceanic-perch',
    number: 13,
    name: 'Oceanic Perch',
    image: FishImages.OceanicPerchImage,
    width: 1,
    height: 1,
    shape: [[1]],
    value: 5.5,
  },
  {
    type: 'fish',
    id: 'tiger-mackerel',
    number: 14,
    name: 'Tiger Mackerel',
    image: FishImages.TigerMackerelImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 12.5,
  },
  {
    type: 'fish',
    id: 'black-sea-bass',
    number: 15,
    name: 'Black Sea Bass',
    image: FishImages.BlackSeaBassImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 15,
  },
  {
    type: 'fish',
    id: 'stonefish',
    number: 16,
    name: 'Stonefish',
    image: FishImages.StonefishImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 22,
  },
  {
    type: 'fish',
    id: 'blackmouth-salmon',
    number: 17,
    name: 'Blackmouth Salmon',
    image: FishImages.BlackmouthSalmonImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 0],
    ],
    value: 20,
  },
  {
    type: 'fish',
    id: 'conger-eel',
    number: 18,
    name: 'Conger Eel',
    image: FishImages.CongerEelImage,
    width: 4,
    height: 2,
    shape: [
      [1, 1, 0, 0],
      [0, 1, 1, 1],
    ],
    value: 50,
  },
  {
    type: 'fish',
    id: 'devil-ray',
    number: 19,
    name: 'Devil Ray',
    image: FishImages.DevilRayImage,
    width: 4,
    height: 3,
    shape: [
      [0, 1, 1, 0],
      [1, 1, 1, 1],
      [0, 1, 1, 0],
    ],
    value: 55,
  },
  {
    type: 'fish',
    id: 'sturgeon',
    number: 20,
    name: 'Sturgeon',
    image: FishImages.SturgeonImage,
    width: 3,
    height: 2,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
    ],
    value: 50,
  },
  {
    type: 'fish',
    id: 'wreckfish',
    number: 21,
    name: 'Wreckfish',
    image: FishImages.WreckfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
    value: 60,
  },
  {
    type: 'fish',
    id: 'rock-crab',
    number: 22,
    name: 'Rock Crab',
    image: FishImages.RockCrabImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 11.5,
  },
  {
    type: 'fish',
    id: 'decorator-crab',
    number: 23,
    name: 'Decorator Crab',
    image: FishImages.DecoratorCrabImage,
    width: 3,
    height: 2,
    shape: [
      [0, 1, 0],
      [1, 1, 1],
    ],
    value: 27,
  },
  {
    type: 'fish',
    id: 'aurora-jellyfish',
    number: 24,
    name: 'Aurora Jellyfish',
    image: FishImages.AuroraJellyfishImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 10,
  },
  {
    type: 'fish',
    id: 'fangtooth',
    number: 25,
    name: 'Fangtooth',
    image: FishImages.FangtoothImage,
    width: 1,
    height: 1,
    shape: [[1]],
    value: 8,
  },
  {
    type: 'fish',
    id: 'barreleye',
    number: 26,
    name: 'Barreleye',
    image: FishImages.BarreleyeImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 15,
  },
  {
    type: 'fish',
    id: 'firefly-squid',
    number: 27,
    name: 'Firefly Squid',
    image: FishImages.FireflySquidImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 15,
  },
  {
    type: 'fish',
    id: 'red-snapper',
    number: 28,
    name: 'Red Snapper',
    image: FishImages.RedSnapperImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 13,
  },
  {
    type: 'fish',
    id: 'giant-amphipod',
    number: 29,
    name: 'Giant Amphipod',
    image: FishImages.GiantAmphipodImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 30,
  },
  {
    type: 'fish',
    id: 'loosejaw',
    number: 30,
    name: 'Loosejaw',
    image: FishImages.LoosejawImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 0],
    ],
    value: 25,
  },
  {
    type: 'fish',
    id: 'snailfish',
    number: 31,
    name: 'Snailfish',
    image: FishImages.SnailfishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 40,
  },
  {
    type: 'fish',
    id: 'coral-grouper',
    number: 32,
    name: 'Coral Grouper',
    image: FishImages.CoralGrouperImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 0],
      [1, 1, 1],
    ],
    value: 40,
  },
  {
    type: 'fish',
    id: 'glowing-octopus',
    number: 33,
    name: 'Glowing Octopus',
    image: FishImages.GlowingOctopusImage,
    width: 3,
    height: 2,
    shape: [
      [0, 1, 1],
      [1, 1, 1],
    ],
    value: 40,
  },
  {
    type: 'fish',
    id: 'anglerfish',
    number: 34,
    name: 'Anglerfish',
    image: FishImages.AnglerfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [0, 1, 1],
    ],
    value: 50,
  },
  {
    type: 'fish',
    id: 'barracuda',
    number: 35,
    name: 'Barracuda',
    image: FishImages.BarracudaImage,
    width: 4,
    height: 1,
    shape: [[1, 1, 1, 1]],
    value: 35,
  },
  {
    type: 'fish',
    id: 'hammerhead-shark',
    number: 36,
    name: 'Hammerhead Shark',
    image: FishImages.HammerheadSharkImage,
    width: 5,
    height: 3,
    shape: [
      [0, 0, 1, 0, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 0, 1],
    ],
    value: 175,
  },
  {
    type: 'fish',
    id: 'crown-of-thorns',
    number: 37,
    name: 'Crown of Thorns',
    image: FishImages.CrownOfThornsImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    value: 10,
  },
  {
    type: 'fish',
    id: 'blue-crab',
    number: 38,
    name: 'Blue Crab',
    image: FishImages.BlueCrabImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 15,
  },
  {
    type: 'fish',
    id: 'spiny-lobster',
    number: 39,
    name: 'Spiny Lobster',
    image: FishImages.SpinyLobsterImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 30,
  },
  {
    type: 'fish',
    id: 'grey-mullet',
    number: 40,
    name: 'Grey Mullet',
    image: FishImages.GreyMulletImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 14,
  },
  {
    type: 'fish',
    id: 'tarpon',
    number: 41,
    name: 'Tarpon',
    image: FishImages.TarponImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 25,
  },
  {
    type: 'fish',
    id: 'sergeant-fish',
    number: 42,
    name: 'Sergeant Fish',
    image: FishImages.SergeantFishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 30,
  },
  {
    type: 'fish',
    id: 'gar',
    number: 43,
    name: 'Gar',
    image: FishImages.GarImage,
    width: 4,
    height: 1,
    shape: [[1, 1, 1, 1]],
    value: 40,
  },
  {
    type: 'fish',
    id: 'longfin-eel',
    number: 44,
    name: 'Longfin Eel',
    image: FishImages.LongfinEelImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 0, 0],
      [1, 0, 0],
    ],
    value: 65,
  },
  {
    type: 'fish',
    id: 'catfish',
    number: 45,
    name: 'Catfish',
    image: FishImages.CatfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
    value: 70,
  },
  {
    type: 'fish',
    id: 'horseshoe-crab',
    number: 46,
    name: 'Horseshoe Crab',
    image: FishImages.HorseshoeCrabImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 12.5,
  },
  {
    type: 'fish',
    id: 'giant-mud-crab',
    number: 47,
    name: 'Giant Mud Crab',
    image: FishImages.GiantMudCrabImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
    value: 50,
  },
  {
    type: 'fish',
    id: 'armored-searobin',
    number: 48,
    name: 'Armored Searobin',
    image: FishImages.ArmoredSearobinImage,
    width: 2,
    height: 2,
    shape: [
      [1, 0],
      [1, 1],
    ],
    value: 22,
  },
  {
    type: 'fish',
    id: 'cusk-eel',
    number: 49,
    name: 'Cusk Eel',
    image: FishImages.CuskEelImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 30,
  },
  {
    type: 'fish',
    id: 'snake-mackerel',
    number: 50,
    name: 'Snake Mackerel',
    image: FishImages.SnakeMackerelImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 22,
  },
  {
    type: 'fish',
    id: 'pale-skate',
    number: 51,
    name: 'Pale Skate',
    image: FishImages.PaleSkateImage,
    width: 2,
    height: 3,
    shape: [
      [0, 1],
      [1, 1],
      [1, 1],
    ],
    value: 55,
  },
  {
    type: 'fish',
    id: 'ghost-shark',
    number: 52,
    name: 'Ghost Shark',
    image: FishImages.GhostSharkImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [0, 1, 0],
    ],
    value: 50,
  },
  {
    type: 'fish',
    id: 'frilled-shark',
    number: 53,
    name: 'Frilled Shark',
    image: FishImages.FrilledSharkImage,
    width: 5,
    height: 2,
    shape: [
      [1, 1, 0, 0, 0],
      [0, 1, 1, 1, 1],
    ],
    value: 125,
  },
  {
    type: 'fish',
    id: 'volcano-snail',
    number: 54,
    name: 'Volcano Snail',
    image: FishImages.VolcanoSnailImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 27,
  },
  {
    type: 'fish',
    id: 'squat-lobster',
    number: 55,
    name: 'Squat Lobster',
    image: FishImages.SquatLobsterImage,
    width: 3,
    height: 3,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    value: 45,
  },
  {
    type: 'fish',
    id: 'spider-crab',
    number: 56,
    name: 'Spider Crab',
    image: FishImages.SpiderCrabImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 0, 1],
      [1, 0, 1],
    ],
    value: 80,
  },
  {
    type: 'fish',
    id: 'anchovy',
    number: 57,
    name: 'Anchovy',
    image: FishImages.AnchovyImage,
    width: 1,
    height: 1,
    shape: [[1]],
    value: 6.5,
  },
  {
    type: 'fish',
    id: 'scarlet-prawn',
    number: 58,
    name: 'Scarlet Prawn',
    image: FishImages.ScarletPrawnImage,
    width: 1,
    height: 1,
    shape: [[1]],
    value: 7,
  },
  {
    type: 'fish',
    id: 'blackfin-tuna',
    number: 59,
    name: 'Blackfin Tuna',
    image: FishImages.BlackfinTunaImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 20,
  },
  {
    type: 'fish',
    id: 'viperfish',
    number: 60,
    name: 'Viperfish',
    image: FishImages.ViperfishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 24,
  },
  {
    type: 'fish',
    id: 'moonfish',
    number: 61,
    name: 'Moonfish',
    image: FishImages.MoonfishImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 45,
  },
  {
    type: 'fish',
    id: 'rattail',
    number: 62,
    name: 'Rattail',
    image: FishImages.RattailImage,
    width: 3,
    height: 3,
    shape: [
      [1, 0, 0],
      [1, 1, 1],
      [1, 0, 0],
    ],
    value: 60,
  },
  {
    type: 'fish',
    id: 'ocean-sunfish',
    number: 63,
    name: 'Ocean Sunfish',
    image: FishImages.OceanSunfishImage,
    width: 3,
    height: 3,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
      [1, 1, 1],
    ],
    value: 115,
  },
  {
    type: 'fish',
    id: 'icefish',
    number: 64,
    name: 'Icefish',
    image: FishImages.IcefishImage,
    width: 2,
    height: 1,
    shape: [[1, 1]],
    value: 13,
  },
  {
    type: 'fish',
    id: 'char',
    number: 65,
    name: 'Char',
    image: FishImages.CharImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 0],
    ],
    value: 18,
  },
  {
    type: 'fish',
    id: 'wolffish',
    number: 66,
    name: 'Wolffish',
    image: FishImages.WolffishImage,
    width: 3,
    height: 1,
    shape: [[1, 1, 1]],
    value: 25,
  },
  {
    type: 'fish',
    id: 'stargazer',
    number: 67,
    name: 'Stargazer',
    image: FishImages.StargazerImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 35,
  },
  {
    type: 'fish',
    id: 'lizardfish',
    number: 68,
    name: 'Lizardfish',
    image: FishImages.LizardfishImage,
    width: 2,
    height: 3,
    shape: [
      [1, 1],
      [1, 0],
      [1, 1],
    ],
    value: 45,
  },
  {
    type: 'fish',
    id: 'toothfish',
    number: 69,
    name: 'Toothfish',
    image: FishImages.ToothfishImage,
    width: 3,
    height: 2,
    shape: [
      [1, 1, 1],
      [1, 1, 1],
    ],
    value: 60,
  },
  {
    type: 'fish',
    id: 'goblin-shark',
    number: 70,
    name: 'Goblin Shark',
    image: FishImages.GoblinSharkImage,
    width: 4,
    height: 2,
    shape: [
      [0, 1, 0, 0],
      [1, 1, 1, 1],
    ],
    value: 75,
  },
  {
    type: 'fish',
    id: 'colossal-squid',
    number: 71,
    name: 'Colossal Squid',
    image: FishImages.ColossalSquidImage,
    width: 5,
    height: 3,
    shape: [
      [0, 0, 1, 1, 1],
      [1, 1, 1, 1, 1],
      [0, 0, 1, 1, 1],
    ],
    value: 200,
  },
  {
    type: 'fish',
    id: 'sea-stars',
    number: 72,
    name: 'Sea Stars',
    image: FishImages.SeaStarsImage,
    width: 1,
    height: 2,
    shape: [[1], [1]],
    value: 12,
  },
  {
    type: 'fish',
    id: 'king-crab',
    number: 73,
    name: 'King Crab',
    image: FishImages.KingCrabImage,
    width: 2,
    height: 2,
    shape: [
      [1, 1],
      [1, 1],
    ],
    value: 35,
  },
  {
    type: 'fish',
    id: 'oarfish',
    number: 74,
    name: 'Oarfish',
    image: FishImages.OarfishImage,
    width: 6,
    height: 2,
    shape: [
      [0, 0, 0, 0, 0, 1],
      [1, 1, 1, 1, 1, 1],
    ],
    value: 250,
  },
  {
    type: 'fish',
    id: 'gulper-eel',
    number: 75,
    name: 'Gulper Eel',
    image: FishImages.GulperEelImage,
    width: 4,
    height: 2,
    shape: [
      [1, 1, 1, 1],
      [1, 1, 0, 1],
    ],
    value: 250,
  },
  {
    type: 'fish',
    id: 'goliath-tigerfish',
    number: 76,
    name: 'Goliath Tigerfish',
    image: FishImages.GoliathTigerfishImage,
    width: 4,
    height: 2,
    shape: [
      [1, 1, 1, 1],
      [1, 1, 1, 1],
    ],
    value: 250,
  },
  {
    type: 'fish',
    id: 'coelacanth',
    number: 77,
    name: 'Coelacanth',
    image: FishImages.CoelacanthImage,
    width: 5,
    height: 2,
    shape: [
      [0, 1, 0, 1, 0],
      [1, 1, 1, 1, 1],
    ],
    value: 250,
  },
  {
    type: 'fish',
    id: 'sleeper-shark',
    number: 78,
    name: 'Sleeper Shark',
    image: FishImages.SleeperSharkImage,
    width: 5,
    height: 1,
    shape: [[1, 1, 1, 1, 1]],
    value: 250,
  },
] as const;
