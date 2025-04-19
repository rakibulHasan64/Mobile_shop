export const getFavorite = () => {
   const favorites = localStorage.getItem("favorite");
   if (favorites) return JSON.parse(favorites);
   return [];
}



export const getCart = () => {
   const carts = localStorage.getItem("cart");
   if (carts) return JSON.parse(carts);
   return [];
}



export const addToCart = (phone) => {
   const carts  = getCart();
   const exists = carts .find(p => p.id === phone.id);

   if (exists) {
      return alert("Phone is already added");
   }

   carts .push(phone);
   localStorage.setItem("cart", JSON.stringify(carts ));
}

export const addFavorite = (phone) => {
   const favorites = getFavorite();
   const exists = favorites.find(p => p.id === phone.id);

   if (exists) {
      return alert("Phone is already added");
   }

   favorites.push(phone);
   localStorage.setItem("favorite", JSON.stringify(favorites));
}



export const removeFavorite = (id) => {
   const favorites = getFavorite();
   const remainingFavorites = favorites.filter(phone => phone.id !== id);

   localStorage.setItem("favorite", JSON.stringify(remainingFavorites));
}


export const removeCart = (id) => {
   const carts = getCart();
   const remainingcart= carts .filter(phone => phone.id !== id);

   localStorage.setItem("cart", JSON.stringify(remainingcart));
}
