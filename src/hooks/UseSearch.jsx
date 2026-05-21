import { useState } from "react"
import { supabase } from "../hooks/SupabaseClient.js"

export const useSearch = () => {
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  const search = async (term) => {
    if (!term || term.trim() === "") {
      setResults([])
      return
    }

    setLoading(true)
    const { data, error } = await supabase
      .from("produits")
      .select("*")
      .ilike("nom", `%${term}%`)

    if (error) console.error(error)
    else setResults(data)
    setLoading(false)
  }

  const clearResults = () => setResults([])

  return { results, loading, search, clearResults }
}