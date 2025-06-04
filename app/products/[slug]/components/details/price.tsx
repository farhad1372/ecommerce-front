"use client";
import { getProductPrice, priceSeparator } from "@/helpers/price";
import { Product } from "@/types/product";
import styles from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ProductDetailsPrice({ product }: { product: Product }) {
  const [color, setColor] = useState<{ id: number; value: string }>();
  const [size, setSize] = useState<{ id: number; value: string }>();
  const [price , setPrice] = useState(0)

  useEffect(() => {
    const first_color = product?.attributes?.find((a) => a.type === "color");
    if (first_color) setColor(first_color);

    const first_size = product?.attributes?.find((a) => a.type === "size");
    if (first_size) setSize(first_size);
  }, [product]);

  useEffect(() => {
    setPrice(getProductPrice(product, color?.id || 0, size?.id || 0))
  }, [color, size]);

  return (
    <>
      <div className="font-black mt-5 mb-6">
        <span className="inline-block text-4xl">
          {priceSeparator(price)?.[0]}.
        </span>
        <span className="inline-block text-xl translate-y-[-14px]">
          {priceSeparator(price)?.[1]} $
        </span>
      </div>

      <form>
        <div className={`${styles["radio-group"]} mb-2`}>
          {product?.attributes?.map((attr) => {
            if (attr.type === "color") {
              return (
                <label key={attr.id}>
                  <input
                    type="radio"
                    onChange={() => setColor(attr)}
                    name="color"
                    checked={color?.id === attr.id}
                  />
                  <span >
                    <span className={`bg-[${attr.value}]`}></span>
                  </span>
                </label>
              );
            }
          })}
        </div>

        <div className={`${styles["radio-group"]} ${styles["radio-group-2"]} `}>
          {product?.attributes?.map((attr) => {
            if (attr.type === "size") {
              return (
                <label key={attr.id}>
                  <input 
                    type="radio"
                    name="size"
                    checked={size?.id === attr.id}
                    onChange={() => setSize(attr)}
                  />
                  <span>
                    <span className=" flex content-center text-center font-semibold text-xs ">
                      {attr?.value}
                    </span>
                  </span>
                </label>
              );
            }
          })}
        </div>

        <Button type="button" className="w-full py-[24px] mt-10" size="lg">
          Add to Cart
        </Button>
        <Button
          type="button"
          className="w-full mt-3 py-[24px] border-2 !bg-transparent text-primary shadow-none"
          size="lg"
        >
          Buy this Item
        </Button>
      </form>
    </>
  );
}
