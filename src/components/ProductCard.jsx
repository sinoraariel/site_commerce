import React from 'react'

const ProductCard = ({ product, onOpen }) => {
  return (
    <div data-aos="fade-up" className="hover:bg-accent-500 relative bg-white dark:bg-neutral-800 rounded-xl shadow hover:shadow-lg transition">
      <img
        src={product.image_url}
        alt={product.nom}
        className="w-full h-48  sm:h-44 md:h-52 lg:h-94 object-cover rounded-t-xl"
      />
      <button
        onClick={onOpen}
        className="absolute bottom-8 right-3 w-9 h-9 rounded-full bg-primary text-white text-xl font-bold flex items-center justify-center"
      >
        +
      </button>
      <div className="p-4">
        <h3 className="font-semibold text-neutral-900 dark:text-white">
          {product.nom}
        </h3>
        <p className="text-primary font-bold mt-1">
          {product.prix.toLocaleString()} FCFA
        </p>
      </div>
    </div>
  );
}

export default ProductCard;