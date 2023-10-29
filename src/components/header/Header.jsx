import { useState } from "react";
import PrimBtn from "../primeryBtn/PrimBtn";

export default function Header() {
    const [show, setShow] = useState(false)
  return (
    <div className={`grid grid-cols-2 ${show? 'gap-y-6': 'gap-y-0'} gap-2 p-3 sm:p-5 duration-500 shadow-md px-5 sm:px-8 justify-between align-middle bg-primary`}>
        <h1 className="text-3xl font-bold font-agbalumo text-secondary leading-normal">PDF WIZ</h1>
        <img className="sm:hidden justify-self-end" onClick={()=>setShow(!show)} width="48" height="48" src="https://img.icons8.com/material-rounded/48/menu--v1.png" alt="menu--v1"/>
        <div className={`flex sm:col-auto sm:flex-row sm:justify-self-end flex-col gap-1 duration-500 col-span-2 items-center sm:max-h-none ${!show? 'max-h-0 overflow-hidden': 'max-h-32'} justify-self-center`}>
            <a className="p-2 px-4 rounded-md text-secondary font-semibold text-lg " href="">Log In</a>
            <PrimBtn text="Sign In" />
        </div>
    </div>
  )
}
