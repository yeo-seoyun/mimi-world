import { getPbImage } from "../../utils/getPbImage";

function ProductCard({ product }) {
  return (
    <div className="flex flex-col gap-6 items-center">
      <img
        src={getPbImage(product.collectionId, product.id, product.photo)}
        alt={product.title}
        className="w-64 h-52"
      />
      <div className="w-full flex justify-around">
        <h3>{product.title}</h3>
        <p>{product.price}</p>
      </div>
    </div>
  );
}

export default ProductCard;
