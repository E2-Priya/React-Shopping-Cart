let loading
if(JSON.parse(localStorage.getItem('user')) !== null ){
  loading = true
}else{
  loading = false
}
export const isOn = (state = loading , action) => {
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
