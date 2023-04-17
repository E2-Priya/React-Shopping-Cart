export const isView = (state = false, action) => {
    switch(action.type){
    case 'view' :
     return !state
    default :
    return state
}
}
