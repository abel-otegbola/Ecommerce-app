import { store } from './store'

export const userlogin = (user) => { 
    return {
         type: "userLoggedIn",
         payload: {
             user
         }
     }
 }

export const userlogout = () => { 
    return {
            type: "userLoggedOut"
        }
}

export const profilelogin = (id, firstname, lastname, email, orders, messages, chats) => { 
    return {
            type: "profileLoggedIn",
            payload: {
                id,
                firstname,
                lastname, 
                email, 
                orders, 
                messages, 
                chats
            }
    }
}

export const profilelogout = () => { 
    return {
            type: "profileLoggedOut"
    }
}

export const addToProducts = (id, title, price,img,description, star) => { 
    console.log(store.getState())
   return {
        type: "itemAddedToProducts",
        payload: {
            id,               
            title,
            price,
            img,
            description,
            star
        }
    }
}

export const RemoveProduct = (id) => {
    return {
        type: "itemRemovedFromProducts",
        payload: {
            id
        }
    }
}

export const AddToCart = (id, title, price, img, amount) => {
    return {
        type: "itemAddedToCart",
        payload: {
            id,               
            title,
            price,
            img,
            amount
        }
    }
}

export const RemoveFromCart = (id) => {
    return {
        type: "itemRemovedFromCart",
        payload: {
            id
        }
    }
}

export const increCart = (id) => {
    return {
        type: "incrementCart",
        payload: {
            id
        }
    }
}

export const decreCart = (id) => {
    return {
        type: "decrementCart",
        payload: {
            id
        }
    }
}


export const AddToWishlist = (id, title, price, img, amount) => {
    return {
        type: "addToWishlist",
        payload: {
            id,               
            title,
            price,
            img,
            amount
        }
    }
}

export const RemoveFromWishlist = (id) => {
    return {
        type: "removeFromWishlist",
        payload: {
            id
        }
    }
}



export const getCart = () => {
    return store.getState().cartsReducer
}
export const getUser = () => {
    return store.getState().userReducer
}
export const getProfile = () => {
    return store.getState().profileReducer
}
export const getWishlist = () => {
    return store.getState().wishlistsReducer
}
export const getProducts = () => {
    return store.getState().productsReducer
}