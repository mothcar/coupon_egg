import CommonBar from "../components/CommonBar.jsx";
import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    <>
      <CommonBar />
      <Outlet />
    </>
  )
}
