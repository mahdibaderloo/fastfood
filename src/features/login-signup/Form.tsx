import { Link } from "react-router-dom";
import { FormProps } from "../../types/types";
import Button from "../../components/Button";
import { BiUser } from "react-icons/bi";
import { CgLock } from "react-icons/cg";
import FormInput from "./FormInput";

export default function Form({ url, text, buttonTitle, linkTitle }: FormProps) {
  return (
    <form className="w-[75%] flex flex-col gap-4 justify-center items-center mx-auto">
      <FormInput inputType="text" placeholder="Username">
        <BiUser className="text-xl text-neutral-800/70 dark:text-amber-300/70" />
      </FormInput>
      <div className="rounded-full border-3 border-neutral-800/70 dark:border-amber-300/70 p-1.5 px-2 flex items-center gap-2">
        <CgLock className="text-xl text-neutral-800/70 dark:text-amber-300/70" />
        <input
          type="password"
          className="border-none outline-none text-sm text-neutral-800/70 dark:text-amber-300/70"
          placeholder="#####"
        />
      </div>
      <p className="text-sm text-neutral-800/40 dark:text-amber-200/40">
        {text}{" "}
        <Link
          to={url}
          className="text-neutral-800/70 dark:text-amber-200/70 underline lg:cursor-pointer"
        >
          {linkTitle}
        </Link>
      </p>
      <Button
        text={buttonTitle}
        bg="bg-neutral-800"
        darkBg="bg-amber-300"
        textColor="text-amber-300"
        textDarkColor="text-neutral-800"
      />
    </form>
  );
}
