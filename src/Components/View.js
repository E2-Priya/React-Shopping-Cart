import './addProductForm.css'
import './View.css'
import {obj} from './productDetail'
import { useDispatch } from "react-redux";
import { isView} from "../Actions/View";
import { useState } from "react";
function View(props){
    console.log(props)
    const dispatch = useDispatch();

    return(
        <div>
        <div className='backdrop'/>
        <div className="viewFormContainer">
            <form className="formContainer">
                <header className="headerDiv">
                    <h3>PRODUCT</h3>
                </header>
                <div className='productDataDiv'>
                    <div className='imageDiv'>
                    <img src={props.product.image} />
                    </div>
                    <div className='productDetailDiv'>
                        <p>PRODUCT ID : {props.product.id}</p>
                        <p>NAME : {props.product.name}</p>
                        <p>QUANTITY : {props.product.quantity}</p>
                        <p>PRICE : Rs.{props.product.price}</p>
                    </div>

                </div>
                <div className='footDiv'>
                    <footer className="footer">
                      <div className='closeDiv'><button onClick={() => dispatch(isView())}>CLOSE</button></div>
                    </footer>
                </div>
            </form>
        </div>
        </div>
    )
}
export default View
