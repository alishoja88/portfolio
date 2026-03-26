import { clsx, type ClassValue } from "clsx";

/** Merge class names with clsx — drop-in utility for conditional classes. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
