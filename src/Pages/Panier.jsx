import React from 'react'
import { useCart } from "../Context/CartContext"
import { Link } from "react-router-dom"

const Panier = () => {
  const { cart, removeFromCart, updateQuantity, totalPrice, clearCart } = useCart()

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 flex flex-col items-center justify-center">
        <p className="text-2xl font-bold text-neutral-900 dark:text-white mb-4">Votre panier est vide</p>
        <Link to="/" className="bg-primary text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90">
          Continuer mes achats
        </Link>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-6 py-12">
      <section className="mt-20 mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">Mon Panier</h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">{cart.length} article(s)</p>
      </section>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Liste articles */}
        <div className="lg:col-span-2 space-y-4">
          {cart.map(item => (
            <div key={item.id} className="flex gap-4 bg-white dark:bg-neutral-800 rounded-xl p-4 shadow">
              <img
                src={item.image_url}
                alt={item.nom}
                className="w-24 h-24 object-cover rounded-lg"
              />
              <div className="flex-1">
                <h3 className="font-semibold text-neutral-900 dark:text-white">{item.nom}</h3>
                <p className="text-primary font-bold mt-1">{item.prix.toLocaleString()} FCFA</p>
                <div className="flex items-center gap-3 mt-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 font-bold text-neutral-900 dark:text-white"
                  >
                    -
                  </button>
                  <span className="text-neutral-900 dark:text-white font-semibold">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="w-8 h-8 rounded-full bg-neutral-200 dark:bg-neutral-700 font-bold text-neutral-900 dark:text-white"
                  >
                    +
                  </button>
                </div>
              </div>
              <div className="flex flex-col items-end justify-between">
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 hover:text-red-700 text-sm"
                >
                  Supprimer
                </button>
                <p className="font-bold text-neutral-900 dark:text-white">
                  {(item.prix * item.quantity).toLocaleString()} FCFA
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Résumé commande */}
        <div className="bg-white dark:bg-neutral-800 rounded-xl p-6 shadow h-fit">
          <h2 className="text-xl font-bold text-neutral-900 dark:text-white mb-4">Résumé</h2>
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300 mb-2">
            <span>Sous-total</span>
            <span>{totalPrice.toLocaleString()} FCFA</span>
          </div>
          <div className="flex justify-between text-neutral-600 dark:text-neutral-300 mb-4">
            <span>Livraison</span>
            <span>À calculer</span>
          </div>
          <div className="border-t border-neutral-200 dark:border-neutral-700 pt-4 flex justify-between font-bold text-neutral-900 dark:text-white text-lg">
            <span>Total</span>
            <span>{totalPrice.toLocaleString()} FCFA</span>
          </div>
          <button className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90">
            Passer la commande
          </button>
          <button
            onClick={clearCart}
            className="w-full mt-3 border border-red-500 text-red-500 py-3 rounded-xl font-semibold hover:bg-red-50"
          >
            Vider le panier
          </button>
        </div>
      </div>
    </div>
  )
}

export default Panier