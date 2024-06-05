// import { useEffect } from "react";
import "./CommonBar.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function CommonBar() {
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `/`;
    navigate(path, { replace: true });
  };

  return (
    <div className="common-nav">
      <button onClick={routeChange}>
        <div className="flex items-center gap-5">
          <BsChevronLeft />
          <span> 뒤로가기</span>
        </div>
      </button>
    </div>
  );
}
