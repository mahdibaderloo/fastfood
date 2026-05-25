import { BiUser } from "react-icons/bi";
import Header from "../components/Header";
import { CgLock } from "react-icons/cg";
import Button from "../components/Button";

export default function Login() {
  return (
    <>
      <Header showBackButton={true} />
      <main className="min-h-screen overflow-y-scroll lg:overflow-hidden pt-40 sm:pt-24 lg:pt-18">
        <form className="w-full flex flex-col gap-4 justify-center items-center">
          <div className="rounded-full border-3 border-neutral-800/70 dark:border-amber-300/70 p-1 px-2 flex items-center gap-2">
            <BiUser className="text-xl text-neutral-800/70 dark:text-amber-300/70" />
            <input
              type="text"
              className="border-none outline-none text-sm text-neutral-800/70 dark:text-amber-300/70"
            />
          </div>
          <div className="rounded-full border-3 border-neutral-800/70 dark:border-amber-300/70 p-1 px-2 flex items-center gap-2">
            <CgLock className="text-xl text-neutral-800/70 dark:text-amber-300/70" />
            <input
              type="password"
              className="border-none outline-none text-sm text-neutral-800/70 dark:text-amber-300/70"
            />
          </div>
          <p>Signup</p>
          <Button
            text="Login"
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
