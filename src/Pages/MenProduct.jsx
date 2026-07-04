import React, { useState } from 'react'
import ProductCard from "../components/ProductCard"
import ProductDrawer from "../components/ProductDrawer"
import { useProducts } from "../hooks/useProducts"
import { useTranslation } from 'react-i18next' // ← 1. Import ici

const MenProducts = () => {
  const { products, loading } = useProducts("hommes")
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { t } = useTranslation() // ← 2. Déclare t ici, à l'intérieur du composant

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-6 py-12">
      <section className="mt-20 mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          {t('Vêtements pour Hommes')}
           {/* // ← 3. Utilise t dans le JSX */}
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          {t(' Des produits de qualité sélectionnés avec soin.')}
        </p>
      </section>

      {loading ? (
        <p className="text-neutral-500">chargement</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
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

export default MenProducts