import { Product } from '../types';

export const products: Product[] = [
  {
    id: 'combo1',
    name: 'Sreekesh Herbal Combo',
    price: '₹1500',
    originalPrice: '₹2700',
    images: [
      '/media/IMGP41.jpg',
      '/media/IMGP12.jpg',
      '/media/IMGP22.jpg',

    ],
    ingredients: 'Sreekesh Herbal oil (QTY 2)\nSreekesh Shikakai powder (QTY 2)' ,
    benefits: [
      'Promotes hair growth and reduces hair fall',
      'Prevents premature graying of hair',
      'Nourishes scalp and strengthens hair roots',
      'Adds natural shine and volume to hair',
      'Reduces dandruff and soothes itchy scalp'
    ]
  },
  {
    id: 'combo2',
    name: 'Sreekesh Herbal Kit',
    price: '₹900',
    originalPrice: '₹1350',
    images: [
      '/media/IMGP31.jpg',
      '/media/IMGP12.jpg',
      '/media/IMGP22.jpg',

    ],
    ingredients: 'Sreekesh Herbal oil (QTY 1)\nSreekesh Shikakai powder (QTY 1)' ,
    benefits: [
      'Promotes hair growth and reduces hair fall',
      'Prevents premature graying of hair',
      'Nourishes scalp and strengthens hair roots',
      'Adds natural shine and volume to hair',
      'Reduces dandruff and soothes itchy scalp'
    ]
  },
  {
    id: 'herbal-oil',
    name: 'Sreekesh Herbal Oil',
    price: '₹900',
    images: [
      '/media/IMGP11.jpg',
      '/media/IMGP12.jpg',

    ],
    ingredients: 'Aloe Vera, Hibiscus, Fenugreek (Methi), Rosemary, Coconut Oil, Black Cumin',
    benefits: [
      'Promotes hair growth and reduces hair fall',
      'Prevents premature graying of hair',
      'Nourishes scalp and strengthens hair roots',
      'Adds natural shine and volume to hair',
      'Reduces dandruff and soothes itchy scalp'
    ]
  },
  {
    id: 'shikakai-powder',
    name: 'Sreekesh Shikakai Powder',
    price: '₹450',
    images: [
      '/media/IMGP21.jpg',
      '/media/IMGP22.jpg',

    ],
    ingredients: 'Pure Shikakai (Acacia Concinna), Bhringraj,  Amla, Hibiscus Flower, Fenugreek (Methi), Hibiscus Leaves, Neem, Black seed' ,
    benefits: [
      'Natural cleanser that doesn\'t strip hair of natural oils',
      'Improves hair texture and adds volume',
      'Conditions the hair naturally',
      'Controls dandruff and scalp infections',
      'Strengthens hair follicles reducing breakage'
    ]
  }

];