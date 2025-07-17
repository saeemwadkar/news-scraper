import { useEffect } from "react";
import { jwtDecode } from "jwt-decode"; 

export default function Login({ onLogin }) {
  const clientId = "1039375157366-84vefdhnu55cg8ch1pq873ngmoc34c86.apps.googleusercontent.com"; 

  useEffect(() => {
    console.log("🔄 Loading Google script...");
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    script.onload = () => {
      console.log("Google script loaded");

      window.google.accounts.id.initialize({
        client_id: clientId,
        callback: handleCredentialResponse,
      });

      window.google.accounts.id.renderButton(
        document.getElementById("googleLoginDiv"),
        { theme: "filled_blue", size: "large", width: 250 }
      );

      window.google.accounts.id.prompt(); // ensures Google One Tap works
    };
  }, []);

  const handleCredentialResponse = (response) => {
    console.log("Google Login Response:", response);

    if (!response.credential) {
      console.error("No credential received!");
      return;
    }

    const decoded = jwtDecode(response.credential); 
    console.log("Decoded Google User:", decoded);

    onLogin({
      name: decoded.name,
      email: decoded.email,
      imageUrl: decoded.picture,
    });
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-blue-100 to-indigo-100">
      <h1 className="text-4xl font-bold text-gray-800 mb-6">
        Welcome to <span className="text-blue-600">News Scraper</span>
      </h1>
      <p className="text-gray-600 mb-4">Sign in with Google to continue</p>
      <div id="googleLoginDiv"></div>
    </div>
  );
}
