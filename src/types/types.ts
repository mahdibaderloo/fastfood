import { ReactNode } from "react";

export interface Food {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
  isFavorite: boolean;
}

export interface ButtonProps {
  children: ReactNode;
  text: string;
  textColor: string;
  textDarkColor: string;
  bg: string;
  darkBg: string;
}
