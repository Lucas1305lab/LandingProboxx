/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { useState } from "react";
import { MdKeyboardArrowDown } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";

motion

// conectamos a submenu con index.jsx a traves del parametro data
export const SubMenu = ({ data }) => {

  
  const {pathname} = useLocation()
  const [subMenuOpen, setSubMenuOpen] = useState(false);

  return (
    <div>
      {/* en este classname le indicamos que cuando seleccione uno de los submenus, aplique el mismo color al valor del submenu  */}
      <li
        className={`link ${pathname.includes(data.name) && 'text-blue-600'}`}
        onClick={() => setSubMenuOpen(!subMenuOpen)} 
      >
        {/* Iconos dinamicos. */}
        <data.icon size={23} className="min-w-max" />

        <p> {data.name} </p>
        <MdKeyboardArrowDown className={`${subMenuOpen && 'rotate-180'} duration-150`}/>
      </li>

      <motion.ul
      animate={
        // eslint-disable-next-line no-constant-condition
        subMenuOpen ? {
          height: "fit-content"
        }:{
          height: 0,
        }
      }

      className="flex flex-col pl-14 text-[08.rem] font-normal overflow-hidden h-0 ">
        {data.menus.map((menu) => (
            <li key={menu}>
              
              {/* 
                /build/auth
                /build/hosting
              */}
              
              <NavLink to={`/${data.name}/${menu}`} 
                       className="link !bg-transparent capitaalize">
                {/* Trayendo todos los datos que estan en el array de index.jsx  */}
                {menu}
              
              </NavLink>
            </li> 
          ))}
      </motion.ul>

    </div>
  )
}
