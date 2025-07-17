import { useState } from "react";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Headlines from "./components/Headlines";

export default function App() {
  const [user, setUser] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      {user ? (
        <>
          <Navbar user={user} onLogout={() => setUser(null)} />
          <Headlines />
        </>
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}
