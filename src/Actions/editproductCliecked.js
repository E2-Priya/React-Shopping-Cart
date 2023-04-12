export const editProductClicked = (product , index) => {
    console.log('editPr')
    return { type: "editProductClicked" , payLoad : product , ind : index};
  };
