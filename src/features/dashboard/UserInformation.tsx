import pizzaPattern from "../../assets/images/PizzaPattern.jpg";
import image1 from "../../assets/images/1.jpg";

function UserInformation() {
  return (
    <div className="bg-amber-300 dark:bg-neutral-800">
      <div className="h-26 sm:h-30 lg:h-50 lg:w-full overflow-hidden object-contain 2xl:hidden">
        <img src={pizzaPattern} alt="pattern" className="lg:w-full" />
      </div>
      <div className="w-30 h-30 sm:w-34 sm:h-34 lg:w-30 lg:h-30 2xl:h-40 2xl:w-40 rounded-2xl bg-amber-300 dark:bg-neutral-800 absolute shadow top-10 sm:top-14 lg:top-18 left-0 right-0 m-auto overflow-hidden p-1 2xl:p-0 2xl:static 2xl:mt-20 2xl:border-8 2xl:border-amber-50 2xl:dark:border-neutral-700">
        <img
          src={image1}
          alt=""
          className="rounded-xl 2xl:rounded-none shadow object-cover"
        />
      </div>
      <div className="w-full flex justify-center pt-16 sm:pt-20 lg:hidden">
        <h3 className="text-amber-50 dark:text-amber-300 text-xl">
          Mahdi Baderloo
        </h3>
      </div>
    </div>
  );
}

export default UserInformation;
