// import { useQuery } from "@tanstack/react-query";
import HeaderMenu from "../features/menu/HeaderMenu.js";
import MenuItem from "../features/menu/MenuItem.js";

function Menu() {
  // const { data } = useQuery({
  //   queryKey: ["pizzas"],
  //   queryFn: async () => {
  //     const response = await fetch(
  //       "https://68ed49cfdf2025af78ffc455.mockapi.io/pizza"
  //     );
  //     const data = await response.json();
  //     return data;
  //   },
  // });
  // console.log(data);

  return (
    <>
      <HeaderMenu />
      <main className="overflow-y-scroll pt-22">
        <ul className="flex items-center justify-center flex-wrap gap-2 mt-14 p-2">
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
          <MenuItem />
        </ul>
        <div className="w-full h-16"></div>
      </main>
    </>
  );
}

export default Menu;
