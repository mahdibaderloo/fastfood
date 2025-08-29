import pizza from "../../data/images/loading-1.png";

function MenuItem() {
  return (
    <li className="bg-amber-50 rounded-lg w-[44%] flex flex-col p-2">
      <img src={pizza} alt="product-image" className="w-full" />
      <p>Pizza</p>
      <p>$15</p>
    </li>
  );
}

export default MenuItem;
