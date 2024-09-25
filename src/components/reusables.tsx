import classNames from "classnames";
import { PropsWithChildren } from "react";

interface LinkButtonProps extends PropsWithChildren {
  className?: string;
  href: string;
}

export const LinkButton = ({
  children,
  className,
  ...props
}: LinkButtonProps) => {
  return (
    <a
      className={classNames(
        "capitalize py-4 px-4 sm:px-7 text-sm w-full max-w-[400px] bg-[var(--base-color)] text-white cursor-pointer hover:opacity-70 transition-opacity duration-300 block mb-8 text-center",
        className
      )}
      {...props}
    >
      {children}
    </a>
  );
};
