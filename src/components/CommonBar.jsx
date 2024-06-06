// import { useEffect } from "react";
import "./CommonBar.css";
import { BsChevronLeft } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import { useTitleStore } from "../store/titleStore.js";

export default function CommonBar() {
  const { common_title } = useTitleStore();
  const title = common_title;
  const navigate = useNavigate();
  const routeChange = () => {
    let path = `../`;
    navigate(path, { replace: true });
  };

  return (
    <div className="common-nav">
      <button onClick={routeChange}>
        <div className="flex items-center gap-5">
          <BsChevronLeft />
          <span> {title} </span>
        </div>
      </button>
    </div>
  );
}
