import React, { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom'
import { useSearch } from '../hooks/useSearch'
import ProductCard from '../components/ProductCard'
import ProductDrawer from '../components/ProductDrawer'
import { useTranslation } from 'react-i18next'

const Search = () => {
  const location = useLocation()
  const query = new URLSearchParams(location.search).get("q") || ""
  const { results, loading, search } = useSearch()
  const [selectedProduct, setSelectedProduct] = useState(null)
  const { t } = useTranslation()

  useEffect(() => {
    search(query)
  }, [query])

  return (
    <div className="min-h-screen bg-neutral-50 dark:bg-neutral-900 px-6 py-12">
      <section className="mt-20 mb-12">
        <h1 className="text-4xl font-bold text-neutral-900 dark:text-white">
          {t('resultats')} "{query}"
        </h1>
        <p className="text-neutral-600 dark:text-neutral-300 mt-2">
          {loading ? t('recherche_cours') : `${results.length} ${t('trouve')}`}
        </p>
      </section>

      {loading ? (
        <p className="text-neutral-500">{t('chargement')}</p>
      ) : results.length === 0 ? (
        <p className="text-neutral-500 text-lg">{t('aucun_resultat')}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-6">
          {results.map(product => (
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

export default Search