"use client";
import { getProductPrice, priceSeparator } from "@/helpers/price";
import { Attribute, Product } from "@/types/product";
import styles from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

export default function ProductDetailsPrice({ product }: { product: Product }) {
  const [color, setColor] = useState<Attribute | undefined>();
  const [size, setSize] = useState<Attribute | undefined>();
  const [price, setPrice] = useState(product?.price || 0);

  useEffect(() => {
    const defaultColor =
      product?.attributes?.find((a) => a.type === "color") ?? null;
    if (defaultColor) setColor(defaultColor);

    const defaultSize =
      product?.attributes?.find((a) => a.type === "size") ?? null;
    if (defaultSize) setSize(defaultSize);
  }, [product]);

  useEffect(() => {
    setPrice(getProductPrice(product, color?.id || 0, size?.id || 0));
  }, [color, size, product]);

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
                  <span>
                    <span style={{ backgroundColor: attr.value }}></span>
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
