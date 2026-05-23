import { ButtonProps } from "../types/types";

export default function Button({
  children,
  divStyles,
  text,
  textColor,
  textDarkColor,
  bg,
  darkBg,
  onclick,
}: ButtonProps) {
  return (
    <div className={divStyles ? divStyles : "flex justify-center"}>
      <button
        onClick={onclick}
        className={`flex items-center justify-center gap-2 ${bg} dark:${darkBg} ${textColor} dark:${textDarkColor} 2xl:text-xl p-2 sm:p-3 rounded-lg sm:rounded-xl w-full lg:w-[40%] 2xl:w-[50%] 2xl:h-14 mt-6 shadow lg:cursor-pointer lg:hover:bg-neutral-950 lg:dark:hover:bg-amber-400 transition-all`}
      >
        {children}
        {text}
      </button>
    </div>
  );
}
