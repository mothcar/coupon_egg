import CommonBar from "../components/CommonBar.jsx";
import { Outlet } from "react-router-dom";

export default function CommonLayout() {
  return (
    <>
      <CommonBar />
      {/* <div>aldkfja;lkdfja;lkjd</div> */}
      <div>*</div>
      <div>*</div>
      <Outlet />
    </>
  )
}
