export const isOn = (state = false, action) => {
    console.log('isOn in reducers')
    console.log(action.type)
    switch(action.type){
    case 'on' :
     return true
    case 'off' :
        return false
    default :
    return state
}
}
