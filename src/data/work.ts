export type Category = 'feather' | 'coyote' | 'disturbia' | 'small'

export interface WorkItem {
  id: number
  title: string
  caption: string
  location: string
  category: Category
  src: string
}

export const CATEGORIES: { id: Category | 'all'; label: string }[] = [
  { id: 'all', label: 'All' },
  { id: 'feather', label: 'Feather & Flight' },
  { id: 'coyote', label: 'Coyote Country' },
  { id: 'disturbia', label: 'The Unvarnished' },
  { id: 'small', label: 'Small & Secret' },
]

export const WORK: WorkItem[] = [
  {
    id: 1,
    title: 'The Heron, Unimpressed',
    caption: 'Four hours we stood there. Neither of us would call it wasted time.',
    location: 'Unnamed drainage ditch, 5:47am',
    category: 'feather',
    src: '/img/w1.svg',
  },
  {
    id: 2,
    title: 'Small God',
    caption: 'Every owl is a small god who has never heard of you.',
    location: 'Fence post at the back field, dusk',
    category: 'feather',
    src: '/img/w2.svg',
  },
  {
    id: 3,
    title: 'The Kingfisher\u2019s Ledger',
    caption: 'He believes the river owes him something. Statistically, he\u2019s right.',
    location: 'Old mill pond, 6:12am',
    category: 'feather',
    src: '/img/w3.svg',
  },
  {
    id: 4,
    title: 'Professional Shrug',
    caption: 'Coyotes invented the shrug. This one is shrugging at the entire concept of weather.',
    location: 'Prairie edge, first light',
    category: 'coyote',
    src: '/img/w4.svg',
  },
  {
    id: 5,
    title: 'The Committee',
    caption: 'The pack stopped to discuss me for exactly one second. Their consensus: not dinner. The nicest compliment of my career.',
    location: 'Ridge line, 6:40am',
    category: 'coyote',
    src: '/img/w5.svg',
  },
  {
    id: 6,
    title: 'Song for a Deity',
    caption: 'He sang to the moon for twenty minutes. The moon did not respond. He tried again.',
    location: 'Full moon, east pasture',
    category: 'coyote',
    src: '/img/w6.svg',
  },
  {
    id: 7,
    title: 'Not Cruel, Just Tuesday',
    caption: 'She is not cruel. She is hungry, and the universe is not kind enough to schedule hunger.',
    location: 'Where the grass bends, 8:15am',
    category: 'disturbia',
    src: '/img/w7.svg',
  },
  {
    id: 8,
    title: 'No Interrogation',
    caption: 'The hawk asked no questions, and the field gave no answers.',
    location: 'Hayfield, overcast',
    category: 'disturbia',
    src: '/img/w8.svg',
  },
  {
    id: 9,
    title: 'The Whole of Nature',
    caption: 'What the mouse thought at the end, no one will ever know. That is the whole of nature in one sentence.',
    location: 'Weed line, 7:03am',
    category: 'disturbia',
    src: '/img/w9.svg',
  },
  {
    id: 10,
    title: '2% Brain, 98% Opinions',
    caption: 'This mantis is two percent brain and ninety-eight percent opinions, and it has somehow never once been wrong.',
    location: 'Garden fence, noon',
    category: 'small',
    src: '/img/w10.svg',
  },
  {
    id: 11,
    title: 'Aspire to the Snail',
    caption: 'The snail has no schedule, no enemies, no regret. I aspire to the snail.',
    location: 'Damp sidewalk after rain',
    category: 'small',
    src: '/img/w11.svg',
  },
  {
    id: 12,
    title: 'The Original Existentialist',
    caption: 'A spider\u2019s web is the original existentialist text. This one is currently in its tragedy section.',
    location: 'Deck railing, first frost',
    category: 'small',
    src: '/img/w12.svg',
  },
]
