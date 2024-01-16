import { faHouseChimney, faPhone, faHouseUser, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import apartmentImg from '../src/assets/PropertyTypes/h3.png'
import houseImg from '../src/assets/PropertyTypes/h2.png'
import villaImg from './assets/PropertyTypes/h6.png'
import landImg from './assets/PropertyTypes/h1.png'
import officeImg from './assets/PropertyTypes/h4.png'
import semiDetachedHouseImg from './assets/PropertyTypes/h8.png'
import pentHouseImg from './assets/PropertyTypes/h5.png'
import dormitoryImg from './assets/PropertyTypes/h7.png'


export const CORE_CONCEPTS = [
  {
    icon: faHouseChimney,
    title: 'Find your dream home',
    description:
      'Look up for the properties to buy & rent.',
  },
  {
    icon: faPhone,
    title: 'Contact sellers & buyers',
    description:
      'Connect directly with potential buyers and sellers to facilitate smooth and transparent property transactions.',
  },
  {
    icon: faHouseUser,
    title: 'Post your property',
    description:
      'Easily list your property for sale or rent, reaching a wide audience of prospective buyers and tenants.',
  },
  {
    icon: faUserPlus,
    title: 'Easily Sign Up',
    description:
      'Sign up effortlessly to unlock a world of real estate opportunities and personalized property solutions.',
  },
];




export const EXAMPLES = {
  apartment: {
    title: 'Apartment',
    description:
      'Explore our curated selection of available apartments, each offering comfort and convenience for the perfect urban living experience',
    image: apartmentImg,
  },
  house: {
    title: 'House',
    description:
      'Browse through our collection of available houses, ready for you to create your next home in a space designed for lifes best moments.',
    image: houseImg,
  },
  villa: {
    title: 'Villa',
    description:
      'Discover the luxury of space and privacy in our exclusive range of available villas, crafted for elegance and upscale living',
    image: villaImg,
  },
  land: {
    title: 'Land',
    description:
      'Uncover a world of potential with our expansive array of available land parcels, perfect for building your dream project from the ground up',
    image: landImg,
  },
  office:{
    title: 'Office',
    description:'Find your business"s next home with our selection of available offices, designed to inspire productivity and foster growth.',
    image:officeImg,
},
  semiDetachedHouse: {
    title: 'Semi-Detached House',
    description:'Explore the perfect balance of community and privacy with our available semi-detached houses, blending shared spaces with your own tranquil retreat.',
    image: semiDetachedHouseImg,
  },
  pentHouse: {
    title: 'Penthouse',
    description:'Discover the pinnacle of luxury living with our selection of available penthouses, offering the ultimate in comfort and convenience.',
    image: pentHouseImg,
  },
  dormitory: {
    title: 'Dormitory',
    description:'Find your next home away from home with our selection of available dormitories, designed to provide a safe and comfortable living experience.',
    image: dormitoryImg,
  },
};
