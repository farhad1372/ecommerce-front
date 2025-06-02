import ProductDetails from "./components/details";
import ProductReview from "./components/review";

const ProductDetailsPage = () => {
  return (
    <div className="mt-2 md:mt-5 " id="product-details-page">
      <ProductDetails />
      <ProductReview />
    </div>
  );
};

export default ProductDetailsPage;
