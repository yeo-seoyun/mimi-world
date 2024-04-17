import { getPbImage } from "../../utils/getPbImage";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-6 items-center border lg:py-6 md:py-4">
      <img
        src={getPbImage(product.collectionId, product.id, product.photo)}
        alt={product.title}
        className="lg:w-60 lg:h-48 md:w-48 md:h-36 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="w-full flex lg:flex-row lg:justify-around md:flex-col md:items-center">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
