import { SlashIcon, Star } from "lucide-react";
import Image from "next/image";
import styles from "./styles.module.scss";
import { Button } from "@/components/ui/button";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const ProductDetails = () => {
  return (
    <div className="container mx-auto px-1 md:px-0">
      {/* --------------------------------------------- Breadcrumb ---------------------------------------------  */}
      <div className="p-2 md:px-4 md:py-0" >
        <div className="w-full">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <span>Products</span>
              </BreadcrumbItem>
              <BreadcrumbSeparator>
                <SlashIcon />
              </BreadcrumbSeparator>
              <span>Details</span>
            </BreadcrumbList>
          </Breadcrumb>
        </div>
      </div>

      <div className="flex flex-col lg:flex-row gap-4 lg:gap-10 xl:gap-17 p-2 md:p-4">
        {/* ----------------------------------------- Image side Product -----------------------------------------  */}
        <div className="w-full lg:w-1/2 rounded-lg">
          <div className="relative w-full h-[350px] lg:h-[500px] bg-gray-100">
            <Image
              src={"/images/products/t-1.png"}
              alt="Product Image"
              fill
              className="w-full h-auto object-contain border-1 rounded-lg"
            />
          </div>
        </div>

        {/* ---------------------------------------- Details side Product ----------------------------------------  */}
        <div className="w-full lg:w-1/2">
          <h1 className="font-bold text-xl lg:text-2xl">
            Cotton Classic Fit Poplin Weave Shirt,
            <br />
            White
          </h1>

          <p className="mt-2 lg:mt-5 text-base/7">
            At Charles Tyrwhitt, their Classic Fit is roomy through the
            shoulders and chest for utmost comfort. Of course, its crafted from
            Charles Tyrwhitts favourite 100% cotton yarn woven into a poplin
            weave to give it that smart matt appearance. The shirt is
            lightweight for warmer days, and feels exceptionally smooth against
            the skin, too.
          </p>
          <div className="mt-5 text-sm flex items-center flex-wrap">
            <span className="font-semibold flex items-center  ">
              <Star className="mr-1" color="#FFC107" fill="#FFC107" size={16} />
              4.5 Rating
            </span>
            <span className="text-gray-400 ml-1 text-xs">(15 Reviews)</span>
          </div>
          <div className="font-black mt-5 mb-6">
            <span className="inline-block text-4xl">29.</span>
            <span className="inline-block text-xl translate-y-[-14px]">
              12 $
            </span>
          </div>

          <form>
            <div className={`${styles["radio-group"]} mb-2`}>
              <label>
                <input type="radio" name="color" />
                <span>
                  <span className="bg-[#85998B]"></span>
                </span>
              </label>

              <label>
                <input type="radio" name="color" />
                <span>
                  <span className="bg-[#ECC8B4]"></span>
                </span>
              </label>
              <label>
                <input type="radio" name="color" />
                <span>
                  <span className="bg-[#D5D6DA]"></span>
                </span>
              </label>
            </div>

            <div
              className={`${styles["radio-group"]} ${styles["radio-group-2"]} `}
            >
              <label>
                <input type="radio" name="size" />
                <span>
                  <span className=" flex content-center text-center font-semibold text-xs ">
                    SM
                  </span>
                </span>
              </label>

              <label>
                <input type="radio" name="size" />
                <span>
                  <span className="flex content-center text-center font-semibold text-xs ">
                    LG
                  </span>
                </span>
              </label>
              <label>
                <input type="radio" name="size" />
                <span>
                  <span className=" flex content-center text-center font-semibold text-xs ">
                    XL
                  </span>
                </span>
              </label>
              <label>
                <input type="radio" name="size" />
                <span>
                  <span className=" flex content-center text-center font-semibold text-xs ">
                    2XL
                  </span>
                </span>
              </label>
              <label>
                <input type="radio" name="size" />
                <span>
                  <span className=" flex content-center text-center font-semibold text-xs ">
                    3XL
                  </span>
                </span>
              </label>
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
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
