import { useState } from "react";
import { useRouter } from "next/router";
import { supabase } from "../lib/supabaseClient";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const router = useRouter();

  const handleLogin = async (e) => {
    e.preventDefault(); 
    setErrorMsg(null);

    // 1. Supabase-Anfrage starten
    // Supabase prüft das Passwort und speichert das JWT automatisch im Browser!
    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password,
    });

    if (error) {
      // Wenn E-Mail oder Passwort falsch ist
      setErrorMsg("Anmeldung fehlgeschlagen: " + error.message);
    } else {
      // 2. ERFOLG! 
      // Das JWT wurde im Hintergrund im LocalStorage abgelegt.
      // Wir leiten den User jetzt direkt zum Buchhaltungsformular weiter.
      router.push("/anmeldung"); 
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "50px auto", padding: "20px", fontFamily: "sans-serif" }}>
      <h2>KRC Buchhaltung - Login</h2>
      
      {errorMsg && <div style={{ color: "red", marginBottom: "15px" }}>{errorMsg}</div>}

      <form onSubmit={handleLogin}>
        <div style={{ marginBottom: "15px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>E-Mail-Adresse</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <div style={{ marginBottom: "20px" }}>
          <label style={{ display: "block", marginBottom: "5px" }}>Passwort</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ width: "100%", padding: "8px" }}
          />
        </div>

        <button 
          type="submit" 
          style={{ width: "100%", padding: "10px", backgroundColor: "#e10000", color: "white", border: "none", cursor: "pointer" }}
        >
          Anmelden
        </button>
      </form>
    </div>
  );
}