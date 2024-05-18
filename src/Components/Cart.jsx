// // import React, { useContext } from "react";

// // import "./Cart.css"; // Import CSS file
// // import { mycontext } from "../App";

// // const Cart = () => {
// //   const [data, setData] = useContext(mycontext);
// //   const totalPrice = data.reduce(
// //     (total, data) => total + data.price * (data.quantity || 0),
// //     0
// //   );
// //   const totalQuantity = data.reduce(
// //     (total, data) => total + (data.quantity || 0),
// //     0
// //   );
// //   const shipping = "FREE";

// //   const handleInc = (id, quantity) => {
// //     setData((curr) => {
// //       return curr.map((element) => {
// //         if (element.id === id) {
// //           return { ...element, quantity: element.quantity + 1 || quantity + 1 };
// //         }
// //         return element;
// //       });
// //     });
// //   };

// //   const handleDec = (id, quantity) => {
// //     setData((curr) => {
// //       return curr.map((element) => {
// //         if (element.id === id) {
// //           return { ...element, quantity: element.quantity - 1 || quantity - 1 };
// //         }
// //         return element;
// //       });
// //     });
// //   };

// //   const handleRemove = (id) => {
// //     setData((curr) => curr.filter((item) => item.id !== id));
// //   };

// //   const handleQuantityChange = (id, event) => {
// //     const newQuantity = parseInt(event.target.value);
// //     setData((curr) => {
// //       return curr.map((element) => {
// //         if (element.id === id) {
// //           return { ...element, quantity: newQuantity };
// //         }
// //         return element;
// //       });
// //     });
// //   };

// //   return (
// //     <div className="cart-container">
// //       <h1>Cart Page</h1>
// //       {data.map((element, index) => {
// //         return (
// //           <div key={index} className="cart-item">
// //             <div className="cart-item-image">
// //               {element.images.map((ele, i) => {
// //                 return (
// //                   // <img
// //                   //   key={i}
// //                   //   src={ele}
// //                   //   className="cart-image"
// //                   //   alt={`Product ${i}`}
// //                   // />
// //                   <div>
// // <div id="carouselExampleIndicators" class="carousel slide">
// //   <div class="carousel-indicators">
// //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
// //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
// //     <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
// //   </div>

// //   <div class="carousel-inner">
// //     <div class="carousel-item active">
// //       <img key={i}
// //                     src={ele}
// //                     className="d-block w-100"
// //                     alt={`Product ${i}`}/>
// //     </div>
  
   
// //   </div>
// //   <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
// //     <span class="carousel-control-prev-icon" aria-hidden="true"></span>
// //     <span class="visually-hidden">Previous</span>
// //   </button>
// //   <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
// //     <span class="carousel-control-next-icon" aria-hidden="true"></span>
// //     <span class="visually-hidden">Next</span>
// //   </button>
// // </div>

// //                   </div>
// //                 );
// //               })}
// //             </div>
// //             <div className="cart-item-content">
// //               <div className="container">
// //               <h3 className="cart-title">{element.description} 
// //               <span>
// //               <button
// //                   className="quantity-btn"
// //                   onClick={() => handleInc(element.id, element.quantity || 1)}
// //                 >
// //                   +
// //                 </button>
// //                 <input
// //                   type="number"
// //                   className="quantity-input"
// //                   value={element.quantity}
// //                   onChange={(e) => handleQuantityChange(element.id, e)}
// //                 />
// //                 <button
// //                   className="quantity-btn"
// //                   onClick={() => handleDec(element.id, element.quantity || 1)}
// //                 >
// //                   -
// //                 </button>
                
// //                 <span className="product-price ">${element.price}</span></span>

// //                </h3> 
                   
                
// //                 </div>         
// //               <p className="cart-text">Category: {element.category}</p>
// //               <div className="product-actions">
// //                 <span className="product-quantity">
// //                   Quantity: {element.quantity}
// //                 </span>

// //               </div>
// //               <div className="total-info">
             
// //               <div className="remove-btn">
// //                 <button
// //                   className="quantity-btn-remove"
// //                   id="btn"
// //                   onClick={() => handleRemove(element.id)}
// //                 >
// //                   Remove
// //                 </button>
// //               </div>
// //                 <br />
// //                 <div className="container-fluid">Total Quantity: <span className="quantity">{totalQuantity}</span></div>
// //                 <br />
// //                 <span>Total Price: {totalPrice}</span>
// //                 <br />
// //                 <span>SHIPPING: {shipping}</span>
// //               </div>
// //               <p className="cart-text">
// //                 <small className="text-body-secondary">
// //                   Last updated 3 mins ago
// //                 </small>
// //               </p>
// //             </div>
// //           </div>
// //         );
// //       })}
// //       <div className="total-info">
// //         <span>Total Quantity: {totalQuantity}</span>
// //         <br />
// //         <span>Total Price: {totalPrice}</span>
// //         <br />
// //         <span>SHIPPING: {shipping}</span>
// //       </div>
// //     </div>
// //   );
// // };

