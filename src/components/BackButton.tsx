import { BiArrowBack } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function BackButton() {
  const navigate = useNavigate();

  return (
    <div className="hidden lg:block">
      <button
        onClick={() => navigate(-1)}
        className="text-neutral-800/70 dark:text-amber-200/70 text-[0.75rem] flex items-center cursor-pointer border border-neutral-500/70 dark:border-amber-300/10 rounded-lg p-1 hover:bg-neutral-900/10 dark:hover:bg-amber-300/10 transition-all delay-30"
      >
        <BiArrowBack />
        <span className="">Back</span>
      </button>
    </div>
  );
}

export default BackButton;
