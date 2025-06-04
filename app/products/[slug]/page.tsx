import { AxiosError } from "axios";
import ProductDetails from "./components/details";
import ProductReview from "./components/review";
import { Api } from "@/lib/axios";
import { Product } from "@/types/product";
import QueryProvider from "@/components/queryProvider";

interface ProductPageProps {
  product: Product | null;
}

interface ProductPageProps {
  params: { slug: string };
}

export default async function ProductDetailsPage({ params }: ProductPageProps) {
  const { slug } = params;

  try {
    const { data } = await Api.get(`/site/products/${slug}`);
    console.log("prod", data?.data);
    return (
      <div className="mt-2 md:mt-5 " id="product-details-page">
        <ProductDetails product={data?.data} />
        <QueryProvider>
          <ProductReview product={data?.data} />
        </QueryProvider>
      </div>
    );
  } catch (err) {
    const error = err as AxiosError;
    if (error?.response?.status === 404) {
      throw new Error("404");
    }
    throw error;
  }
}
