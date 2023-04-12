import "./addProductForm.css";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "../Actions/AddProducts";
import { obj } from "./productDetail";
import {useSelector} from 'react-redux'

function AddProductForm() {
  const [pr,setPr] = useState(useSelector(state => state.addRedit))
  console.log(pr)

  console.log(pr.image)

  function handleCancel(){
    dispatch(addProduct())
  }

  const dispatch = useDispatch();
  const [productDetail, setProductDetail] = useState({
    id: "",
    name: "",
    quantity: "",
    price: "",
    image: "",
  });
  const [dataError, setDataError] = useState({
    idErr: "",
    nameErr: "",
    quantityErr: "",
    priceErr: "",
    imageErr: "",
  });

  function validate(e) {
    var key = e.target.name;
    var value = e.target.value;
    if (key === "id") {
      if (value === null || value === "") {
        setDataError({
          ...dataError,
          idErr: "Enter valid product id",
        });
      } else {
        setDataError({
          ...dataError,
          idErr: "",
        });
      }
    } else if (key === "name") {
      if (value === null || value === "") {
        setDataError({
          ...dataError,
          nameErr: "Enter valid product name",
        });
      } else {
        setDataError({
          ...dataError,
          nameErr: "",
        });
      }
    } else if (key === "quantity") {
      if (value === null || value === "" || value < 0) {
        setDataError({
          ...dataError,
          quantityErr: "Enter valid quantity",
        });
      } else {
        setDataError({
          ...dataError,
          quantityErr: "",
        });
      }
    } else if (key === "price") {
      if (value === null || value === "" || value < 0) {
        setDataError({
          ...dataError,
          priceErr: "Enter valid price",
        });
      } else if (isNaN(value)) {
        setDataError({
          ...dataError,
          priceErr: "Enter numeric value",
        });
      } else {
        setDataError({
          ...dataError,
          priceErr: "",
        });
      }
    } else if (key === "image") {
      if (value === null || value === "") {
        setDataError({
          ...dataError,
          imageErr: "Upload image",
        });
      } else {
        setDataError({
          ...dataError,
          imageErr: "",
        });
      }
    }
  }

  function addProductDetail(e) {
    var key = e.target.name;
    var value = e.target.value;

    if (key === "image") {

      value = URL.createObjectURL(e.target.files[0]);

      if(e.target.files[0].size > 20000){
        setDataError({
          ...dataError,
          imageErr: "Image size should below 20kb",
        });
      }

    }
    setPr({
      ...pr,
      [key]: value,
    })
    setProductDetail({
      ...productDetail,
      [key]: value,
    });
    console.log(productDetail)
  }

  function handleFormSubmission(e) {
    console.log(e.currentTarget.textContent)
    let btn = e.currentTarget.textContent
    if(btn === 'ADD'){
    e.preventDefault();

    if (
      (productDetail.id &&
        productDetail.name &&
        productDetail.price &&
        productDetail.quantity) !== "" &&
      (productDetail.id &&
        productDetail.name &&
        productDetail.price &&
        productDetail.quantity) !== 0
    ) {
      var product = {
        id: productDetail.id,
        name: productDetail.name,
        quantity: productDetail.quantity,
        price: productDetail.price,
        image: productDetail.image,
      };
      dispatch(addProduct());

      handleAddJson(product);
    }}else{
      let product = obj.table[pr.prIndex]
      console.log(product)
      product.id =  pr.id
      product.name = pr.name
      product.quantity = pr.quantity
      product.price = pr.price
      product.image = pr.image

      dispatch(addProduct());
      console.log(product)
    }
  }
  function handleAddJson(product) {
    obj.table.push(product);
    console.log(obj);
  }

  return (
    <div>
      <div className="backdrop" />
      <div className="addFormContainer">
        <form className="formContainer">
          <header className="headerDiv">
            <h3>ADD YOUR PRODUCT</h3>
          </header>
          <div className="dataDiv">
            <div className="pId">
              <div className="idLabel">
                <label>ENTER PRODUCT ID : </label>
              </div>
              <div className="idInput">
                <input
                  type="text"
                  id="id"
                  name="id"
                  onChange={addProductDetail}
                  onBlur={validate}
                  onKeyUp={validate}
                  value={pr.id}
                  required
                ></input>
              </div>
              <div className="error">
                {" "}
                <span className="errorMsg">{dataError.idErr}</span>{" "}
              </div>
            </div>
            <div className="pName">
              <div className="nameLabel">
                <label>ENTER PRODUCT NAME : </label>
              </div>
              <div className="nameInput">
                <input
                  type="text"
                  maxLength={100}
                  name="name"
                  onChange={addProductDetail}
                  onBlur={validate}
                  value={pr.name}
                  onKeyUp={validate}
                  required
                ></input>
              </div>
              <div className="error">
                {" "}
                <span className="errorMsg">{dataError.nameErr}</span>{" "}
              </div>
            </div>
            <div className="pQ">
              <div className="quantityLabel">
                <label>ENTER QUANTITY : </label>
              </div>
              <div className="quantityInput">
                <input
                  type="number"
                  name="quantity"
                  onChange={addProductDetail}
                  onBlur={validate}
                  value={pr.quantity}
                  onKeyUp={validate}
                  required
                ></input>
              </div>
              <div className="error">
                {" "}
                <span className="errorMsg">{dataError.quantityErr}</span>{" "}
              </div>
            </div>
            <div className="pPrize">
              <div className="prizeLabel">
                <label>ENTER PRODUCT PRICE: </label>
              </div>
              <div className="prizeInput">
                <input
                  type="text"
                  name="price"
                  onChange={addProductDetail}
                  onBlur={validate}
                  onKeyUp={validate}
                  value={pr.price}
                  required
                ></input>
              </div>
              <div className="error">
                {" "}
                <span className="errorMsg">{dataError.priceErr}</span>{" "}
              </div>
            </div>
            <div className="pImage">
              <div className="imageLabel">
                <label>UPLOAD PRODUCT IMAGE: </label>
              </div>
              <div className="imageInput">
                <input
                  type="file"
                  name="image"
                  onChange={addProductDetail}
                  value=''
                  onBlur={validate}
                  required
                  accept="image/jpeg, image/png"
                ></input>
              </div>
              <div className="error">
                {" "}
                <span className="errorMsg">{dataError.imageErr}</span>{" "}
              </div>
            </div>
          </div>
          <div className="footDiv">
            <footer className="footerDiv">
              <button className="addBtn" onClick={handleFormSubmission}>
                {pr.btnValue}
              </button>
              <button
                className="cancelBtn"
                onClick={handleCancel}
              >
                CANCEL
              </button>
            </footer>
          </div>
        </form>
      </div>
    </div>
  );
}
export default AddProductForm;
