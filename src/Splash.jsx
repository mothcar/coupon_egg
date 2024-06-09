import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import pandaLogo from "./assets/red_panda.jpg";


export default function Splash() {
  const navigate = useNavigate();

  const [isLogin] = useState(
    () => JSON.parse(localStorage.getItem("isLogin"))
  )

  // const [showSplashscreen, setShowSplashscreen] = useState(
  //   () => !JSON.parse(localStorage.getItem("showedSplashscreen"))
  // );

  function goRegisterOrHome() {
    if(isLogin) navigate("/home")
      else navigate("../register", { replace: true })
  }

  useEffect(()=>{
    setTimeout(() => {
      goRegisterOrHome()
    }, 2000);
  })

  return (
    <div className="flex flex-col m-auto h-screen justify-center items-center ">
      <h1 className="text-3xl font-medium">쿠폰나라</h1>
      <h6 className="mt-5">세상의 모든 쿠폰 거래</h6>
      <img src={pandaLogo} alt="" />
      <h6 className="mt-5 text-white">스마트폰 url address bar 때문에 글을 위로 올려야하기때문에 </h6>      
      <h6 className="mt-5 text-white">...</h6>      
      <h6 className="mt-5 text-white">...</h6>      
      <h6 className="mt-5 text-white">...</h6>      
    </div>
  )
}
