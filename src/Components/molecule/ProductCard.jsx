import { getPbImage } from "../../utils/getPbImage";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-6 sm:gap-3 items-center border lg:py-6 md:py-4 sm:py-2">
      <img
        src={getPbImage(product.collectionId, product.id, product.photo)}
        alt={product.title}
        className="lg:w-60 lg:h-48 md:w-48 md:h-36 sm:w-24 sm:h-18 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="w-full flex lg:flex-row lg:justify-around md:flex-col md:items-center sm:flex-col sm:items-center">
        <h3 className="sm:text-xs sm:truncate">{product.title}</h3>
        <p className="sm:text-xs sm:truncate">{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
