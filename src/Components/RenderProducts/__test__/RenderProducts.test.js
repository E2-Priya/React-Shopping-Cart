import { fireEvent , render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from '../../../Reducers';
import App from '../../../App';
import userEvent from '@testing-library/user-event';
import { login } from '../../clothSkeleton/__test__/clothSkeleton.test';
import { obj } from '../../productDetail';
const store = createStore(allReducers);
var products = obj.table

describe('render PRoducts', () => {
  test('cloth skeleton rendering', () => {
    render( <Provider store={store}>
      <App/>
    </Provider>
    );
      login()
      expect(screen.getByTestId('div1Render')).toBeInTheDocument()
      let boxDiv = screen.getAllByTestId('boxDiv')
      expect(boxDiv.length).toEqual(products.length)
      let img = screen.getAllByTestId('productImgRender')
      expect(img[0].src).toContain('data:image/jpeg;base64,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')
      let name = screen.getAllByTestId('productNameRender')
      expect(name[0].innerHTML).toEqual('shirt')
      expect(screen.getAllByTestId('viewBtn')[0].innerHTML).toEqual('VIEW')
      expect(screen.getAllByTestId('viewBtn')[0]).toBeEnabled()
  });

  test('view button', () => {
    render( <Provider store={store}>
      <App/>
    </Provider>
    );
    const viewBtn = screen.getAllByTestId('viewBtn')[0]
    expect(viewBtn.innerHTML).toEqual('VIEW')
    expect(screen.getAllByTestId('viewBtn')[0]).toBeEnabled()
    fireEvent.click(viewBtn)
    expect(screen.getByTestId('viewMainDiv')).toBeInTheDocument()
    expect(screen.getByTestId('productTitle').innerHTML).toEqual('PRODUCT')
    expect(screen.getByTestId('productId').innerHTML).toEqual('PRODUCT ID : 001')
    expect(screen.getByTestId('productName').innerHTML).toEqual('NAME : shirt')
    expect(screen.getByTestId('productQuantity').innerHTML).toEqual('QUANTITY : 222')
    expect(screen.getByTestId('productPrice').innerHTML).toEqual('PRICE : Rs.500')

    expect(screen.getByText('PRODUCT')).toBeTruthy()
    expect(screen.getByTestId('div1Render').childElementCount).toEqual(2)
    let clsBtn = screen.getByTestId('clsBtn')
    fireEvent.click(clsBtn)
    expect(screen.getByTestId('div1Render').childElementCount).toEqual(1)
  });



})
