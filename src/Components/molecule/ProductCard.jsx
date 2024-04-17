import { getPbImage } from "../../utils/getPbImage";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-6 items-center border py-6">
      <img
        src={getPbImage(product.collectionId, product.id, product.photo)}
        alt={product.title}
        className="w-60 h-48 transition-transform duration-300 ease-in-out hover:scale-105"
      />
      <div className="w-full flex justify-around">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
