// import { BiAdjust } from "react-icons/bi";
import "./NavBar.scss";
import { useNavigate } from 'react-router-dom'

export default function AddButton() {
  const navigate = useNavigate();

  function clickHandler() {
    navigate('../addPost', {replace: true})
    console.log("Clicked.........")
  }
  return (
    <div id="addbutton">
      <button
        className="inline-block rounded-full bg-sky-400 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
        onClick={clickHandler}
        >
        등록
      </button>
    </div>
  );
}
