// import React from "react";
// import { useHistory } from "react-router-dom";
// import { useCart } from "../useContext/cartContext";
// // import {
// //   BASE_POSTER_PATH,
// //   BASE_MOVIE_PATH,
// //   baseURL,
// //   BASE_LANGUAGE_URL_PATH,
// // } from "../services/util/utility";
// // import useFetchAll from "../services/useFetchAll";
// // import Loader from "../components/Error/Loader";
// // import Error from "../components/Error/Error";

// const Cart = () => {
//     const { cart, dispatch } = useCart();
//     // const [data, setData] = useState([]);
//     // const [error, setError] = useState(null);
//     // const [loading, setLoading] = useState(true);
//     const history = useHistory();
//     // const urls = cart.map(
//     //   (i) => `${i.id}?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}`
//     // );
//     // const { data: movies, setData, loading, error } = useFetchAll(urls);

//     // useEffect(() => {
//     //   async function init() {
//     //     try {
//     //       const res = await fetch(
//     //         `${BASE_MOVIE_PATH}${cart}?api_key=${baseURL}${BASE_LANGUAGE_URL_PATH}`
//     //       );
//     //       if (res.ok) {
//     //         const json = await res.json();
//     //         setData(json);
//     //       } else {
//     //         throw res;
//     //       }
//     //     } catch (e) {
//     //       setError(e);
//     //     } finally {
//     //       setLoading(false);
//     //     }
//     //   }
//     //   init();
//     // }, [cart]);

//     console.log(cart);

//     // const filteredProducts = (id) => {
//     //   return cart.filter((i) => i.id !== id);
//     // };

//     // function renderItem(cartItem) {
//     //   const { id } = cartItem;
//     //   const { title, poster_path, release_date } = data.find(
//     //     (p) => p.id === parseInt(id)
//     //   );
//     //   return (
//     //     <div key={cartItem.id} className="m-4">
//     //       <img
//     //         style={{ maxWidth: "160px" }}
//     //         src={`${BASE_POSTER_PATH}/w500${poster_path}`}
//     //         alt={poster_path}
//     //       />
//     //       <div className="d-inline">
//     //         <h3 className="text-primary mt-2">{title}</h3>
//     //         <strong className="lead">{release_date}</strong>
//     //         <button
//     //           type="button"
//     //           className="ml-2 btn btn-outline-danger"
//     //           // onClick={() => dispatch({ type: "remove", id })}
//     //           onClick={() => {
//     //             filteredProducts(id, dispatch({ type: "remove", id }));
//     //           }}
//     //         >
//     //           X
//     //         </button>
//     //       </div>
//     //     </div>
//     //   );
//     // }

//     // if (loading) return <Loader />;
//     // if (error) return <Error />;

//     const numItems = cart.reduce(
//         (prevValue, curValue) => prevValue + curValue.quantity,
//         0
//     );

//     return (
//         <div className="container mt-4">
//             <h1 className="text-info">
//                 {numItems === 0
//                     ? "Your cart is empty"
//                     : `${numItems} Item${numItems > 1 ? "'s" : ""}`}
//             </h1>
//             {/* <section className="row">{data.map(renderItem)}</section> */}
//             {cart.map((i) => (
//                 <div key={i.id}>
//                     <h3 className="text-primary mt-2">{i.id}</h3>
//                     <h3 className="text-primary mt-2">{i.quantity}</h3>
//                     <button
//                         type="button"
//                         className="ml-2 btn btn-outline-danger"
//                         // onClick={() => dispatch({ type: "remove", id })}
//                         onClick={() => {
//                             dispatch({ type: "remove", id: i.id });
//                         }}
//                     >
//                         X
//           </button>
//                 </div>
//             ))}
//             {cart.length > 0 && (
//                 <button
//                     className="btn btn-primary"
//                     onClick={() => history.push("/checkout")}
//                 >
//                     Check out
//                 </button>
//             )}
//         </div>
//     );
// };

// export default Cart;
