import { useEffect } from "react"
import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  console.log('Is First useState.......')

  function loginHandler() {
    localStorage.setItem("isLogin", JSON.stringify(true)); 
    navigate("../home", { replace: true })
  }
  function logoutHandler() {
    localStorage.setItem("isLogin", JSON.stringify(false)); 
    navigate("../", { replace: true })
  }

  useEffect(()=>{
    console.log('Is First useEffect........')
    // if(isLogin) {
    //   let path = `../`;
    //   navigate(path, { replace: true });
    // }
  },[])
  return (
    <>
      <div className="common flex flex-col gap-5">
        <div>Register</div>
        <button onClick={loginHandler} className="bg-blue-500 px-5 py-3 rounded-sm">Log in</button>
        <button onClick={logoutHandler} className="bg-blue-500 px-5 py-3 rounded-sm">Log out</button>
      </div>
    </>
    

  )
}
