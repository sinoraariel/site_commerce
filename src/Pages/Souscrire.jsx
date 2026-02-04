import React, { useState} from 'react'
import BG from '../assets/bg4.jpeg';
import { LuSendHorizontal } from "react-icons/lu";
import emailjs from '@emailjs/browser';
const BGimg = {
    backgroundImage: `url(${BG})`,
    backgroundPosition: "center",
    backgroundSize: "cover",
    height: "100%",
    with:"100%",
}
const souscrire = () => {
    const [email, setEmail]= useState("");
    
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
      };
    return (
    <div
    data-aos="zoom-in"
    className='mb-20 bg-gray-100 dark:bg-gray-800 text-wh'
    style={BGimg}
    >
      <div className='container backdrop-blur-sm py-10'>
        <div className='space-y-6 max-w-xl mx-auto'>
            <h1
            className='text-2xl text-white !text-center sm:text-left sm:text-4xl font-semibold'
            >Get Notified about new products</h1>
            <form onSubmit={handleSubmit} className="flex bg-white p-1 rounded shadow-md">
                 <input 
                    type="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                    required
                    placeholder='Enter your e-mail'
                    className='w-[700px]  p-3 flex justify-center'
                />
                <button type="submit" className="bg-blue-500 text-white p-2 rounded-md">
                    <LuSendHorizontal size={20} />
                </button>
              </form>
            
        </div>
      </div>
    </div>
  )
}

export default souscrire
