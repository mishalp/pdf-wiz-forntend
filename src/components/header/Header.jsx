import { useContext, useEffect, useState } from "react";
import PrimBtn from "../primeryBtn/PrimBtn";
import useVerify from "../../hooks/useVerify";
import { StoreContext } from "../../../store/StoreContext";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [show, setShow] = useState(false)
  const { data, pending } = useVerify()
  const { user, setUser } = useContext(StoreContext)
  const [drop, setDrop] = useState(false)
  const navigate = useNavigate()

  useEffect(() => {
    if (!pending) {
      if (data !== 'guest') setUser(data)
      console.log(data);
    }
  }, [pending])

  const logout = () => {
    localStorage.clear()
    navigate("/")
    location.reload()
  }

  return (
    <div className={`grid grid-cols-2 ${show ? 'gap-y-6' : 'gap-y-0'} items-center gap-2 relative p-3 sm:p-5 duration-500 shadow-md px-5 sm:px-8 justify-between align-middle bg-primary`}>
      <a href="/" className="text-3xl font-bold font-agbalumo text-secondary leading-normal">PDF WIZ</a>
      <img className="sm:hidden justify-self-end" onClick={() => setShow(!show)} width="48" height="48" src="https://img.icons8.com/material-rounded/48/menu--v1.png" alt="menu--v1" />
      <div className={`flex sm:col-auto overflow-visible sm:flex-row sm:justify-self-end flex-col gap-1 duration-500 col-span-2 items-center sm:max-h-none ${!show ? 'max-h-0 overflow-hidden' : 'max-h-32'} justify-self-center`}>
        {pending ? <></> : user ? <div className="flex flex-col relative overflow-visible items-center">
          <img
            
            onClick={() => setDrop(!drop)}
            className={`cursor-pointer ${show? 'flex': 'hidden'} sm:flex`}
            width="60" height="60" src="https://img.icons8.com/ios-glyphs/60/user-male-circle.png" alt="user-male-circle" />
          {drop && <div
            onMouseLeave={()=>setDrop(false)}
            className="absolute z-10 bottom-0 animate-drop flex flex-col items-start rounded-md gap-2 duration-300 bg-white shadow-lg p-4 -translate-x-20 w-max overflow-visible translate-y-36">
            <h3 className="text-lg font-semibold">{user}</h3>
            <a
              href="/my-uploads"
              className="text-secondary cursor-pointer flex flex-col after:w-0 hover:after:w-full after:duration-500 after:h-[2px] font-semibold after:bg-secondary after:content-[' ']"
            >My Uploads</a>
          <PrimBtn clickHandler={logout} text="Log Out" />
          </div>}
        </div> : <div className={`${show? 'flex': 'hidden'} sm:flex`}>
          <a className="p-2 px-4 rounded-md text-secondary font-semibold text-lg " href="/login">Log In</a>
          <PrimBtn link={'/signup'} text="Sign Up" />
        </div>}
      </div>
    </div>
  )
}
