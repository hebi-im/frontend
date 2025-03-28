import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

// eslint-disable-next-line import/prefer-default-export
export function cn(...args: ClassValue[]) {
  return twMerge(clsx(args))
}
