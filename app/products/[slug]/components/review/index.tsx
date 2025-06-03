import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Star } from "lucide-react";

const ProductReview = () => {
  return (
    <div className="container mx-auto border-t md:px-2 md:pt-6  lg:px-3 mt-7">
      <h3 className="font-semibold text-xl mb-2 mt-5 px-4 md:hidden ">Reviews</h3>
      <div className=" flex flex-col md:flex-row gap-4 lg:gap-10 xl:gap-17">
        {/* ------------------------------------------------- Reviews Side  ------------------------------------------------- */}
        <div className="p-2 lg:-6 w-full md:w-1/2 order-2 md:order-1">
          <div className="px-3 md:px-0 md:mb-5 pt-2">
            <h3 className="font-semibold text-xl mb-2 md:mb-0 hidden md:block">
              Reviews
            </h3>
            <p className="text-gray-500 text-xs mb-5 hidden md:block">
              Showing 5 from 255 reviews
            </p>
          </div>

          <div className="flex gap-3  border-b pb-5 mb-7">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>.</AvatarFallback>
            </Avatar>
            <div>
              <h5 className="font-semibold text-sm">Farhad Flhp</h5>
              <div className="flex gap-[1px]">
                <Star color="#FFC107" fill="#FFC107" size={12} />
                <Star color="#FFC107" fill="#FFC107" size={12} />
                <Star color="#FFC107" fill="#FFC107" size={12} />
                <Star color="#ccc" fill="#ccc" size={12} />
                <Star color="#ccc" fill="#ccc" size={12} />
              </div>
              <p className="mt-1 lg:mt-3 text-sm">
                Love this t-shirt! The fabric is super soft and the fit is
                perfect.
              </p>
            </div>
          </div>

          <div className="flex gap-3  border-b pb-5">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>.</AvatarFallback>
            </Avatar>
            <div>
              <h5 className="font-semibold text-sm">Farhad Flhp</h5>
              <div className="flex gap-[1px]">
                <Star color="#FFC107" fill="#FFC107" size={12} />
                <Star color="#FFC107" fill="#FFC107" size={12} />
                <Star color="#FFC107" fill="#FFC107" size={12} />
                <Star color="#ccc" fill="#ccc" size={12} />
                <Star color="#ccc" fill="#ccc" size={12} />
              </div>
              <p className="mt-1 lg:mt-3 text-sm">
                Love this t-shirt! The fabric is super soft and the fit is
                perfect.
              </p>
            </div>
          </div>
        </div>

        {/* ------------------------------------------------- Reviews Summary Side  ------------------------------------------------- */}
        <div className="p-2 lg:-6 w-full md:w-1/2 order-1 md:order-2">
          <Card>
            <div className="px-3 lg:px-5">
              <div className="border-b pb-4 flex flex-wrap items-center justify-between ">
                <h6 className="font-semibold text-2xl">4.9</h6>
                <div className="flex gap-[6px]">
                  <Star color="#FFC107" fill="#FFC107" size={22} />
                  <Star color="#FFC107" fill="#FFC107" size={22} />
                  <Star color="#FFC107" fill="#FFC107" size={22} />
                  <Star color="#FFC107" fill="#FFC107" size={22} />
                  <Star color="#FFC107" fill="#FFC107" size={22} />
                </div>
              </div>

              <div className="flex items-center gap-[10px] mb-2 mt-5">
                <span>5</span>
                <Progress title="ss" value={33} style={{ height: 12 }} />
              </div>
              <div className="flex items-center gap-[10px] mb-2">
                <span>4</span>
                <Progress title="ss" value={33} style={{ height: 12 }} />
              </div>
              <div className="flex items-center gap-[10px] mb-2">
                <span>3</span>
                <Progress title="ss" value={33} style={{ height: 12 }} />
              </div>
              <div className="flex items-center gap-[10px] mb-2">
                <span>2</span>
                <Progress title="ss" value={33} style={{ height: 12 }} />
              </div>
              <div className="flex items-center gap-[10px] mb-2">
                <span>1</span>
                <Progress title="ss" value={33} style={{ height: 12 }} />
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default ProductReview;
