// otros paquetes
import { motion } from "framer-motion"
import { useMediaQuery } from "react-responsive";

// react Package 
import { NavLink } from "react-router-dom";
import { useState } from "react";

//react icons
import { IoArrowBackCircleSharp } from "react-icons/io5";
import { AiOutlineAppstore } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { IoSettingsSharp } from "react-icons/io5";
import { FaDatabase } from "react-icons/fa6";
import { RiBuildingLine } from "react-icons/ri";
import { TbReportAnalytics } from "react-icons/tb";

// componentes
import { SubMenu } from "./SubMenu";



export const Sidebar = () => {

    const Sidebar_animation = {
        // Sistema de visualización //realizado con framer-motion //config framer-motion
        open: {
            width: "16rem",
            transition: {
                damping: 40,
            },
        },
        closed: {
            width: "4rem",
            transition: {
                damping: 40,
            },
        },
    };

    // a traves de este array traemos los datos dentro de product categories  
    // como en este caso son 2 datos, se ve 2 reflejados en la landing. 
    const subMenuList = [
        {
            // main menu name 
            name: "Ventas",
            // react icons
            icon: RiBuildingLine,
            //submenus  
            menus: ["Altas", "Bajas", "Modificaciones", "Cierres"],
        },
        {
            name: "Legales",
            icon: TbReportAnalytics,
            menus: ["dashboards", "realtime", "events"],
        }
    ]


    let isTab = useMediaQuery({query:"( max-width: 768px ) "})
    console.log(isTab, "isTab");
    // creamos el cambio de estado para que cuando inicie la app se muestre abierto. 
    const [isOpen, setIsOpen] = useState(isTab ? false : true );
    // en el use state lo que le decimos es que si is tab se cierre o habra a partir de los 768px- que cambie de estado 
    
    return (
        <div>
            <motion.div
                animate={isOpen ? "open" : "closed"}
                variants={Sidebar_animation}
                className="bg-white text-gray shadow-xl z-[999] 
            w-[16rem] max-w-[16rem] h-screen overflow-hidden md:relative fixed"
            >
                {/* Logo */}
                <div className="flex items-center gap-2.5 font-medium border-b border-slate-300 py-3 mx-3">

                    <img src="https://www.creativefabrica.com/wp-content/uploads/2022/05/23/PR-logo-design-Graphics-31023377-1.jpg" alt="" width={75} />
                    <span className="text-xl whitespace-pre"> Proboxx </span>

                </div>

                {/* Menus */}
                <div className="flex flex-col h-full ">
                    {/* First menu  */}
                    <ul className="whitespace-pre px-2.5 text-[0.9rem] py-5 flex flex-col gap-1 
                    font-medium overflow-x-hidden scrollbar-thin  scrollbar-track-white scrollbar-thumb-slate-100 h-[70%] md:h-[68%] ">
                        {/* el valor del classname {link} está declarado en index.css */}
                        <li>
                            <NavLink to="/" className={"link"}>
                                <AiOutlineAppstore size={25} className="min-w-max" />
                                Inicio
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/auth" className={"link"}>
                                <CgProfile size={25} className="min-w-max" />
                                Back Office
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/settings" className={"link"}>
                                <IoSettingsSharp size={25} className="min-w-max" />
                                Herramientas
                            </NavLink>
                        </li>

                        {/*-------------------------------------------*/}
                        {/* submenu */ /* Creación de la sección del submenu */}
                        { // si isopen esta abierto que muestre el contenido. si esta cerrado no- 
                            isOpen && (
                                <div className="border-y py-5 border-slate-300">
                                    <small className="pl-3 text-slate-500  inline-block mb-2">
                                        Product categories
                                    </small>
                                    {//mapeo donde traemos los valores de submenulist.  // array que está por fuera // 
                                        subMenuList?.map(menu => (
                                            <div key={menu.name} className="flex flex-col gap-1">
                                                <SubMenu data={menu} />
                                            </div>
                                        ))
                                    }
                                </div>
                            )
                        }

                        {/*seccion stroage */}
                        <li>
                            <NavLink to="/stroage" className={"link"}>
                                <FaDatabase size={25} className="min-w-max" />
                                stroage
                            </NavLink>
                        </li>
                    </ul>

                    {/* second */ }
                    {
                        isOpen && <div className="flex-1 text-sm z-50 max-h-48 my-auto whitespace-pre w-full font-medium">
                            <div className="flex items-center justify-between border-y border-slate-300 p-4 ">
                                <div>
                                    <p> SPARK </p>
                                    <small> Lorem ipsum dolor.</small>
                                </div>
                                <p className="text-teal-500 py-1.5 px-3 text-xs bg-teal-50 rounded-xl    ">
                                    Upgrade 
                                </p>
                            </div>
                        </div>
                    }
                </div>





                {/* Control del apertura y cierre del icono debajo de todo.   */}
                <motion.div
                    animate={
                        isOpen ? {
                            x: 0,
                            y: 0,
                            rotate: 0
                        } : {
                            x: -10,
                            y: -200,
                            rotate: 180,
                        }
                    }
                    transition={{
                        duration: 0.5,
                    }}

                    //con onclick aplicamos la funcion setIsOpen para que cambie de estado
                    onClick={() => setIsOpen(!isOpen)}
                    className="absolute w-fit h-fit z-50 right-2 bottom-5 cursor-pointer
                md:block hidden"
                >
                    <IoArrowBackCircleSharp size={25} />

                </motion.div>
            </motion.div>
        </div>
    )
}
