import { Card, CardHeader } from "@/components/ui/card";
import { Api } from "@/lib/axios";
import { Product } from "@/types/product";
import { AxiosError } from "axios";
import Link from "next/link";

export default async function Home() {
  try {
    const { data } = await Api.get(`/site/products`);
    console.log("data is ", data);
    return (
      <div className="mt-2 md:mt-5 xl:mt-10 " id="product-details-page">
        {data?.data?.data?.map((product: Product) => (
          <Link
            href={`/products/${product.id}`}
            className="bg-primary"
            key={product.id}
          >
            <Card className="mb-5 max-w-[400] mx-auto">
              <CardHeader>
                <h1 className="font-bold">{product.name}</h1>
              </CardHeader>
            </Card>
          </Link>
        ))}
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
