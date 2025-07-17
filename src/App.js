import { useState } from "react";

export default function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => setUser(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      {user ? (
        <>
          <Navbar user={user} onLogout={handleLogout} />
          <Headlines />
        </>
      ) : (
        <Login onLogin={setUser} />
      )}
    </div>
  );
}
