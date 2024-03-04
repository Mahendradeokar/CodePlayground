import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function addHoverPrefix(classNames: string) {
  if (typeof classNames === "string") {
    const clss = classNames.trim();
    if (clss.length > 0) {
      return clss
        .split(" ")
        .map((clsName) => `hover:${clsName}`)
        .join(" ");
    }
  }
  return "";
}
