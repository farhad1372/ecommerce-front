import ProductDetails from "./components/details";
import ProductReview from "./components/review";

const ProductDetailsPage = () => {
  return (
    <div className="container mx-auto mt-10" id="product-details-page">
      <h2>All Category / Coffee-Pack</h2>
      <ProductDetails />
      <ProductReview />
    </div>
  );
};

export default ProductDetailsPage;
