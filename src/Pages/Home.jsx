import React from 'react'
import Hero from './Hero'
import Produits from './Produits';
import TopProduits from './TopProduits';
import Souscrire from './souscrire';
import TopProducts from './TopProducts';
import Temoignage from './Temoignage';
// import { useContext } from "react";
// import { SearchContext } from "../Context/SearchContext";
// import { highlightText } from "../utils/HighlightText";
// const { searchTerm } = useContext(SearchContext);

//   const description ="Bienvenue dans notre boutique de vêtements pour femme et homme.";

function Home ()  {
  return (
    <div>
      {/* {highlightText(description, searchTerm)} */}
      <Hero/>
      <Produits/>
      <TopProduits/>
      <Souscrire/>
      <TopProducts/>
      <Temoignage/>
      
    </div>
  )
}

export default Home
