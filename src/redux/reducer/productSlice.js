import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

let initialState={
    productList:[],
    productDetail:null,
    loading:false,
    error:null,
}

// function productReducer(state=initialState,action){
//     let {type,payload} = action;

//     switch(type) {
//         case "LOADING" : 
//             return {...state, productList:null,productDetail:null,loading:true}
//         case "GET_PRODUCT_SUCCESS":
//             return {...state, productList:payload.data, loading:false};
//         case "GET_PRODUCT_DETAIL":
//             return {...state, productDetail:payload.data, loading:false};
//         case "ERROR" :
//             return {...state,productList:null,productDetail:null,error:payload.data,loading:false}
//         default :
//             return {...state};
//     }
// }

// export default productReducer

export const fetchProducts = createAsyncThunk('product/fetchAll',async(searchQuery,thunkApi)=>{ 
    try {
        let url = `https://my-json-server.typicode.com/seambark/noona_react/products?q=${searchQuery}`;
        let response = await fetch(url);
        return await response.json();
        
    } catch(err) {
        thunkApi.rejectWithValue(err.message);
    }
});

export const fetchProductDetail = createAsyncThunk('product/fetchDetail',async(id,thunkApi)=>{
    try {
        let url = `https://my-json-server.typicode.com/seambark/noona_react/products/${id}`;
        let response = await fetch(url);
        return await response.json();

    } catch(err) {
        thunkApi.rejectWithValue(err.message);
    }
});

const productSlice = createSlice({
    name:"product",
    initialState,
    reducers:{
        getProductDetail(state,action){
            state.productDetail = action.payload.data;
        },
    },
    extraReducers:(builder)=>{
        builder.addCase(fetchProducts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchProducts.fulfilled,(state,action)=>{
            state.loading = false;
            state.productList = action.payload;
        })
        .addCase(fetchProducts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
        .addCase(fetchProductDetail.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchProductDetail.fulfilled,(state,action)=>{
            console.log("디테일")
            state.loading = false;
            state.productDetail = action.payload;
        })
        .addCase(fetchProductDetail.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.payload;
        })
    }
});

export const productActions = productSlice.actions
export default productSlice.reducer