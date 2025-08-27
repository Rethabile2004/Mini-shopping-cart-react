function ProductCard({ product, onAdd }) {
  return (
    <div
      style={{
        border: "1px solid gray",
        padding: "10px",
        borderRadius: "10px",
        width: "150px",
        textAlign: "center",
      }}
    >
      <h2>{product.name}</h2>
      <p>💲{product.price}</p>
      <button onClick={() => onAdd(product)}>Add to Cart</button>
    </div>
  );
}

export default ProductCard;
