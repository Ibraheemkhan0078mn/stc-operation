import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { LayoutDashboard, FolderKanban, Users, ChevronRight } from "lucide-react";
import { useEffect } from "react";

export default function Sidebar() {
  let location = useLocation()
  const [active, setActive] = useState("Dashboard");



  if (location.pathname == "/" ||
    location.pathname == "/registration") {
    return null;
  }

  const user = {
    name: "Ayesha Khan",
    role: "Product Designer",
    avatar: "https://i.pravatar.cc/100?img=47",
  };

  const navButtonClass = (isActive) =>
    `w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all duration-200 group ${isActive
      ? "bg-blue-500/20 text-white border border-blue-400/40 shadow-inner"
      : "text-blue-200 hover:bg-white/5 hover:text-white"
    }`;

  const chevronClass = (isActive) =>
    `opacity-0 group-hover:opacity-60 transition-opacity ${isActive ? "opacity-70" : ""
    }`;

  return (
    <div className="w-[30%] h-full min-h-screen bg-gradient-to-b from-[#0B1F4D] via-[#0F2A66] to-[#0B1F4D] text-white flex flex-col justify-between shadow-2xl border-r border-blue-900/40">

      {/* Top: Logo + Title */}
      <div>
        <div className="flex items-center gap-3 px-6 py-6 border-b border-white/10">
          <img
            src="https://cdn-icons-png.flaticon.com/512/2942/2942813.png"
            alt="App Logo"
            className="w-10 h-10 rounded-lg object-cover ring-2 ring-blue-400/40"
          />
          <div>
            <h1 className="text-lg font-semibold tracking-wide">Nexora</h1>
            <p className="text-xs text-blue-300">Workspace Suite</p>
          </div>
        </div>

        {/* Navigation — each button written separately, no map */}
        <nav className="px-4 py-6 space-y-2">
          <Link to="/dashboard" onClick={() => setActive("Dashboard")}>
            <button className={navButtonClass(active === "Dashboard")}>
              <span className="flex items-center gap-3">
                <LayoutDashboard size={18} />
                <span className="text-sm font-medium">Dashboard</span>
              </span>
              <ChevronRight size={16} className={chevronClass(active === "Dashboard")} />
            </button>
          </Link>

          <Link to="/projects" onClick={() => setActive("Projects")}>
            <button className={navButtonClass(active === "Projects")}>
              <span className="flex items-center gap-3">
                <FolderKanban size={18} />
                <span className="text-sm font-medium">Projects</span>
              </span>
              <ChevronRight size={16} className={chevronClass(active === "Projects")} />
            </button>
          </Link>

          <Link to="/members" onClick={() => setActive("Members")}>
            <button className={navButtonClass(active === "Members")}>
              <span className="flex items-center gap-3">
                <Users size={18} />
                <span className="text-sm font-medium">Members</span>
              </span>
              <ChevronRight size={16} className={chevronClass(active === "Members")} />
            </button>
          </Link>
        </nav>
      </div>

      {/* Bottom: User Info */}
      <div className="px-4 py-5 border-t border-white/10">
        <div className="flex items-center gap-3 px-3 py-3 rounded-xl bg-white/5 hover:bg-white/10 transition-colors cursor-pointer">
          <img
            src={user.avatar}
            alt={user.name}
            className="w-10 h-10 rounded-full object-cover ring-2 ring-blue-400/50"
          />
          <div className="flex flex-col">
            <span className="text-sm font-medium text-white">{user.name}</span>
            <span className="text-xs text-blue-300">{user.role}</span>
          </div>
        </div>
      </div>
    </div>
  );
}