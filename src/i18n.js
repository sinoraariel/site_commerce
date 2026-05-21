import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'
import LanguageDetector from 'i18next-browser-languagedetector'

const resources = {
  fr: {
    translation: {
      // Navbar
      accueil: "Accueil",
      panier: "Mon Panier",
      contact: "Contact",
      categories: "Categories",
      search: "Rechercher...",

      // Pages catégories
      hommes_titre: "Vêtements pour Hommes",
      femmes_titre: "Vêtements pour Femmes",
      perruques_titre: "Perruques",
      bijoux_titre: "Bijoux & Montres",
      qualite: "Des produits de qualité sélectionnés avec soin.",
      chargement: "Chargement...",

      // Drawer
      ajouter_panier: "Ajouter au panier",
      ajoute: "Ajouté !",
      confirme: "✅ Article ajouté au panier !",

      // Panier
      panier_titre: "Mon Panier",
      panier_vide: "Votre panier est vide",
      continuer: "Continuer mes achats",
      articles: "article(s)",
      sous_total: "Sous-total",
      livraison: "Livraison",
      a_calculer: "À calculer",
      total: "Total",
      passer_commande: "Passer la commande",
      vider_panier: "Vider le panier",
      supprimer: "Supprimer",

      // Footer
      description_shop: "La meilleure entreprise de vente de vêtement pour vous satisfaire quand vous voulez.",
      liens_importants: "Liens Importants",
      liens_utiles: "Liens Utiles",
      envoyer_mail: "Envoyer un mail",
      droits: "© EldoraShop. Tous droits réservés.",
      politique: "Politique de confidentialité",
      conditions: "Conditions d'utilisation",
      mentions: "Mentions légales",

      // Search
      resultats: "Résultats pour",
      recherche_cours: "Recherche en cours...",
      trouve: "article(s) trouvé(s)",
      aucun_resultat: "Aucun article ne correspond à votre recherche.",
    }
  },
  en: {
    translation: {
      // Navbar
      accueil: "Home",
      panier: "My Cart",
      contact: "Contact",
      categories: "Categories",
      search: "Search...",

      // Pages catégories
      hommes_titre: "Men's Clothing",
      femmes_titre: "Women's Clothing",
      perruques_titre: "Wigs",
      bijoux_titre: "Jewelry & Watches",
      qualite: "Quality products carefully selected.",
      chargement: "Loading...",

      // Drawer
      ajouter_panier: "Add to cart",
      ajoute: "Added!",
      confirme: "✅ Item added to cart!",

      // Panier
      panier_titre: "My Cart",
      panier_vide: "Your cart is empty",
      continuer: "Continue shopping",
      articles: "item(s)",
      sous_total: "Subtotal",
      livraison: "Shipping",
      a_calculer: "To be calculated",
      total: "Total",
      passer_commande: "Place order",
      vider_panier: "Empty cart",
      supprimer: "Remove",

      // Footer
      description_shop: "The best clothing store to satisfy you whenever and wherever you want.",
      liens_importants: "Important Links",
      liens_utiles: "Useful Links",
      envoyer_mail: "Send an email",
      droits: "© EldoraShop. All rights reserved.",
      politique: "Privacy Policy",
      conditions: "Terms of Use",
      mentions: "Legal Notice",

      // Search
      resultats: "Results for",
      recherche_cours: "Searching...",
      trouve: "item(s) found",
      aucun_resultat: "No items match your search.",
    }
  }
}

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'fr',
    interpolation: { escapeValue: false }
  })

export default i18n