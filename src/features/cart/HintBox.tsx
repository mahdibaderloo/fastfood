import { CgDanger } from "react-icons/cg";

function HintBox() {
  const width = window.innerWidth;

  return (
    <div className="bg-white/40 flex items-center gap-1 p-2 sm:p-3 rounded-xl mt-4 sm:mt-6 xl:w-[90%] xl:mx-auto">
      <CgDanger size={width > 640 ? 55 : 45} color="#262626" />
      <p className="text-neutral-800 text-[0.5rem] sm:text-[0.65rem] lg:text-[0.7rem] 2xl:text-[0.88rem] text-justify">
        The invoice will be delivered together with your order. You can also
        track and view your order anytime from your dashboard
      </p>
    </div>
  );
}

export default HintBox;
