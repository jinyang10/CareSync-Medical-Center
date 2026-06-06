import { clsx, type ClassValue } from "clsx"
import { LucideIcon, icons, HelpCircle } from "lucide-react"
import { twMerge } from "tailwind-merge"
import * as LucidIcons from "lucide-react"

// this function merges styling classes
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function getIconComponent(iconName: string): LucideIcon {
  // Access the icon from the lucide-react exports using the provided string
  //typeof determines type of 'icons' object, keyof generates another type
  const Icon = icons[iconName as keyof typeof icons] as LucideIcon;

  // Return the requested icon, or a fallback (HelpCircle) if the name is invalid
  return Icon || HelpCircle;
}


