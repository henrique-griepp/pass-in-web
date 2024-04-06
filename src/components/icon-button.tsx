import { ComponentProps } from "react";

interface IconButtonProps extends ComponentProps<"button"> {
  transparent?: boolean;
}

export function IconButton({ transparent, ...props }: IconButtonProps) {
  return (
    <button
      {...props}
      className={
        transparent
          ? " border rounded-md p-1.5"
          : " border rounded-md p-1.5 bg-zinc-500/60"
      }
    />
  );
}
