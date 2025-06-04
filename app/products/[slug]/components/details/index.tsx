import { SlashIcon, Star } from "lucide-react";
import Image from "next/image";

import { RoundRate } from "@/helpers/round";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/product";
import ProductDetailsPrice from "./price";

interface ProductCardProps {
  product: Product;
}

export default function ProductDetails({ product }: ProductCardProps) {
  return (
    <div className="container mx-auto px-1 md:px-0">
      {/* --------------------------------------------- Breadcrumb ---------------------------------------------  */}
      <div className="p-2 md:px-4 md:py-0">
        <div className="w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span>Products</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <span>{product?.name}</span>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 xl:gap-17 p-2 md:p-4">
        {/* ----------------------------------------- Image side Product -----------------------------------------  */}
        <div className="w-full lg:w-1/2 rounded-lg">
          <div className="relative w-full h-[350px] lg:h-[500px] bg-gray-100">
            <Image
              src={product?.main_image}
              alt={product?.name}
              fill
              className="w-full h-auto object-contain border-1 rounded-lg"
            />
          </div>
        </div>

        {/* ---------------------------------------- Details side Product ----------------------------------------  */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-xl lg:text-2xl">{product?.name}</h1>

          <p className="mt-2 lg:mt-5 text-base/7">{product?.description}</p>
          <div className="mt-5 text-sm flex items-center flex-wrap">
            <span className="font-semibold flex items-center  ">
              <Star className="mr-1" color="#FFC107" fill="#FFC107" size={16} />
              {RoundRate(product?.rate_value)} Rating
            </span>
            <span className="text-gray-400 ml-1 text-xs">
              ({product?.rate_count} Reviews)
            </span>
          </div>

          <ProductDetailsPrice product={product} />
        </div>
      </div>
    </div>
  );
}
