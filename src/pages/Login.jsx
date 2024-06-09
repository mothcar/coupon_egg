import { useRef, useState, useEffect} from "react";
import { useNavigate } from "react-router-dom";
// import AuthContext from "../context/AuthProvider";
import axios from "../api/axios";

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
    </>
  );
}

export default Login;
