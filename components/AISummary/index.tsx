"use client";

import { useQuery } from "@tanstack/react-query";
import { Api } from "@/lib/axios";
import { Product } from "@/types/product";
type Section = "product_info" | "reviews";
import { Skeleton } from "../ui/skeleton";

const getAIReview = async (section: Section, product_id: number) => {
  try {
    const { data } = await Api.post("/site/ai/summary", {
      section,
      product_id,
    });
    return data;
  } catch (e) {
    console.log("E", e);
  }
};

export default function AISummary({
  product,
  section,
}: {
  product: Product;
  section: Section;
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: [],
    queryFn: () => getAIReview(section, product?.id),
    enabled: true,
    staleTime: 5 * 60 * 1000,
  });

  return (
    <div>
      {isLoading && (
        <div>
          <p className="font-semibold">Loading review...</p>
          <Skeleton className="h-[20px] w-full rounded-full mb-1" />
          <Skeleton className="h-[20px] w-full rounded-full mb-1" />
          <Skeleton className="h-[20px] w-full rounded-full mb-1" />
          <Skeleton className="h-[20px] w-full rounded-full mb-1" />
          <Skeleton className="h-[20px] w-full rounded-full mb-1" />
        </div>
      )}
      {isError && <p>Something went wrong!</p>}
      {data && <p>{data?.message || "No review"}</p>}
    </div>
  );
}