// // export default Cart;

// import React, { useContext } from "react";
// import "./Cart.css"; // Import CSS file
// import { mycontext } from "../App";

// const Cart = () => {
//   const [data, setData] = useContext(mycontext);

//   const totalPrice = data.reduce(
//     (total, item) => total + item.price * (item.quantity || 0),
//     0
//   );
//   const totalQuantity = data.reduce(
//     (total, item) => total + (item.quantity || 0),
//     0
//   );
//   const shipping = "FREE";

//   const handleInc = (id) => {
//     setData((curr) =>
//       curr.map((item) =>
//         item.id === id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
//       )
//     );
//   };

//   const handleDec = (id) => {
//     setData((curr) =>
//       curr.map((item) =>
//         item.id === id ? { ...item, quantity: Math.max((item.quantity || 1) - 1, 0) } : item
//       )
//     );
//   };

//   const handleRemove = (id) => {
//     setData((curr) => curr.filter((item) => item.id !== id));
//   };

//   const handleQuantityChange = (id, event) => {
//     const newQuantity = parseInt(event.target.value);
//     if (!isNaN(newQuantity)) {
//       setData((curr) =>
//         curr.map((item) =>
//           item.id === id ? { ...item, quantity: newQuantity } : item
//         )
//       );
//     }
//   };

//   return (
//     <div className="cart-container">
     
//       {data.map((item, index) => (
//         <div key={index} className="cart-item">
//           <div className="cart-item-image">
//             <div id={`carousel-${index}`} className="carousel slide" data-bs-ride="carousel">
//               <div className="carousel-indicators">
//                 {item.images.map((_, i) => (
//                   <button
//                     key={i}
//                     type="button"
//                     data-bs-target={`#carousel-${index}`}
//                     data-bs-slide-to={i}
//                     className={i === 0 ? "active" : ""}
//                     aria-current={i === 0 ? "true" : undefined}
//                     aria-label={`Slide ${i + 1}`}
//                   ></button>
//                 ))}
//               </div>
//               <div className="carousel-inner">
//                 {item.images.map((img, i) => (
//                   <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
//                     <img src={img} className="d-block w-100" alt={`Product ${i}`} />
//                   </div>
//                 ))}
//               </div>
//               <button className="carousel-control-prev" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="prev">
//                 <span className="carousel-control-prev-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Previous</span>
//               </button>
//               <button className="carousel-control-next" type="button" data-bs-target={`#carousel-${index}`} data-bs-slide="next">
//                 <span className="carousel-control-next-icon" aria-hidden="true"></span>
//                 <span className="visually-hidden">Next</span>
//               </button>
//             </div>
//           </div>
//           <div className="cart-item-content">
//             <h3 className="cart-title">
//               {item.description}
//               <span>
//                 <button className="quantity-btn-inc" onClick={() => handleInc(item.id)}>
//                   +
//                 </button>
//                 <input
//                   type="number"
//                   className="quantity-input"
//                   value={item.quantity}
//                   onChange={(e) => handleQuantityChange(item.id, e)}
//                 />
//                 <button className="quantity-btn-dec" onClick={() => handleDec(item.id)}>
//                   -
//                 </button>
//                 <span className="product-price">${item.price}</span>
//               </span>
//             </h3>
//             <p className="cart-text">Category: {item.category}</p>
//             <div className="product-actions">
//               <span className="product-quantity">Quantity: {item.quantity}</span>
//               <button className="quantity-btn-remove" onClick={() => handleRemove(item.id)}>
//                 Remove
//               </button>
//             </div>
//           </div>
//         </div>
//       ))}
//       <div className="total-info">
//         <span>Total Quantity: {totalQuantity}</span>
//         <br />
//         <span>Total Price: ${totalPrice.toFixed(2)}</span>
//         <br />
//         <span>SHIPPING: {shipping}</span>
//       </div>
//     </div>
//   );
// };

// export default Cart;
import React, { useContext } from "react";
// import "bootstrap/dist/css/bootstrap.min.css";
import { mycontext } from "../App";
import "./Cart.css"; // Import CSS file

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
            <h3 className="cart-title">
              {item.description}
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
            <p className="cart-text">Category: {item.category}</p>
            <div className="product-actions">
              <span className="product-quantity">Quantity: {item.quantity}</span>
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
