import { useEffect, useState } from "react"
import  { supabase } from './SupabaseClient.js'

export const useProducts = (categorie) => {
  const [products, setProducts] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchProducts = async () => {
      const { data, error } = await supabase
        .from("produits")
        .select("*")
        .eq("categorie", categorie)

      if (error) console.error(error)
      else setProducts(data)
      setLoading(false)
    }

    fetchProducts()
  }, [categorie])

  return { products, loading }
}