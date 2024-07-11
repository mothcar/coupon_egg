import { useNavigate } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  console.log("Is First useState.......");

  function loginHandler() {
    localStorage.setItem("isLogin", JSON.stringify(true));
    navigate("../home", { replace: true });
  }

  function logoutHandler() {
    localStorage.setItem("isLogin", JSON.stringify(false));
    navigate("../", { replace: true });
  }

  // function endService() {
  //   navigate(-2)
  // }

  return (
    <>
      <div className="common flex flex-col gap-5">
        <div>Register</div>
        <button
          id="login"
          onClick={loginHandler}
          className="bg-blue-500 px-5 py-3 rounded-sm"
        >
          Log in
        </button>
        <button
          onClick={logoutHandler}
          className="bg-blue-500 px-5 py-3 rounded-sm"
        >
          Log out
        </button>
        {/* <button
          onClick={endService}
          className="bg-blue-500 px-5 py-3 rounded-sm"
        >
          브라우저 닫기
        </button> */}
      </div>
    </>
  );
}
