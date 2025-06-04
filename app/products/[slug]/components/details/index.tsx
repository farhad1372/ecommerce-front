import { SlashIcon } from "lucide-react";
import Image from "next/image";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/product";
import ProductDetailsPrice from "./price";
import QueryProvider from "@/components/queryProvider";
import ProductDetailsDescription from "./description";

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

          <QueryProvider>
            <ProductDetailsDescription product={product} />
            <ProductDetailsPrice product={product} />
          </QueryProvider>
        </div>
      </div>
    </div>
  );
}
