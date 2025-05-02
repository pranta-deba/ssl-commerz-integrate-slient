import { useEffect, useState } from "react";
import axios from "axios";

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}

export interface Cart {
  id: number;
  products: CartProduct[];
  total: number;
  discountedTotal: number;
  userId: number;
  totalProducts: number;
  totalQuantity: number;
}

interface UseGetCartsResult {
  data: Cart[] | null;
  loading: boolean;
  error: string | null;
  totalAmount: number;
  totalDiscountedAmount: number;
}

const useGetCarts = (): UseGetCartsResult => {
  const [data, setData] = useState<Cart[] | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [totalAmount, setTotalAmount] = useState<number>(0);
  const [totalDiscountedAmount, setTotalDiscountedAmount] = useState<number>(0);

  useEffect(() => {
    const fetchCarts = async () => {
      setLoading(true);
      try {
        // Step 1: Get total carts
        const totalResponse = await axios.get<{ total: number }>(
          "https://dummyjson.com/carts"
        );
        const totalCarts = totalResponse.data.total;

        // Step 2: Calculate a random skip value
        const maxSkip = Math.max(0, totalCarts - 3); // avoid out-of-bounds
        const skip = Math.floor(Math.random() * (maxSkip + 1));

        // Step 3: Fetch 3 carts using random skip
        const response = await axios.get<{ carts: Cart[] }>(
          `https://dummyjson.com/carts?limit=3&skip=${skip}`
        );

        const carts = response.data.carts;
        setData(carts);

        const total = carts.reduce((sum, cart) => sum + cart.total, 0);
        const discounted = carts.reduce(
          (sum, cart) => sum + cart.discountedTotal,
          0
        );

        setTotalAmount(total);
        setTotalDiscountedAmount(discounted);
        setError(null);
      } catch (err: unknown) {
        if (axios.isAxiosError(err)) {
          setError(err.response?.data?.message || err.message);
        } else {
          setError("Something went wrong");
        }
        setData(null);
      } finally {
        setLoading(false);
      }
    };

    fetchCarts();
  }, []);

  return { data, loading, error, totalAmount, totalDiscountedAmount };
};

export default useGetCarts;
