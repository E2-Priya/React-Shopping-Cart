export const isAddProduct = (state = false, action) => {
    switch(action.type){
    case 'addProduct' :
     return !state
    default :
    return state
}
}
