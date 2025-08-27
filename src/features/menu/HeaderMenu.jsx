import pizzaIcon from "../../data/images/pizza.svg";

function HeaderMenu() {
  return (
    <header className="w-full flex items-center justify-center pt-4">
      <p className="text-5xl">PIZZ</p>
      <img src={pizzaIcon} alt="pizza" className="w-10" />
    </header>
  );
}

export default HeaderMenu;
