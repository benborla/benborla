import { clsx, ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Current solution to override Tailwind classes without clashing
 *
 * @param ClassValue[] input
 *
 * @return string
 */
export function cn(...input: ClassValue[]) {
  return twMerge(clsx(input))
}
