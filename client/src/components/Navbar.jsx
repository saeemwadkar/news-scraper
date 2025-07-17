import { Newspaper, LogOut } from "lucide-react";

export default function Navbar({ user, onLogout }) {
  return (
    <nav className="sticky top-0 z-50 bg-gradient-to-r from-blue-600 to-indigo-700 p-4 shadow-md flex justify-between items-center">
      
      {/* Logo + Title */}
      <div className="flex items-center gap-2">
        <Newspaper className="w-7 h-7 text-white" />
        <h1 className="text-2xl font-bold text-white tracking-wide">
          News Scraper
        </h1>
      </div>

      {/*  User Section */}
      <div className="flex items-center gap-4">
        {/* Profile Image with hover effect */}
        <img
          src={user.imageUrl}
          alt="Profile"
          className="w-10 h-10 rounded-full border-2 border-white shadow hover:scale-105 transition-transform"
        />

        {/* Name + Email */}
        <div className="flex flex-col leading-tight text-white">
          <span className="font-semibold text-sm">{user.name}</span>
          {user.email && (
            <span className="text-xs opacity-80">{user.email}</span>
          )}
        </div>

        {/* Logout Button */}
        <button
          onClick={onLogout}
          className="flex items-center gap-1 bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded-lg shadow transition"
        >
          <LogOut className="w-4 h-4" />
          Logout
        </button>
      </div>
    </nav>
  );
}
