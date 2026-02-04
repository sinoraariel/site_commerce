import React from 'react'
import { LuSendHorizontal } from "react-icons/lu";
const Email = () => {
  const [email, setEmail] = React.useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send(
      "service_m2038j9",     // ← Ton Service ID
      "template_l5e7sfn",    // ← Ton Template ID
      { user_email: email }, 
      "nli_edRfM8ZqQ_Du8"     // ← Ton Public Key
    )
    .then(() => {
      alert("Email envoyé avec succès !");
      setEmail("");
    })
    .catch((err) => {
      console.error("Erreur :", err);
      alert("Erreur lors de l’envoi.");
    });
  }};

  <form>
     <input
        data-aos="fade-up"
        type="email"
        
        onChange={(e) => setEmail(e.target.value)}
        required
        placeholder='Enter your e-mail'
        className='w-[700px]  p-3 flex justify-center'
    />
    <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
        <LuSendHorizontal size={20} />
    </button>
  </form>

export default Email;
