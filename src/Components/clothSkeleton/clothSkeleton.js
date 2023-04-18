import "./clothSkeleton.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { addProduct } from "../../Actions/AddProducts";
import AddProductForm from "../addProduct/addProductForm";
import { addProductClicked } from "../../Actions/addProductClicked";
import RenderProducts from "../RenderProducts/RenderProducts";
import { isOff } from "../../Actions/Off";
import { Link } from "react-router-dom";
function ClothSkeleton() {
  const logo =
    "data:image/jpeg;base64,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";
  const isAddProduct = useSelector((state) => state.isAddProduct);
  const dispatch = useDispatch();

  function handleAdd(){
    dispatch(addProduct())
    dispatch(addProductClicked())
  }
  function handleLogout(){
    localStorage.removeItem("user");
    dispatch(isOff())
  }
  return (
    <div className="first" data-testid='firstDiv'>
      {isAddProduct && <AddProductForm></AddProductForm>}
      <div className="appJsContainer">
        <div className="appNameButtonHeader displayCenterRow">
          <div className="appLogo displayCenterRow">
            <img src={logo} alt="LOGO" data-testid='logoImg'/>
          </div>
          <div className="appName displayCenterRow">
            <h2 data-testid='appTitle'>CLOTHING APP</h2>
          </div>
          <div className="addProduct displayCenterRow">
            <button onClick={handleAdd} data-testid='addProductBtn'>ADD PRODUCT</button>
            <Link to='/login'><button onClick={handleLogout} type="button" data-testid='logOutBtn'>LOG OUT</button></Link>
          </div>
        </div>
        <div className="displayProducts">
              <RenderProducts></RenderProducts>
        </div>

      </div>

    </div>
  );
}
export default ClothSkeleton;
