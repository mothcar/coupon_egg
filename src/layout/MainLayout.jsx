import NavBar from "../components/NavBar.jsx";
import AddButton from "../components/AddButton.jsx";
import { Outlet } from "react-router-dom";

export default function MainLayout() {
  return (
    <>
      <NavBar />
      <AddButton />
      <Outlet />
    </>
  );
}
