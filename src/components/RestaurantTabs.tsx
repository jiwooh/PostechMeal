// src/components/RestaurantTabs.tsx

import { Tables } from '@/lib/database.types';

import LinkWrapper from '@/components/LinkWrapper';

type Restaurant = Tables<'restaurants'>;

interface RestaurantTabsProps {
  restaurants: Restaurant[];
  selectedRestaurant: number | null;
}

const RestaurantTabs: React.FC<RestaurantTabsProps> = ({
  restaurants,
  selectedRestaurant,
}) => {
  return (
    <div className='bg-gray-200 mb-4 overflow-x-auto'>
      <ul className='flex space-x-3 md:space-x-5 text-xs md:text-lg whitespace-nowrap p-4'>
        {restaurants &&
          restaurants.map((restaurant, index) => (
            <li
              key={restaurant.restaurant_id}
              className={`cursor-pointer ${
                selectedRestaurant == restaurant.restaurant_id
                  ? 'font-bold'
                  : 'font-light'
              } ${index === restaurants.length - 1 ? 'pr-4' : ''}`}
            >
              <LinkWrapper href={`/restaurant/${restaurant.restaurant_id}`}>
                {restaurant.name}
              </LinkWrapper>
            </li>
          ))}
      </ul>
    </div>
  );
};

export default RestaurantTabs;
