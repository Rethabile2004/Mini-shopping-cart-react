function Cart({ items, onRemove, total }) {
  return (
    <div
      style={{
        border: "2px solid black",
        padding: "20px",
        borderRadius: "10px",
        width: "250px",
        height: "fit-content",
      }}
    >
      <h2>Your Cart</h2>
      {items.length === 0 ? (
        <p>No items yet 😢</p>
      ) : (
        <>
        {items.map((item, index) => (
          <div
            key={index}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: "10px",
            }}
          >
            <span>
              {item.name} - 💲{item.price}
            </span>
            <button onClick={() => onRemove(index)}>❌</button>
          </div>
        ))}
        <h3>Total: {total}</h3>
        </>
        
      )}
      
    </div>
  );
}

export default Cart;
