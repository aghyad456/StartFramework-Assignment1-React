import Text from "../components/Text/Text";
import React, { useState, useEffect } from "react";

export default function Contact() {
  const [userName, setName] = useState("");
  const [userAge, setAge] = useState("");
  const [userEmail, setEmail] = useState("");
  const [userPassword, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [focus, setFocus] = useState({
    name: false,
    age: false,
    email: false,
    password: false,
  });

  useEffect(() => {
    setFocus((prev) => ({
      ...prev,
      name: !!userName,
      age: !!userAge,
      email: !!userEmail,
      password: !!userPassword,
    }));
  }, [userName, userAge, userEmail, userPassword]);
    const handleSubmit = (e) => {
    e.preventDefault();
    if (!userName || !userAge || !userEmail || !userPassword) {
      setMessage("⚠️ Error ");
    } else {
      setMessage("✅ Success");
      setName("");
      setAge("");
      setEmail("");
      setPassword("");
    }
  };


  return (
    <>
      <section className="container py-5">
        <div className="py-3">
          <Text title="contact section" color="#2C3E50" />
        </div>

        <form className="w-75 mx-auto text-start py-5">
            <div className="form-floating mb-4 position-relative">
                <input type="text" className="form-control shadow-sm"  id="userName"  placeholder="userName" value={userName}  onChange={(e) => setName(e.target.value)}  />
                <label   htmlFor="userName" className={focus.name ? "text-success" : ""}   > userName </label>
            </div>

            <div className="form-floating mb-4 position-relative">
                <input type="number" className="form-control shadow-sm" id="userAge" placeholder="userAge" value={userAge} onChange={(e) => setAge(e.target.value)} />
                <label htmlFor="userAge" className={focus.age ? "text-success" : ""}> userAge </label>
            </div>

            <div className="form-floating mb-4 position-relative">
                <input type="email" className="form-control shadow-sm" id="userEmail" placeholder="userEmail" value={userEmail} onChange={(e) => setEmail(e.target.value)}/>
                <label htmlFor="userEmail" className={focus.email ? "text-success" : ""}> userEmail</label>
            </div>

            <div className="form-floating mb-4 position-relative">
                <input type="password" className="form-control shadow-sm" id="userPassword" placeholder="userPassword" value={userPassword} onChange={(e) => setPassword(e.target.value)}/>
                <label htmlFor="userPassword" className={focus.password ? "text-success" : ""}>userPassword</label>
            </div>

            <button type="submit" className="btn text-white px-3 py-2" style={{ backgroundColor: "#1abc9c" }} onClick={handleSubmit}> Send Message</button>
            </form> 
            {message && (<p className="mt-4 fw-bold p-2 rounded" style={{color: message.includes("✅") ? "white" : "white", backgroundColor: message.includes("✅") ? "green" : "red", } }> {message}</p>)}
      </section>
    </>
  );
}
