import pizzaPattern from "../../assets/images/PizzaPattern.jpg";
import image1 from "../../assets/images/1.jpg";

function UserInformation() {
  return (
    <div className="bg-amber-300 dark:bg-neutral-800">
      <div className="h-[150px] overflow-hidden object-contain">
        <img src={pizzaPattern} alt="pattern" className="" />
      </div>
      <div className="w-30 h-30 rounded-2xl bg-amber-300 dark:bg-neutral-800 absolute shadow top-10 left-0 right-0 m-auto overflow-hidden p-1">
        <img src={image1} alt="" className="rounded-xl shadow object-cover" />
      </div>
      <div className="w-full flex justify-center pt-16">
        <h1 className="text-amber-50 dark:text-amber-300 text-xl">
          Mahdi Baderloo
        </h1>
      </div>
    </div>
  );
}

export default UserInformation;
