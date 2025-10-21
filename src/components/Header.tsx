interface Children {
  [props: string]: string;
}

function Header({ children }: Children) {
  return (
    <header className="w-full flex items-center justify-center py-4 fixed bg-amber-300 dark:bg-neutral-800">
      <p className="text-5xl dark:text-amber-300">{children}</p>
    </header>
  );
}

export default Header;
