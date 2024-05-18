import React, { useContext } from "react";
import { mycontext } from "../App";
import "./Cart.css"; 

const Cart = () => {
  const [data, setData] = useContext(mycontext);

  const totalPrice = data.reduce(
    (total, item) => total + item.price * (item.quantity || 0),
    0
  );
  const totalQuantity = data.reduce(
    (total, item) => total + (item.quantity || 0),
    0
  );
  const shipping = "FREE";

  const handleInc = (id) => {
    setData((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      )
    );
  };

  const handleDec = (id) => {
    setData((curr) =>
      curr.map((item) =>
        item.id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) } : item
      )
    );
  };

  const handleRemove = (id) => {
    setData((curr) => curr.filter((item) => item.id !== id));
  };

  const handleQuantityChange = (id, event) => {
    const newQuantity = parseInt(event.target.value);
    if (!isNaN(newQuantity)) {
      setData((curr) =>
        curr.map((item) =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  return (
    <div className="container cart-container">

      {data.map((item, index) => (
        <div key={index} className="row cart-item">
          <div className="col-md-4 cart-item-image">
            <div id={`carousel-${index}`} className="carousel slide" data-ride="carousel">
              <ol className="carousel-indicators">
                {item.images.map((_, i) => (
                  <li
                    key={i}
                    data-target={`#carousel-${index}`}
                    data-slide-to={i}
                    className={i === 0 ? "active" : ""}
                  ></li>
                ))}
              </ol>
              <div className="carousel-inner">
                {item.images.map((img, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
                    <img src={img} className="d-block w-100" alt={`Product ${i}`} />
                  </div>
                ))}
              </div>
              <a className="carousel-control-prev" href={`#carousel-${index}`} role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
              </a>
              <a className="carousel-control-next" href={`#carousel-${index}`} role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
              </a>
            </div>
          </div>
          <div className="col-md-8 cart-item-content">
            <div className="cart-title">
            <h3 className="cart-title">
                {item.title} 
              &nbsp;
              <span className="ml-2">
                <button className="btn btn-sm btn-outline-secondary ml-2" onClick={() => handleInc(item.id)}>
                  +
                </button>
                <input
                  type="number"
                  className="quantity-input form-control d-inline-block ml-2"
                  style={{ width: "60px" }}
                  value={item.quantity}
                  onChange={(e) => handleQuantityChange(item.id, e)}
                />
                <button className="btn btn-sm btn-outline-secondary ml-2" onClick={() => handleDec(item.id)}>
                  -
                </button>
                <span className="product-price ml-2">  ${totalPrice}</span>
              </span>
            </h3>   
             
            </div>
           
            <hr />
            <p className="cart-text">{item.description}</p>

            <p className="cart-text">Category: {item.category}</p>
            <div className="product-actions">
            
              <button className="btn btn-remove btn-sm btn-outline-danger ml-2" onClick={() => handleRemove(item.id)}>
                Remove
              </button>
            </div>
           <div className="total-info mt-4">
        <span>Total Quantity: {totalQuantity}</span>
        <br />
        <span>Total Price: ${totalPrice.toFixed(2)}</span>
        <br />
        <span>SHIPPING: {shipping}</span>
      </div>
          </div>
          
        </div>
      ))}
      
    </div>
  );
};

export default Cart;
