export const isView = (state = false, action) => {
    console.log('isview in reducers')
    console.log(action.type)
    switch(action.type){
    case 'view' :
     return !state
    default :
    return state
}
}
