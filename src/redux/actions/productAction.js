// import { productActions } from "../reducer/productSlice";

// function getProducts(searchQuery) {
//     return async(dispatch,getState) => {
//         let url = `https://my-json-server.typicode.com/seambark/noona_react/products?q=${searchQuery}`;
//         dispatch({type:"LOADING"})
//         try {
//             let response = await fetch(url);
//             let data = await response.json();
//             // dispatch({type:"GET_PRODUCT_SUCCESS",payload:{data}})
//             dispatch(productActions.getAllProducts({data}))
            
//         } catch(err) {
//             dispatch({type:"ERROR",payload:err.message})
//             console.log('실패')
//         }

//     }
// }

// function getProductDetail(id) {
//     return async(dispatch,getState) => {
//         let url = `https://my-json-server.typicode.com/seambark/noona_react/products/${id}`;
//         dispatch({type:"LOADING"})

//         try {
//             let response = await fetch(url);
//             let data = await response.json();
//             dispatch({type:"GET_PRODUCT_DETAIL",payload:{data}})

//         } catch(err){
//             dispatch({type:"ERROR",payload:err.message})
//             console.log('실패')
//         }
//     }
// }


// export const productAction={ getProductDetail }