import { SIZE_TYPES } from '../settings';

const initialState = {
  categories: [
    { id: 'bed', name: 'Bed' },
    { id: 'chair', name: 'Chair' },
    { id: 'sofa', name: 'Sofa' },
    { id: 'table', name: 'Table' },
    { id: 'dining', name: 'Dining' },
  ],

  screenType: SIZE_TYPES.DESKTOP,

  products: [
    {
      id: 'aenean-ru-bristique-1',
      name: 'Aenean Ru Bristique 1',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-2',
      name: 'Aenean Ru Bristique 2',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 3,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-3',
      name: 'Aenean Ru Bristique 3',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 1,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
      favorite: true,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-4',
      name: 'Aenean Ru Bristique 4',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-5',
      name: 'Aenean Ru Bristique 5',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-6',
      name: 'Aenean Ru Bristique 6',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-7',
      name: 'Aenean Ru Bristique 7',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-8',
      name: 'Aenean Ru Bristique 8',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-9',
      name: 'Aenean Ru Bristique 9',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-10',
      name: 'Aenean Ru Bristique 10',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-11',
      name: 'Aenean Ru Bristique 11',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-12',
      name: 'Aenean Ru Bristique 12',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-13',
      name: 'Aenean Ru Bristique 13',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-14',
      name: 'Aenean Ru Bristique 14',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-15',
      name: 'Aenean Ru Bristique 15',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-16',
      name: 'Aenean Ru Bristique 16',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-17',
      name: 'Aenean Ru Bristique 17',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-18',
      name: 'Aenean Ru Bristique 18',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-19',
      name: 'Aenean Ru Bristique 19',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-20',
      name: 'Aenean Ru Bristique 20',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-21',
      name: 'Aenean Ru Bristique 21',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2016/12/30/07/55/bedroom-1940169_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-22',
      name: 'Aenean Ru Bristique 22',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/11/24/11/36/bedroom-5772286_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-23',
      name: 'Aenean Ru Bristique 23',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-24',
      name: 'Aenean Ru Bristique 24',
      category: 'bed',
      price: 30,
      stars: 2,
      customStars: 0,
      promo: 'sale',
      newFurniture: true,
      image: 'https://cdn.pixabay.com/photo/2017/01/14/12/48/hotel-1979406_1280.jpg',
      favorite: false,
      compare: false,
    },
    {
      id: 'aenean-ru-bristique-25',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-26',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2017/06/29/07/32/chair-2453307_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-27',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-28',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2019/03/23/14/14/chair-4075443__340.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-29',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-30',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-31',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-32',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-33',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-34',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-35',
      name: 'Aenean Ru Bristique 24',
      category: 'chair',
      image: 'https://cdn.pixabay.com/photo/2015/04/20/13/13/chair-731171_1280.jpg',
      price: 45,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-36',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-37',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-38',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-39',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-40',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-41',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-42',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-43',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-44',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-45',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-46',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-47',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-48',
      name: 'Aenean Ru Bristique 23',
      category: 'sofa',
      image:
        'https://media.istockphoto.com/photos/modern-grey-sofa-picture-id1186974930?b=1&k=6&m=1186974930&s=170667a&w=0&h=VwN3RmuVYxsBaKBTFYFIKeyQ3UoqJJYddImhIHnhxW8=',
      price: 30,
      stars: 2,
      promo: 'sale',
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-49',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-50',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-51',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-52',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-53',
      name: 'Aenean Ru Bristique 24',
      category: 'dining',
      image:
        'https://cdn.pixabay.com/photo/2016/11/18/14/05/brick-wall-1834784__340.jpg',
      price: 30,
      newFurniture: true,
    },
    {
      id: 'aenean-ru-bristique-54',
      name: 'Aenean Ru Bristique 24',
      category: 'table',
      image: 'https://cdn.pixabay.com/photo/2017/03/28/12/10/chairs-2181947__340.jpg',
      price: 30,
      newFurniture: true,
    },
  ],
  cart: {
    products: [],
  },
  brands: [
    {
      id: 'brand1',
      name: 'Brand 1',
      logo: './images/1logo.png',
    },
    {
      id: 'brand2',
      name: 'Brand 2',
      logo: './images/2logo.png',
    },
    {
      id: 'brand3',
      name: 'Brand 3',
      logo: './images/3logo.png',
    },
    {
      id: 'brand4',
      name: 'Brand 4',
      logo: './images/4logo.png',
    },
    {
      id: 'brand5',
      name: 'Brand 5',
      logo: './images/5logo.png',
    },
    {
      id: 'brand6',
      name: 'Brand 6',
      logo: './images/6logo.png',
    },
  ],

  promotion: {
    leftImage:
      'https://media.istockphoto.com/photos/interior-with-armchair-and-coffee-table-3d-rendering-picture-id1158575634?k=6&m=1158575634&s=612x612&w=0&h=Fkh9dLz9W8TKkKwJstagndsCu92badT0y6m-w8iqB-g=',
    leftDescription: ['Guest room', 'Sofa', '-20%'],
    rightUpImage:
      'https://cdn.pixabay.com/photo/2017/08/03/15/38/architecture-2576906_1280.jpg',
    rightUpDescription: ['Office', 'chair', 'Collection', '$200.00'],
    rightDownImage:
      'https://media.istockphoto.com/photos/interior-of-modern-living-room-with-white-fabric-sofa-over-blue-wall-picture-id1136363292?k=6&m=1136363292&s=612x612&w=0&h=4DjPA8KlSLP6l75B7Bh0zZXbmTjjYLS5KThkvDn86Rs=',
    rightDownDescription: ['Special', 'collection', 'Save up', '45%', 'of furniture'],
  },

  prodPopup: {
    isShown: false,
    productId: 'aenean-ru-bristique-23',
  },
  feedbacks: [
    {
      id: 'feedback1',
      text:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip',
      foto: '',
      name: 'John Doe',
      description: 'Furniture client',
    },
    {
      id: 'feedback2',
      text:
        'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta',
      foto: '',
      name: 'John Smith',
      description: 'New bed owner',
    },
    {
      id: 'feedback3',
      text:
        'At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident',
      foto: '',
      name: 'Kristoff Koloski',
      description: 'Kitchen designer',
    },
  ],

  promoted: {
    name: 'Blanditiis Rerum Incidunt',
    image: 'https://cdn.pixabay.com/photo/2020/10/18/09/16/bedroom-5664221_1280.jpg',
    oldPrice: 350,
    price: 300,
  },
};

export default initialState;
