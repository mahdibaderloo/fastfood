import { useQuery } from "@tanstack/react-query";

interface Food {
  id: number;
  productName: string;
  price: number;
  category: string;
  description: string;
  image: string;
  comments: string[];
  score: number;
}

const API_URL = import.meta.env.VITE_API_URL;

export function useFoods() {
  return useQuery<Food[]>({
    queryKey: ["foods"],
    queryFn: fetchFoods,
  });
}

async function fetchFoods() {
  const response = await fetch(`${API_URL}/products`);

  if (!response.ok) {
    throw new Error("Failed to fetch foods");
  }

  return response.json();
}
