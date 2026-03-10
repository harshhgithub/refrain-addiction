import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import { IoIosArrowBack } from "react-icons/io";
import { AiOutlineAppstore } from "react-icons/ai";
import { BsPerson } from "react-icons/bs";
import { useMediaQuery } from "react-responsive";
import { MdMenu } from "react-icons/md";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineAssessment, MdChat, MdVideoCall } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { sbIcon } from "../assets";
import SubMenu from "./SubMenu";
import { SiHandshake } from "react-icons/si";
import { RiLogoutBoxLine } from "react-icons/ri";

const Sidebar = () => {
  let isTabletMid = useMediaQuery({ query: "(max-width:768px)" });

  const [open, setOpen] = useState(isTabletMid ? false : true);

  const sidebarRef = useRef();
  const { pathname } = useLocation();

  useEffect(() => {
    if (isTabletMid) setOpen(false);
    else setOpen(true);
  }, [isTabletMid]);

  useEffect(() => {
    isTabletMid && setOpen(false);
  }, [pathname]);

  const Nav_animation = isTabletMid
    ? {
        open: {
          x: 0,
          width: "15rem",
          transition: { damping: 40 },
        },
        closed: {
          x: -250,
          width: 0,
          transition: { damping: 40, delay: 0.15 },
        },
      }
    : {
        open: {
          width: "15rem",
          transition: { damping: 40 },
        },
        closed: {
          width: "4.5rem",
          transition: { damping: 40 },
        },
      };

  const subMenusList = [
    {
      name: "Appointment",
      icon: SiHandshake,
      menus: ["Book an Appointment", "Your Appointments"],
      path: ["new", "past"],
    },
  ];

  return (
    <div>
      {/* mobile overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`md:hidden fixed inset-0 z-[998] bg-black/40 ${
          open ? "block" : "hidden"
        }`}
      />

      <motion.div
        ref={sidebarRef}
        variants={Nav_animation}
        initial={{ x: isTabletMid ? -250 : 0 }}
        animate={open ? "open" : "closed"}
        className="bg-white shadow-lg z-[999] max-w-[15rem] w-[15rem] overflow-hidden md:relative fixed h-screen border-r"
      >

        {/* LOGO */}
        <div className="flex items-center gap-3 px-4 py-4 border-b">
          <img src={sbIcon} width={36} alt="" />
          <span className="text-lg font-semibold whitespace-pre">
            ReClaimYou
          </span>
        </div>

        {/* MENU */}
        <ul className="px-3 py-4 text-[0.95rem] flex flex-col gap-2 font-medium">

          <NavItem to="/home" icon={<AiOutlineAppstore size={20} />} text="Dashboard" />
          <NavItem to="/profile" icon={<BsPerson size={20} />} text="Profile" />
          <NavItem to="/assessment" icon={<MdOutlineAssessment size={20} />} text="Assessment" />
          <NavItem to="/chat" icon={<MdChat size={20} />} text="Chat with Me" />
          <NavItem to="/track" icon={<BsGraphUpArrow size={20} />} text="Analytics" />

          {(open || isTabletMid) && (
            <div className="border-y py-3 my-2">
              <small className="text-gray-400 px-2 text-xs uppercase">
                Connect
              </small>

              {subMenusList.map((menu) => (
                <SubMenu key={menu.name} data={menu} />
              ))}
            </div>
          )}

          <NavItem to="/meet" icon={<MdVideoCall size={20} />} text="Meet Now" />

          <NavItem
            to="/"
            icon={<RiLogoutBoxLine size={20} />}
            text="Logout"
          />
        </ul>
      </motion.div>

      {/* mobile menu */}
      <div className="m-3 md:hidden" onClick={() => setOpen(true)}>
        <MdMenu size={26} />
      </div>
    </div>
  );
};


/* NAV ITEM COMPONENT */
function NavItem({ to, icon, text }) {
  return (
    <li>
      <NavLink
        to={to}
        className={({ isActive }) =>
          `flex items-center gap-3 px-3 py-2 rounded-lg transition ${
            isActive
              ? "bg-blue-100 text-blue-600"
              : "text-gray-600 hover:bg-gray-100"
          }`
        }
      >
        {icon}
        <span>{text}</span>
      </NavLink>
    </li>
  );
}

export default Sidebar;