import '../addProduct/addProductForm.css'
import './View.css'
import {obj} from '../productDetail'
import { useDispatch } from "react-redux";
import { isView} from "../../Actions/View";
import { useState } from "react";
function View(props){
    console.log(props)
    const dispatch = useDispatch();

    return(
        <div data-testid='viewMainDiv'>
        <div className='backdrop'/>
        <div className="viewFormContainer">
            <form className="formContainer">
                <header className="headerDiv">
                    <h3 data-testid='productTitle'>PRODUCT</h3>
                </header>
                <div className='productDataDiv'>
                    <div className='imageDiv'>
                    <img src={props.product.image} data-testid='productImage'/>
                    </div>
                    <div className='productDetailDiv'>
                        <p data-testid='productId'>PRODUCT ID : {props.product.id}</p>
                        <p data-testid='productName'>NAME : {props.product.name}</p>
                        <p data-testid='productQuantity'>QUANTITY : {props.product.quantity}</p>
                        <p data-testid='productPrice'>PRICE : Rs.{props.product.price}</p>
                    </div>

                </div>
                <div className='footDiv'>
                    <footer className="footer">
                      <div className='closeDiv'><button data-testid= 'clsBtn' onClick={() => dispatch(isView())}>CLOSE</button></div>
                    </footer>
                </div>
            </form>
        </div>
        </div>
    )
}
export default View
