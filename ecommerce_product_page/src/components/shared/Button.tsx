import { cn } from "@/utils";

interface ButtonProps {
  className: string;
  children: React.ReactNode;
}

export default function Button({ className, children }: ButtonProps) {
  return (
    <button
      className={cn(
        "flex place-content-center gap-4 items-center p-3 w-full bg-primary hover:opacity-75 rounded-lg text-neutral-light-grayish-blue text-lg font-bold",
        className
      )}
    >
      {children}
    </button>
  );
}
