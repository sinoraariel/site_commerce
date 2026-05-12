import { useCart } from "../Context/CartContext"
import React from "react"
const ProductDrawer = ({ product, onClose }) => {
  const { addToCart } = useCart()
  if (!product) return null

  const handleAddToCart = () => {
    addToCart(product)
    onClose()
  }

  return (
    <div className="fixed inset-0 z-50">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="absolute right-0 top-0 h-full w-full sm:w-[420px] bg-white dark:bg-neutral-900 shadow-xl p-6 overflow-y-auto">
        <button onClick={onClose} className="text-neutral-500 hover:text-neutral-900 dark:hover:text-white mb-4">
          ✕
        </button>
        <img src={product.image_url} alt={product.nom} className="w-full h-74 object-cover rounded-lg" />
        <h2 className="text-2xl font-bold mt-4 text-neutral-900 dark:text-white">{product.nom}</h2>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">{product.description}</p>
        <p className="text-xl font-bold text-primary mt-4">{product.prix.toLocaleString()} FCFA</p>
        <button
          onClick={handleAddToCart}
          className="w-full mt-6 bg-primary text-white py-3 rounded-xl font-semibold hover:opacity-90"
        >
          Ajouter au panier
        </button>
      </div>
    </div>
  )
}

export default ProductDrawer