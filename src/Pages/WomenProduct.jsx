import React, { useState } from 'react'
import ProductCard from "../components/ProductCard"
import ProductDrawer from "../components/ProductDrawer"
import { useProducts } from "../hooks/UseProducts"

const WomenProducts = () => {
  const { products, loading } = useProducts("femmes")
  const [selectedProduct, setSelectedProduct] = useState(null)

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-6 py-12">
      <section className="mt-20 mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          Vêtements pour Femmes
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          Des produits de qualité sélectionnés avec soin.
        </p>
      </section>

      {loading ? (
        <p className="text-neutral-500">Chargement...</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onOpen={() => setSelectedProduct(product)}
            />
          ))}
        </div>
      )}

      <ProductDrawer
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
      />
    </div>
  )
}

export default WomenProducts