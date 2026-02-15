import pizza1 from "../assets/images/loading-1.png";
import pizza2 from "../assets/images/loading-2.png";
import pizza3 from "../assets/images/loading-3.png";
import pizza4 from "../assets/images/loading-4.png";
import pizza5 from "../assets/images/loading-5.png";
import pizza6 from "../assets/images/loading-6.png";
import pizza7 from "../assets/images/loading-7.png";
import pizza8 from "../assets/images/loading-8.png";

function Loading() {
  return (
    <div className="w-full h-screen flex justify-center items-center relative bg-amber-300">
      <img
        src={pizza1}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "0.5s" }}
      />
      <img
        src={pizza2}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "0.65s" }}
      />
      <img
        src={pizza3}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "0.8s" }}
      />
      <img
        src={pizza4}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "0.95s" }}
      />
      <img
        src={pizza5}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "1.1s" }}
      />
      <img
        src={pizza6}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "1.25s" }}
      />
      <img
        src={pizza7}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "1.4s" }}
      />
      <img
        src={pizza8}
        alt="pizza-icon"
        className="w-28 absolute animate-opacity"
        style={{ animationDelay: "1.55s" }}
      />
    </div>
  );
}

export default Loading;
