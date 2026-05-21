import React from 'react'
import { useCart } from "../Context/CartContext"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next'

const Panier = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()
  const { t } = useTranslation()

  const handleWhatsAppOrder = () => {
    const numero = "237688064498"
    let message = "Bonjour, je souhaite passer une commande :\n\n"
    cart.forEach(item => {
      message += `• ${item.nom} x${item.quantity} — ${(item.prix * item.quantity).toLocaleString()} FCFA\n`
    })
    message += `\n*Total : ${totalPrice.toLocaleString()} FCFA*`
    message += "\n\nMerci de confirmer ma commande."
    const url = `https://wa.me/${numero}?text=${encodeURIComponent(message)}`
    window.open(url, "_blank")
  }

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center justify-center px-4">
        <p className="text-xl sm:text-2xl font-bold text-neutral-900 dark:text-white mb-4 text-center">{t('panier_vide')}</p>
        <Link to="/" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
          {t('continuer')}
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-3 sm:px-6 py-12">
      <section className="mt-20 mb-8">
        <h1 className="text-2xl sm:text-4xl font-bold text-neutral-900 dark:text-white">{t('panier_titre')}</h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">{cart.length} {t('articles')}</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Liste articles */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex gap-2 sm:gap-4 bg-white dark:bg-neutral-800 rounded-xl p-3 sm:p-4 shadow">
              <img
                src={item.image_url}
                alt={item.nom}
                className="w-16 h-16 sm:w-24 sm:h-24 object-cover rounded-lg flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <h3 className="font-semibold text-neutral-900 dark:text-white text-sm sm:text-base truncate">{item.nom}</h3>
                <p className="text-primary font-bold mt-1 text-sm">{item.prix.toLocaleString()} FCFA</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 font-bold text-neutral-900 dark:text-white text-sm"
                  >-</button>
                  <span className="text-neutral-900 dark:text-white font-semibold text-sm">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 font-bold text-neutral-900 dark:text-white text-sm"
                  >+</button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between flex-shrink-0">
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-700 text-xs sm:text-sm">
                  {t('supprimer')}
                </button>
                <p className="font-bold text-neutral-900 dark:text-white text-sm">
                  {(item.prix * item.quantity).toLocaleString()} FCFA
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Résumé */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-4 sm:p-6 shadow h-fit">
          <h2 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white mb-4">Résumé</h2>
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300 mb-2 text-sm sm:text-base">
            <span>{t('sous_total')}</span>
            <span>{totalPrice.toLocaleString()} FCFA</span>
          </div>
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300 mb-4 text-sm sm:text-base">
            <span>{t('livraison')}</span>
            <span>{t('a_calculer')}</span>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 flex justify-between font-bold text-neutral-900 dark:text-white text-base sm:text-lg">
            <span>{t('total')}</span>
            <span>{totalPrice.toLocaleString()} FCFA</span>
          </div>
          <button
            onClick={handleWhatsAppOrder}
            className="w-full mt-6 bg-green-500 text-white py-3 rounded-xl font-semibold hover:bg-green-600 flex items-center justify-center gap-2 text-sm sm:text-base"
          >
            <span>🛒</span> Commander via WhatsApp
          </button>
          <button
            onClick={clearCart}
            className="w-full mt-3 border border-red-500 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-50 text-sm sm:text-base"
          >
            {t('vider_panier')}
          </button>
        </div>
      </div>
    </div>
  )
}

export default Panier