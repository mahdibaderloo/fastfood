import { ReactNode } from "react";

interface Props {
  children?: string | ReactNode;
  classHeader?: string;
  classP?: string;
  pContent?: ReactNode;
}

function Header({
  children,
  classHeader = "w-full flex items-center justify-center py-4 fixed z-50 bg-amber-300 dark:bg-neutral-800",
  classP = "text-5xl dark:text-amber-300",
  pContent,
}: Props) {
  return (
    <header className={classHeader}>
      <p className={classP}>{pContent}</p>
      {children}
    </header>
  );
}

export default Header;
