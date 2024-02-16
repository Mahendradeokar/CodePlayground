import { cn } from "@/utils";

export default function Container({
  children,
  className,
  ...props
}: Readonly<{
  children: React.ReactNode;
  className?: String;
  props?: any[];
}>) {
  return (
    <div className={cn(["container", className])} {...props}>
      {children}
    </div>
  );
}
