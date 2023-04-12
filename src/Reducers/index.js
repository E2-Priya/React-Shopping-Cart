import {isAddProduct} from './isAddProduct'
import {isView} from './isView'
import { addRedit } from './addRedit'
import { isOn } from './isOn'
import {combineReducers} from 'redux'
export const allReducers = combineReducers({
    isAddProduct : isAddProduct ,
    isView : isView,
    addRedit : addRedit,
    isOn : isOn

})

