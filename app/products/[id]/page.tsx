import { Star } from "lucide-react";
import Image from "next/image";

const ProductDetailsPage = () => {
  return (
    <div className="container mx-auto mt-10">
      <h2>All Category / Coffee-Pack</h2>
      <div className="flex flex-col md:flex-row gap-4 p-4">
        <div className="p-6 rounded-lg w-full md:w-1/2">
          <div className="relative w-full h-[650px]">
            <Image
              src={"/images/products/t-1.png"}
              alt="Product Image"
              fill
              className="w-full h-auto object-cover"
            />
          </div>
        </div>
        <div className="p-6 rounded-lg w-full md:w-1/2">
          <h1 className="font-bold text-2xl">
            Cotton Classic Fit Poplin Weave Shirt,
            <br />
            White
          </h1>

          <p className="mt-5">
            At Charles Tyrwhitt, their Classic Fit is roomy through the
            shoulders and chest for utmost comfort. Of course, its crafted from
            Charles Tyrwhitts favourite 100% cotton yarn woven into a poplin
            weave to give it that smart matt appearance. The shirt is
            lightweight for warmer days, and feels exceptionally smooth against
            the skin, too.
          </p>
          <div className="mt-5 text-sm">
            <span className="font-semibold flex items-center ">
              <Star className="mr-1" color="#FFC107" fill="#FFC107" size={16} />
              4.5 Rating
            </span>
            <span className="text-gray-400 ml-1 text-xs">(15 Reviews)</span>
          </div>
          <div className="font-black mt-5">
            <span className="inline-block text-4xl">29.</span>
            <span className="inline-block text-xl translate-y-[-14px]">
              12 $
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailsPage;
