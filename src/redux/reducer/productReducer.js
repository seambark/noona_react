let initialState={
    productList:[],
    productDetail:[],
    loading:false,
    error:''
}

function productReducer(state=initialState,action){
    let {type,payload} = action;

    switch(type) {
        case "LOADING" : 
            return {...state, productList:null,productDetail:null,loading:true}
        case "GET_PRODUCT_SUCCESS":
            return {...state, productList:payload.data, loading:false};
        case "GET_PRODUCT_DETAIL":
            return {...state, productDetail:payload.data, loading:false};
        case "ERROR" :
            return {...state,productList:null,productDetail:null,error:payload.data,loading:false}
        default :
            return {...state};
    }
}

export default productReducer