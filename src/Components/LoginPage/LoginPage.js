import { Link } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { isOn } from "../../Actions/On";
import './LoginPage.css'
function LoginPage() {

    const dispatch = useDispatch();
    const[error,setError] = useState({userErr : "" , passErr: ""})
    const [loginDatas, setloginDatas] = useState({
        username: "",
        password: "",
      });


    function handleLogin(e){
    if( (loginDatas.username && loginDatas.password) !== null && (loginDatas.username && loginDatas.password) !== ""){
      const isEmail = (username) => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(username);
      if(isEmail(loginDatas.username)){
        var user = {
            username : loginDatas.username,
            password : loginDatas.password
        }
        localStorage.setItem('user', JSON.stringify(user));
        dispatch(isOn())
      }else{
        e.preventDefault()
        setError({...error,userErr:"Enter valid mail id"})
      }


    }else{
      e.preventDefault()
      setError({...error,passErr:"Enter all Fields"})
    }

    }
    function handleDatas(e){
        var key = e.target.name;
        var value = e.target.value;
        setloginDatas({
            ...loginDatas,
            [key]: value,
          });
          console.log(key)
          console.log(value)
    }
  return (
    <div className="mainDiv">
      <header className="headerDiv">
        <h3> USER LOGIN FORM </h3>
      </header>

      <form className="formContainer2">
        <div className="formDiv2">
          <div className="usernameDiv">
            <label>User mail id :</label>
            <input type="mail" onChange={handleDatas} name='username' placeholder="Enter valid Username" />
            <span>{error.userErr}</span>
          </div>

          <div className="passwordDiv">
            <label>Password :</label>
            <input type="text" name='password' onChange={handleDatas} placeholder="Enter Password" />
            <span>{error.passErr}</span>
          </div>

          <div class="bottom">
          <Link to='/dashBoard'><button type="button" onClick={handleLogin}>LOGIN </button></Link>
          </div>
        </div>
      </form>
    </div>
  );
}
export default LoginPage;
