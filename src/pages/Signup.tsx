import { BiUser } from "react-icons/bi";
import Header from "../components/Header";
import { CgLock } from "react-icons/cg";
import Button from "../components/Button";
import { Link } from "react-router-dom";

export default function Signup() {
  return (
    <>
      <Header showBackButton={true} pContent="Signup" />
      <main className="min-h-screen overflow-y-scroll lg:overflow-hidden pt-40 sm:pt-24 lg:pt-18">
        <form className="w-[75%] flex flex-col gap-4 justify-center items-center mx-auto">
          <div className="rounded-full border-3 border-neutral-800/70 dark:border-amber-300/70 p-1.5 px-2 flex items-center gap-2">
            <BiUser className="text-xl text-neutral-800/70 dark:text-amber-300/70" />
            <input
              type="text"
              className="border-none outline-none text-sm text-neutral-800/70 dark:text-amber-300/70"
              placeholder="Username"
            />
          </div>
          <div className="rounded-full border-3 border-neutral-800/70 dark:border-amber-300/70 p-1.5 px-2 flex items-center gap-2">
            <CgLock className="text-xl text-neutral-800/70 dark:text-amber-300/70" />
            <input
              type="password"
              className="border-none outline-none text-sm text-neutral-800/70 dark:text-amber-300/70"
              placeholder="#####"
            />
          </div>
          <p className="text-sm text-neutral-800/40 dark:text-amber-200/40">
            You have an account?{" "}
            <Link
              to="/login"
              className="text-neutral-800/70 dark:text-amber-200/70 underline lg:cursor-pointer"
            >
              Login
            </Link>
          </p>
          <Button
            text="Signup"
            bg="bg-neutral-800"
            darkBg="bg-amber-300"
            textColor="text-amber-300"
            textDarkColor="text-neutral-800"
          />
        </form>
      </main>
    </>
  );
}
