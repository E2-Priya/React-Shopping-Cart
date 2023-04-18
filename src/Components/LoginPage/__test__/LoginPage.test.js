import { fireEvent , render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { createStore } from "redux";
import { Provider } from "react-redux";
import { allReducers } from '../../../Reducers';
import App from '../../../App';
const store = createStore(allReducers);
import userEvent from '@testing-library/user-event';
describe('Login page', () => {
    test('Login page rendering ', () => {
      render( <Provider store={store}>
        <App/>
      </Provider>
      );
        expect(screen.getByTestId('loginHeader').innerHTML).toEqual(' USER LOGIN FORM ')
        expect(screen.getByTestId('loginFormContainer')).toBeInTheDocument()
        expect(screen.getByTestId('userNameLabel').innerHTML).toEqual('User mail id :')
        expect(screen.getByTestId('userNameInput').innerHTML).toEqual('')
        expect(screen.getByTestId('passWordLabel').innerHTML).toEqual('Password :')
        expect(screen.getByTestId('passWordInput').innerHTML).toEqual('')
        expect(screen.getByTestId('loginBtn')).toBeEnabled();
        expect(screen.getByTestId('userNameErr').innerHTML).toEqual('')
        expect(screen.getByTestId('passWordErr').innerHTML).toEqual('')
    });


    test('Login page input field test', () => {
        render( <Provider store={store}>
          <App/>
        </Provider>
        );
        let userNameInput = screen.getByTestId('userNameInput')
        userEvent.type(userNameInput, "test");
        expect(screen.getByTestId("userNameInput")).toHaveValue("test");

        let passWordInput = screen.getByTestId('passWordInput')
        userEvent.type(passWordInput,'test123')
        expect(screen.getByTestId('passWordInput')).toHaveValue('test123')
      });

      test('Login with invalid input fields',()=>{
        render( <Provider store={store}>
            <App/>
          </Provider>
          );
          let userNameInput = screen.getByTestId('userNameInput')
          userEvent.type(userNameInput, "test");
          let passWordInput = screen.getByTestId('passWordInput')
          userEvent.type(passWordInput,'test123')
          let loginBtn = screen.getByTestId('loginBtn')
          fireEvent.click(loginBtn)
          expect(screen.getByTestId('userNameErr').innerHTML).toEqual('Enter valid mail id')
      })

      test('Login with empty input fields',()=>{
        render( <Provider store={store}>
            <App/>
          </Provider>
          );
          expect(screen.getByTestId('loginDiv')).toBeInTheDocument()
          let userNameInput = screen.getByTestId('userNameInput')
          userEvent.type(userNameInput, "");
          let passWordInput = screen.getByTestId('passWordInput')
          userEvent.type(passWordInput,'')
          let loginBtn = screen.getByTestId('loginBtn')
          fireEvent.click(loginBtn)
          expect(screen.getByTestId('passWordErr').innerHTML).toEqual('Enter all Fields')
      })

      test('Login correct details',()=>{
        render( <Provider store={store}>
            <App/>
          </Provider>
          );

          let userNameInput = screen.getByTestId('userNameInput')
          userEvent.type(userNameInput, "test@mail.com");
          let passWordInput = screen.getByTestId('passWordInput')
          userEvent.type(passWordInput,'test123')
          let loginBtn = screen.getByTestId('loginBtn')
          fireEvent.click(loginBtn)
          expect(screen.getByTestId('firstDiv')).toBeInTheDocument()
      })


})
