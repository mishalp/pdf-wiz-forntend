import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";

export default function Root() {
  return (
    <div className="font-inter min-h-screen ">
        <Header />
        <Outlet />
    </div>
  )
}
