import { obj } from "../Components/productDetail";

export const addRedit = (state = { id: "", name: "", quantity: "", price: "", image: "" , btnValue : "UPDATE" ,prIndex : 0},action) => {
  switch (action.type) {
    case "addProductClicked":

        return {  id: "",
                    name: "",
                    quantity: "",
                    price: "",
                    image: "",
                    btnValue : "ADD"
                };
    case "editProductClicked":

        let pr = action.payLoad
        console.log(action.payLoad)
        console.log(pr)
        return {    id: pr.id,
                    name: pr.name,
                    quantity: pr.quantity,
                    price: pr.price,
                    image: pr.image,
                    btnValue : "UPDATE",
                    prIndex : action.ind
                };
    default:
    return state;
  }
};
