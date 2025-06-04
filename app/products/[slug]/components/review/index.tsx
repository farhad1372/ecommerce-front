"use client";
import AISummary from "@/components/AISummary";
import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
} from "@/components/ui/pagination";
import { Skeleton } from "@/components/ui/skeleton";
import { Api } from "@/lib/axios";
import { Product } from "@/types/product";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import Rater from "react-rater";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import "react-rater/lib/react-rater.css";
import { toast, Toaster } from "sonner";

interface ProductCardProps {
  product: Product;
}

type FormValues = {
  full_name: string;
  content: string;
  rate: number;
};

const getAIReview = async (product_id: number, page = 1) => {
  try {
    const { data } = await Api.get(
      `/site/products/${product_id}/reviews?page=${page}`
    );
    return data;
  } catch (e) {
    console.log("E", e);
  }
};

const ProductReview = ({ product }: ProductCardProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [rate, setRate] = useState(0);

  const { data, isLoading } = useQuery({
    queryKey: ["product-ai-review", product?.id, currentPage],
    queryFn: () => getAIReview(product?.id, currentPage),
    staleTime: 5 * 60 * 1000,
    refetchOnMount: false,
    refetchOnWindowFocus: false,
  });

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormValues>();

  const onSubmit = async (formData: FormValues) => {
    try {
      await Api.post(`/site/products/${product?.id}/reviews`, formData);
      reset();
      toast("Review has been sent.");
    } catch (e) {
      console.log("e", e);
    }
  };

  return (
    <div className="container mx-auto border-t md:px-2 md:pt-6  lg:px-3 mt-7 pb-20">
      <Toaster />
      <h3 className="font-semibold text-xl mb-2 mt-5 px-4 md:hidden ">
        Reviews
      </h3>
      <div className=" flex flex-col md:flex-row gap-4 lg:gap-10 xl:gap-17">
        {/* ------------------------------------------------- Reviews Side  ------------------------------------------------- */}
        <div className="p-2 lg:-6 w-full md:w-1/2 order-2 md:order-1">
          <div className="px-3 md:px-0 md:mb-5 pt-2">
            <h3 className="font-semibold text-xl mb-2 md:mb-0 hidden md:block">
              Reviews
            </h3>
            <p className="text-gray-500 text-xs mb-5 hidden md:block">
              Showing {data?.data?.data?.length || 0} from
              {data?.data?.count || 0} reviews
            </p>
          </div>

          {isLoading && (
            <div className="flex flex-col space-y-3">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
              <div className="space-y-2">
                <Skeleton className="h-4 w-[250px]" />
                <Skeleton className="h-4 w-[200px]" />
              </div>
            </div>
          )}

          {data?.data?.data?.map(
            (d: {
              content: string;
              id: number;
              full_name: string;
              rate: number;
            }) => {
              return (
                <>
                  <div className="flex gap-3  border-b pb-5 mb-7" key={d?.id}>
                    <Avatar>
                      <AvatarImage
                        src={`https://avatar.iran.liara.run/username?username=${d?.full_name}`}
                      />
                    </Avatar>
                    <div>
                      <h5 className="font-semibold text-sm">{d?.full_name}</h5>
                      {/* FFC107 */}
                      <Rater total={5} rating={d?.rate} />

                      <p className="mt-1 lg:mt-3 text-sm">{d?.content}</p>
                    </div>
                  </div>
                </>
              );
            }
          )}

          <Pagination>
            <PaginationContent>
              {Array.from(
                { length: Math.ceil(data?.data?.count / 10) },
                (_, i) => i + 1
              ).map((page) => (
                <PaginationItem key={page}>
                  <PaginationLink
                    isActive={currentPage === page}
                    onClick={() => setCurrentPage(page)}
                  >
                    {page}
                  </PaginationLink>
                </PaginationItem>
              ))}
            </PaginationContent>
          </Pagination>
        </div>

        {/* ------------------------------------------------- AI Reviews Summary Side + Add Review  ------------------------------------------------- */}
        <div className="p-2 lg:-6 w-full md:w-1/2 order-1 md:order-2">
          <Card>
            <CardHeader>
              <CardTitle className="pb-4 border-b">
                AI Reviews Summary
              </CardTitle>
            </CardHeader>
            <CardContent>
              <AISummary section="reviews" product={product} />
            </CardContent>
          </Card>

          <Card className="mt-3">
            <CardHeader>
              <CardTitle>Send Review</CardTitle>
            </CardHeader>
            <CardContent>
              <form
                onSubmit={handleSubmit((data) => onSubmit({ ...data, rate }))}
                className="space-y-6"
              >
                <div>
                  <label className="block mb-1 font-medium">Full Name</label>
                  <Input
                    {...register("full_name", {
                      required: "Fill Name is required",
                      minLength: {
                        value: 3,
                        message: "Full Name must be at least 3 characters",
                      },
                    })}
                    placeholder="john Doe"
                  />
                  {errors.full_name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.full_name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Comment</label>
                  <Textarea
                    rows={4}
                    {...register("content", {
                      required: "Content is Required",
                      minLength: {
                        value: 10,
                        message: "Content must be at least 10 characters",
                      },
                    })}
                    placeholder="Enter your comment"
                  />
                  {errors.content && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.content.message}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block mb-1 font-medium">Rate</label>
                  <Rater
                    total={5}
                    rating={rate}
                    interactive={true}
                    onRate={({ rating }) => setRate(rating)}
                  />
                  {rate === 0 && (
                    <p className="text-sm text-red-500 mt-1">
                      Rate is Required
                    </p>
                  )}
                </div>

                <p>
                  <b>Tip:</b>
                  <br />
                  Your Comment will be displayed after admin approval.
                </p>

                <Button
                  size="lg"
                  className="w-[200px]"
                  type="submit"
                  disabled={isSubmitting || rate === 0}
                >
                  {isSubmitting ? "Loading..." : "Send"}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
