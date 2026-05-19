import MenuItem from "./MenuItem";

interface Food {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
}

type Items = { filteredSearchItems: Food[] };

function MenuItems({ filteredSearchItems }: Items) {
  return (
    <ul className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mt-14 lg:mt-0 p-2 xl:w-[1100px] 2xl:w-[1350px] lg:mx-auto">
      {filteredSearchItems.length > 0 &&
        filteredSearchItems.map((food) => (
          <MenuItem key={food.id} item={food} />
        ))}
    </ul>
  );
}

export default MenuItems;
