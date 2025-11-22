// import { clsx, type ClassValue } from "clsx"
// import { twMerge } from "tailwind-merge"

// export function cn(...inputs: ClassValue[]) {
//   return twMerge(clsx(inputs))
// }

export const truncateWords = (text: string, count: number = 20) => {
  if (!text) return "";

  // يشيل أي مسافات زيادة في الأول أو بين الكلمات
  const cleanedText = text.trim().replace(/\s+/g, " ");

  const words = cleanedText.split(" ");
  return words.length > count
    ? words.slice(0, count).join(" ") + "..."
    : cleanedText;
};
