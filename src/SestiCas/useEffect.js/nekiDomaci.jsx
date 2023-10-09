// import React, { useState } from "react";

// export default function Card() {
//   const [data, setData] = useState([]);
//   const [filteredData, setFilteredData] = useState([]);

//   const getData = () => {
//     fetch("https://dummyjson.com/products")
//       .then((res) => res.json())
//       .then((data) => {
//         setData(data?.products);
//         const filtered = data?.products.slice(0, 10);
//         setFilteredData(filtered);
//       });
//   };

//   return (
//     <div
//       className="cardContainer"
//       style={{
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div className="cards">
//         {filteredData.length > 0 && (
//           <>
//             {filteredData.map((item) => (
//               <div
//                 style={{
//                   border: "2px solid black",
//                   width: "300px",
//                   textAlign: "center",
//                 }}
//                 key={item.id}
//               >
//                 <h2>{item.brand}</h2>
//                 <p>{item.description}</p>
//                 <p>Price: {item.price}</p>
//               </div>
//             ))}
//           </>
//         )}
//       </div>
//       <button onClick={getData}>GET DATA</button>
//     </div>
//   );
// }
