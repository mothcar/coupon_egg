import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom";


export default function Splash() {
  const navigate = useNavigate();

  const [isLogin] = useState(
    () => JSON.parse(localStorage.getItem("isLogin"))
  )

  // const [showSplashscreen, setShowSplashscreen] = useState(
  //   () => !JSON.parse(localStorage.getItem("showedSplashscreen"))
  // );

  function goRegisterOrHome() {
    if(isLogin) navigate("../home", { replace: true })
      else navigate("../register", { replace: true })
  }

  useEffect(()=>{
    setTimeout(() => {
      // Update local state to trigger component rerender
      // setShowSplashscreen(false);
      goRegisterOrHome()
      // Update localStorage for next time app is mounted
      // set true
      // localStorage.setItem("showedSplashscreen", JSON.stringify(false)); 
    }, 3000);
  },[])

  return (
    <div className="flex flex-col m-auto h-screen justify-center items-center ">
      <h1 className="text-3xl font-medium">쿠폰나라</h1>
      <h6 className="mt-5">세상의 모든 쿠폰 거래</h6>      
    </div>
  )
}
