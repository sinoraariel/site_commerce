import React, { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle, 
  Linkedin, 
  Facebook,
  MessageSquare,
  AlertCircle,
  ArrowRight,
} from 'lucide-react';
import { FaWhatsapp } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { FaMoneyBillTrendUp } from "react-icons/fa6";
import { MdProductionQuantityLimits } from "react-icons/md";
const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    const message = `
            Bonjour,

            Nom : ${formData.name}
            Email : ${formData.email}
            Téléphone : ${formData.phone}
            Sujet : ${formData.subject}

            Message :
            ${formData.message}
            `;

  const phoneNumber = "237688064498"; // ton numéro WhatsApp
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  window.open(whatsappUrl, "_blank");

  setIsLoading(false);
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setIsLoading(false);
    
    setTimeout(() => setIsSubmitted(false), 5000);
    
    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      subject: '',
      message: '',
    });
  };

  const handleChange = (e) => {
  const { name, value } = e.target;

  setFormData((prev) => ({
    ...prev,
    [name]: value,
  }));
};


  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Téléphone",
      info: "+237 654 919 092",
      description: "Lun-Sam, 8h-18h",
      
      action:<a href='https://wa.me/237688064498' target='_blank'>Envoyer un message</a> 
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email",
      info: "tankeusinora@gmail.com",
      description: "Réponse sous 24h",
      
      action:<a href='mailto: tankeusinora@gmail.com' target='_blank' rel='nooper noreferrer'>Envoyer un email</a> 
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adresse",
      info: "Douala, Cameroun",
      description: "Siège social",
     
      action:<a href='https://www.google.com/maps/place/Douala,+Cameroun' target='_blank' rel='nooper noreferrer'> Voir sur la carte</a>
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Horaires",
      info: "Lun-Sam : 8h-18h",
      description: "Sam : 9h-15h",
     
      action: "Planifier RDV"
    }
  ];

  const services = [
    "Question sur un produit",
   " Problème de commande",
    "Livraison",
    "Retour / remboursement",
   " Autres",
  ];

  

  return (
    
    <div className="min-h-screen  overflow-hidden">
      
      {/* Hero Section */}
      <section data-aos="zoom-out"
                data-aos-duration="500"
                data-aos-once="true" 
                className="relative dark:text-white overflow-hidden min-h-[400px] sm:min-h-[500px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 duration-200 mt-16 sm:mt-20 pt-8">
                  <div className='h-[700px] w-[700px] bg-primary/70
      absolute -top-1/2 right-0 rounded-3xl rotate-45 -z-9'></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center" data-aos="zoom-in">
            <div className="inline-flex items-center space-x-2 bg-white/10 backdrop-blur-sm border border-white/90 rounded-full px-4 py-2 mb-8">
              <MessageSquare className="h-4 w-4 text-accent-400" />
              <span className="dark:text-white text-black/90 text-sm font-medium">Contactez-nous</span>
            </div>
            
            <h1 className="dark:text-white text-5xl md:text-7xl font-bold text-black leading-tight mb-8">
              Besoin d’aide ? {' '}
              <span className="font-serifAlt text-black dark:text-white ">
                Parlons-en
              </span>
            </h1>
            
            <p  className="dark:text-white/60 text-xl md:text-2xl text-black/80 max-w-4xl mx-auto leading-relaxed">
              Notre équipe est disponible pour répondre à toutes vos questions concernant nos produits, vos commandes et la livraison.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Methods */}
      <section   className="bg-white dark:bg-gray-800  duration-200 py-20 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div data-aos="fade-up" className=" grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contactInfo.map((item, index) => (
              <div data-aos="fade-up"
                key={index}
                className="dark:hover:bg-primary/40 group-hover:scale-110 transition-transform duration-300 dark:bg-gray-500 dark:text-white dark:hover:bg-gray-700  duration-200 group  p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 border dark:border-gray-500 border-neutral-100 hover:-translate-y-2 text-center"
              >
                <div data-aos="fade-up" className=' bg-gradient-to-br from-accent-600 via-accent-500 to-accent-400 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 mx-auto text-white group-hover:scale-110 transition-transform duration-300'>
                  {item.icon}
                </div>
                <h3 data-aos="fade-up" className="dark:text-white text-xl font-bold text-neutral-900 mb-2">
                  {item.title}
                </h3>
                <p data-aos="fade-up" className="dark:text-white text-lg font-semibold text-neutral-700 mb-2">{item.info}</p>
                <p data-aos="fade-up" className="dark:text-white text-neutral-600 text-sm mb-4">{item.description}</p>
                <button data-aos="zoom-in" className="dark:text-white 
                 rounded-full font-medium h-[30px] w-[150px] text-sm hover:text-primary/700 transition-colors">
                  {item.action}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section  className=" py-24 dark:bg-gray-800 bg-neutral-50">
        <div  className=" max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-16">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div data-aos="zoom-in" className="dark:bg-gray-500  bg-white rounded-3xl shadow-2xl p-8 md:p-12 border dark:border-gray-700 border-neutral-100">
                <div className="mb-8">
                  <div className="dark:text-accent-500 inline-flex items-center space-x-2 bg-primary-50 text-accent-500 px-4 py-2 rounded-full text-sm font-medium mb-6">
                    <Send className="h-4 w-4" />
                    <span>Formulaire de contact</span>
                  </div>
                  <h2 className="dark:text-white text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
                     
                    <span className="bg-gradient-to-br from-primary/100 to-secondary/100 bg-clip-text text-transparent">
                      Contactez Nous
                    </span>
                     {' '} pour  vos besoins
                  </h2> 
                  <p className="dark:text-white text-lg text-neutral-600">
                    Remplissez ce formulaire et notre équipe vous recontactera dans les 24h.
                  </p>
                </div>
                
                {isSubmitted && (
                  <div className="mb-8 p-6 bg-green-50 border border-green-200 rounded-2xl flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-600 flex-shrink-0 mt-0.5" />
                    <div>
                      <h4 className="font-semibold text-green-800 mb-1">Message envoyé avec succès !</h4>
                      <p className="text-green-700 text-sm">
                        Nous avons bien reçu votre demande. Notre équipe vous recontactera dans les plus brefs délais.
                      </p>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-8">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="dark:text-white block text-sm font-semibold text-neutral-700 mb-3">
                        Nom complet *
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="dark:bg-gray-600  w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="Votre nom complet"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="dark:text-white block text-sm font-semibold text-neutral-700 mb-3">
                        Email *
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="dark:bg-gray-600 w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="votre@email.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="phone" className="dark:text-white block text-sm font-semibold text-neutral-700 mb-3">
                        Téléphone
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="dark:bg-gray-600 w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                        placeholder="+237 6XX XXX XXX"
                      />
                    </div>
                    
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="subject" className="dark:text-white block text-sm font-semibold text-neutral-700 mb-3">
                        Sujet *
                      </label>
                      <select
                        id="subject"
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className=" dark:bg-gray-600 w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 text-lg"
                      >
                        <option value="">Sélectionnez un sujet</option>
                        {services.map((service, index) => (
                          <option key={index} value={service}>{service}</option>
                        ))}
                      </select>
                    </div>
                    
                  </div>

                  <div>
                    <label htmlFor="message" className="dark:text-white block text-sm font-semibold text-neutral-700 mb-3">
                      Message *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      rows={6}
                      value={formData.message}
                      onChange={handleChange}
                      className="dark:bg-gray-600 w-full px-4 py-4 border border-neutral-300 rounded-xl focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-all duration-300 resize-none text-lg"
                      placeholder="Décrivez votre demande..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isLoading}
                    className="w-full bg-gradient-to-br from-accent-600 via-accent-500 to-accent-400 text-white py-4 px-8 rounded-xl font-semibold hover:from-primary-700 hover:to-secondary-700 transition-all duration-300 flex items-center justify-center space-x-3 group disabled:opacity-50 disabled:cursor-not-allowed text-lg shadow-lg hover:shadow-xl"
                  >
                    {isLoading ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                        <span>Envoi en cours...</span>
                      </>
                    ) : (
                      <>
                        <Send className="h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        <span>Envoyer le message</span>
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-8">
              {/* Quick Contact */}
              <div data-aos="fade-up" className="w-full rounded-3xl p-6 sm:p-8 border dark:border-gray-600 border-primary/100">
                <h3 className="dark:text-white text-2xl font-bold text-neutral-900 mb-6">
                  Contact rapide
                </h3>
                <div className="space-y-4 ">
                  <a
                    href="tel:+237"
                    className="dark:hover:bg-primary/40 dark:bg-gray-500 dark:text-white dark:group-hover:scale-110 transition-transform duration-300 flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-primary/100 to-secondary/100 p-3 rounded-lg">
                      <Phone className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="dark:text-white font-semibold text-neutral-900">Appel direct</div>
                      <div className="dark:text-white text-sm text-neutral-600">+237 654 919 092</div>
                    </div>
                    <ArrowRight className="dark:text-white h-4 w-4 text-neutral-400 group-hover:text-primary-600 group-hover:translate-x-1 transition-all" />
                  </a>
                  
                  <a
                    href="mailto:tchoutangeldora@gmail.com"
                    className="dark:hover:bg-primary/40 dark:bg-gray-500 flex items-center space-x-4 p-4 bg-white rounded-xl hover:shadow-lg transition-all duration-300 group"
                  >
                    <div className="bg-gradient-to-br from-primary/100 to-secondary/100 p-3 rounded-lg">
                      <Mail className="h-5 w-5 text-white" />
                    </div>
                    <div>
                      <div className="dark:text-white font-semibold text-neutral-900">Email direct</div>
                      <div className="dark:text-white text-sm text-neutral-600">tchoutangeldora@gmail.com</div>
                    </div>
                    <ArrowRight className="dark:text-white h-4 w-4 text-neutral-400 group-hover:text-secondary-600 group-hover:translate-x-1 transition-all" />
                  </a>
                </div>
              </div>

             <div className='h-[80px]'></div> 

              {/* Emergency Contact */}
              <div data-aos="fade-up" className=" dark:bg-gray-500 top-50 bg-gradient-to-br from-red-50 to-orange-50 rounded-3xl p-8 border border-red-100">
                <div className="flex items-center space-x-3 mb-4">
                  <AlertCircle className="h-6 w-6 text-red-600" />
                  <h3 className="text-xl font-bold text-red-900">
                    Problèmes Urgent
                  </h3>
                </div>
                <p className="text-red-700 mb-6 leading-relaxed">
                  Pour les problèmes que vous rencontrez contactez nous à l'immédiat
                </p>
                <a
                  href='https://wa.me/237688064498'
                  className="inline-flex items-center px-6 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-all duration-300 font-semibold"
                >
                  <FaWhatsapp className="h-5 w-5 mr-2" />
                  Via Whatsapp
                </a>
              </div>

              
            </div>
          </div>
        </div>
      </section>

    

      {/* FAQ Quick Access */}
      <section className="py-24 bg-neutral-50 dark:bg-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 data-aos="fade-up" className="dark:text-white text-4xl md:text-5xl font-bold text-neutral-900 mb-6">
              Questions{' '}
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                fréquentes
              </span>
            </h2>
            <p data-aos="fade-up" className="dark:text-white text-xl text-neutral-600 leading-relaxed">
              Consultez nos réponses aux questions les plus courantes avant de nous contacter
            </p>
          </div>
          
          <div data-aos="fade-up" className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                question: "Quel sont les delais de livraison chez EdoraShop?",
                answer: "Les livraisons sont effectuées entre 24h et 72h selon votre localisation.",
                icon: <FaShippingFast className="dark:text-accent-300 h-6 w-6 text-accent-600" />
              },
              {
                question: "Quels moyens de paiement acceptez-vous ?",
                answer: "Les paiement se font avant la livraison par un dépôt sur notre compte avec une preuve à l'appuie",
                icon: <FaMoneyBillTrendUp className="dark:text-accent-300 h-6 w-6 text-accent-600" />
              },
              {
                question: "Puis-je retourner un produit ?",
                answer: "Vous disposez de 24h après réception pour signaler un problème.",
                icon: <MdProductionQuantityLimits className="dark:text-accent-300 h-6 w-6 text-accent-600" />
              },
              {
                question: "Comment suivre ma commande?",
                answer: "Le moyen le plus rapide est de nous écrire directement sur WhatsApp.",
                icon: <MapPin className="dark:text-accent-300 h-6 w-6 text-accent-600" />
              },
              
            ].map((faq, index) => (
              <div data-aos="fade-up" key={index} className="dark:bg-gray-500 dark:hover:bg-primary/40  bg-white p-8 rounded-2xl shadow-lg hover:bg-accent-100 hover:shadow-xl transition-all duration-300 border dark:border-gray-600 border-neutral-100">
                <div className="dark:bg-gray-700 bg-gradient-to-r from-primary-50 to-secondary-50 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  {faq.icon}
                </div>
                <h4 className="dark:text-white font-bold text-neutral-900 mb-3 text-lg">
                  {faq.question}
                </h4>
                <p className="dark:text-white text-neutral-600 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;