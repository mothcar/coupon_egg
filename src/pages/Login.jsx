import { useRef, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";
import DaumPostcode from 'react-daum-postcode';

function Login() {
  // const { setAuth } = useContext(AuthContext);
  // const LOGIN_URI = "/login";
  const navigate = useNavigate();
  const userRef = useRef();
  // const errRef = useRef();

  const [email, setEmail] = useState("");
  const [pwd, setPwd] = useState("");
  const [login, setLogin] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0)
    userRef.current.focus();
  }, []);

  //   useEffect(() => {}, [email, pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    const configuration = {
      method: "post",
      url: "http://localhost:3000/login",
      data: {
        email,
        password: pwd,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        console.log("result", result);
        setLogin(true);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
      });
  };

  function logoutHandler() {
    localStorage.setItem("isLogin", JSON.stringify(false)); 
    navigate("../", { replace: true })
  }

  // 주소찾기 ********************************************
  // const [detailedAddress, setDetailedAddress] = useState('');

  const [zonecode, setZonecode] = useState('');
  const [address, setAddress] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  const themeObj = {
    bgColor: '#FFFFFF', 
    pageBgColor: '#FFFFFF', 
    postcodeTextColor: '#C05850',
    emphTextColor: '#222222',
  };

  const postCodeStyle = {
    width: '360px',
    height: '480px',
  };

  const completeHandler = (data) => {
    console.log('Complete address : ', data.sido, " 구군 : ", data.sigungu, " 동 : ", data.bname    )
    const { address, zonecode } = data;
    setZonecode(zonecode);
    setAddress(address);
  };

  const closeHandler = (state) => {
    if (state === 'FORCE_CLOSE') {
      setIsOpen(false);
    } else if (state === 'COMPLETE_CLOSE') {
      setIsOpen(false);
    }
  };

  const toggleHandler = () => {
    setIsOpen((prevOpenState) => !prevOpenState);
  };

  const inputChangeHandler = (event) => {
    console.log('Final : ', event.target.value)
    // setDetailedAddress(event.target.value);
  };

  function setValue() {
    console.log('Address : ', address)
  }


  return (
    <>
      <div className="pt-5 pb-16">
        {login ? (
          alert("login success")
        ) : (
          <div>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  id="email"
                  ref={userRef}
                  autoComplete="off"
                  onChange={(e) => setEmail(e.target.value)}
                  value={email}
                  required
                />
              </div>
              <div>
                <input
                  type="password"
                  placeholder="Password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                />
              </div>

              <div>
                <p>
                  Don&apos;t have an account? <a href="#">Register</a>
                </p>
              </div>
              <button type="submit">Login</button>
            </form>
            <button onClick={logoutHandler}>Log out</button>
          </div>
        )}
      </div>

      <div className="mb-10">
        <label className="block text-base mt-4 mb-2">거주지역찾기</label>
        <input
          type="text"
          id="address"
          onClick={toggleHandler}
          onChange={setValue}
          value={address}
          className="border w-full h-12 text-base px-2 py-1 focus:outline-none focus:right-1 focus:border-gray-600 rounded-md"
          placeholder="거주지역찾기"
        />
      </div>

      <div id="address">
      {isOpen && (
          <div className="mb-12">
            <DaumPostcode
              theme={themeObj}
              style={postCodeStyle}
              onComplete={completeHandler}
              onClose={closeHandler}
            />
          </div>
        )}
        <div>{zonecode}</div>
        <div>{address}</div>
        <input
          // value={detailedAddress}
          onChange={inputChangeHandler}
        />
      </div>
    </>
  );
}

export default Login;
