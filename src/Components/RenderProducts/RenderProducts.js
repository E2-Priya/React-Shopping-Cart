import {obj} from '../productDetail'
import './RenderProducts.css'
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { isView} from "../../Actions/View";
import View from '../View/View';
import {BiEdit} from "react-icons/bi";
import { editProductClicked } from '../../Actions/editproductCliecked';
import { addProduct } from "../../Actions/AddProducts";

function RenderProducts(){
    const dispatch = useDispatch();
    const view = useSelector((state) => state.isView);

    const[product,setProduct] = useState()
    var products = obj.table

    function handleView(product){
        setProduct(product)
        dispatch(isView())

    }

    function handleEdit(product,index){
       dispatch(addProduct())
       dispatch(editProductClicked(product,index))
       setProduct(product)
    }
    return(
        <div className='div1'>
        <ul className="ulDiv">
        {products.map((product,index) => (
        <div className='boxDiv'>
            <div className='productDetaildiv'> <img src={product.image} data-key={product.id}/></div>
            <div className='prdtName'><h5>{product.name}</h5></div>
            <div className='buttonDiv'>
                <button  onClick={
                    ()=>{handleView(product)}}>VIEW</button>
                <BiEdit name="edit" tooltip="Edit" size="medium" onClick={() =>handleEdit(product,index)}  data-key={product.id}></BiEdit>
            </div>
        </div>
        ))}
      </ul>
      {view && <View product ={product}></View>}
      </div>
    )
}
export default RenderProducts
