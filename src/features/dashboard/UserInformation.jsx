import pizzaPattern from "../../data/images/PizzaPattern.jpg";

function UserInformation() {
  return (
    <div className="bg-amber-300 h-screen overflow-hidden">
      <div className="h-[150px] overflow-hidden object-contain">
        <img src={pizzaPattern} alt="pattern" className="" />
      </div>
      <div className="w-30 h-30 rounded-3xl bg-amber-50 absolute shadow top-10 left-0 right-0 m-auto">
        <img src="" alt="" />
      </div>
      <div className="w-full flex justify-center pt-16">
        <h1 className="text-amber-50 text-xl">Mahdi Baderloo</h1>
      </div>
    </div>
  );
}

export default UserInformation;
