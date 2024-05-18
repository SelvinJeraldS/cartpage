import React, { createContext, useState } from "react";

import Cart from "./Components/Cart";

export const mycontext = createContext('');
const App = () => {
  const products=[
    {
        "id": 1,
        "title": "iPhone 9",
        "description": "An apple mobile which is nothing like apple",
        "price": 549,
        "discountPercentage": 12.96,
        "rating": 4.69,
        "stock": 94,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/1/thumbnail.jpg",
        "images": [
            "https://www.financialexpress.com/wp-content/uploads/2020/02/apple-1.jpg?w=350",
            "https://img.freepik.com/free-vector/smartphone-with-gradient-wallpaper_23-2147846500.jpg",
            "https://i.dummyjson.com/data/products/1/3.jpg",
            "https://i.dummyjson.com/data/products/1/4.jpg",
            "https://i.dummyjson.com/data/products/1/thumbnail.jpg"
        ]
    },
    {
        "id": 2,
        "title": "iPhone X",
        "description": "SIM-Free, Model A19211 6.5-inch Super Retina HD display with OLED technology A12 Bionic chip with ...",
        "price": 899,
        "discountPercentage": 17.94,
        "rating": 4.44,
        "stock": 34,
        "brand": "Apple",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/2/thumbnail.jpg",
        "images": [
            "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTRlu-dTRFewhxw7mIDJ9uUDa3T6vMXtM2dfEWv6OhI3L3XxP3kWL_gt4Gex_P7fBlUcKL4Wlv1_K8xwH_DFYkxMsYH0NQ0",
            "https://i.dummyjson.com/data/products/2/2.jpg",
            "https://i.dummyjson.com/data/products/2/3.jpg",
            "https://i.dummyjson.com/data/products/2/thumbnail.jpg"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Universe 9",
        "description": "Samsung's new variant which goes beyond Galaxy to the Universe",
        "price": 1249,
        "discountPercentage": 15.46,
        "rating": 4.09,
        "stock": 36,
        "brand": "Samsung",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/3/thumbnail.jpg",
        "images": [
            "https://image.samsung.com/us/smartphones/galaxy-s9/phones/S9/Blue/0914-GI-GS9-PDP-Front-Blue.jpg"
        ]
    },
    {
        "id": 4,
        "title": "OPPOF19",
        "description": "OPPO F19 is officially announced on April 2021.",
        "price": 280,
        "discountPercentage": 17.91,
        "rating": 4.3,
        "stock": 123,
        "brand": "OPPO",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/4/thumbnail.jpg",
        "images": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSp7h7tkmRFHX5ax69twkzbTDnCm_2DurC5PB0oGttDEWg1q23BgUxQZzaXo3l_mpvvFD1NNJpAfLerZ6AfMRhYykfHgjOoag",
            "https://i.dummyjson.com/data/products/4/2.jpg",
            "https://i.dummyjson.com/data/products/4/3.jpg",
            "https://i.dummyjson.com/data/products/4/4.jpg",
            "https://i.dummyjson.com/data/products/4/thumbnail.jpg"
        ]
    },
    {
        "id": 5,
        "title": "Huawei P30",
        "description": "Huawei’s re-badged P30 Pro New Edition was officially unveiled yesterday in Germany and now the device has made its way to the UK.",
        "price": 499,
        "discountPercentage": 10.58,
        "rating": 4.09,
        "stock": 32,
        "brand": "Huawei",
        "category": "smartphones",
        "thumbnail": "https://i.dummyjson.com/data/products/5/thumbnail.jpg",
        "images": [
            "https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcRENoWmpmbTwdhe10Bt1d0Gn2annak8qmRL59vUxky2QSoX3h9t-AucMJFeWaTQ4_NLckwyb4PhI5mKeYa9abg2ddfJfYiG8g",
            "https://i.dummyjson.com/data/products/5/2.jpg",
            "https://i.dummyjson.com/data/products/5/3.jpg"
        ]
    }
]
 
  
  const[data,setData]=useState(products);
  return (
    <div>
  
<mycontext.Provider  value={[data,setData]} >
       
<Cart/>   
     </mycontext.Provider> 
    </div>
  );
};

export default App;