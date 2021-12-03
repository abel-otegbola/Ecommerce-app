export const userReducer = (state={ user: null}, action) => {
    if(action.type === 'userLoggedIn') {
           return state = {
                user: action.payload.user, 
            }
    }
    else if(action.type === "userLoggedOut")
        return state = {
            user: null
        }
    else {
        return state
    }
}

export const profileReducer = (state={ firstname: null, lastname: null, email: null, orders: null, messages: null, chats: null }, action) => {
    if(action.type === 'profileLoggedIn') {
           return state = {
                id: action.payload.id,
                firstname: action.payload.firstname, 
                lastname: action.payload.lastname, 
                email: action.payload.email, 
                orders: action.payload.orders,
                messages: action.payload.messages,
                chats: action.payload.chats
            }
    }
    else if(action.type === "profileLoggedOut")
        return state = {
            id: null,
            firstname: null, 
            lastname: null, 
            email: null, 
            orders: null,
            messages: null,
            chats: null
        }
    else {
        return state
    }
}


export const productsReducer = (state=[], action) => {
    if(action.type === 'itemAddedToProducts') {
        let newState = [
            ...state
            ]
            newState.push({
                id: action.payload.id,                
                title: action.payload.title,
                price: action.payload.price,
                img: action.payload.img,
                description: action.payload.description,
                star: action.payload.star         
            })
            return newState
    }
    else if(action.type === 'itemRemovedFromProducts') {
        if (action.payload.id === "all") {
            return state = []
        }
        else {
            let removed = state.filter(item => item.products.id !== action.payload.id)
            return removed
        }
    }
    else {
        return state
    }
}

export const categoriesReducer = (state=[], action) => {
    if(action.type === 'itemAddedToCategories') {
        return ([
            ...state,
            state.push({
                    id: action.payload.id,                
                    title: action.payload.title,
                    img: action.payload.img,
                    description: action.payload.description
                })
        ])
    }
    else if(action.type === 'itemRemovedFromCategories') {
        let removed = state.filter(item => item.categories.id !== action.payload.id)
        return removed
    }
    else {
        return state
    }

}

export const cartsReducer = (state=[], action) => {
    if(action.type === 'itemAddedToCart') {
        let newState = [
        ...state
        ]
        newState.push({
                id: action.payload.id,                
                title: action.payload.title,
                price: action.payload.price,
                img: action.payload.img,
                amount: action.payload.amount            
            })
        return newState
    }
    else if(action.type === 'itemRemovedFromCart') {
     state = state.filter(item => item.id !== action.payload.id)
       return state
    }
    else if(action.type === 'incrementCart') {
        const added = state.map(item => (item.id !== action.payload.id) ? item : {...item, amount: item.amount+1})
        return added
    }
    else if(action.type === 'decrementCart') {
        const removed = state.map(item => (item.id !== action.payload.id) ?  item : {...item, amount: (item.amount < 2) ? 1 : item.amount-1})
        return removed
    }
    else {
        return state
    }

}

export const wishlistsReducer = (state=[], action) => {
    if(action.type === 'addToWishlist') {
        console.log(state)
        let newState = [
            ...state
        ]
        newState.push({
                id: action.payload.id,                
                title: action.payload.title,
                price: action.payload.price,
                img: action.payload.img,
                amount: action.payload.amount            
            })
        return newState
    }
    else if(action.type === 'removeFromWishlist') {
        state = state.filter(item => item.id !== action.payload.id)
        return state
    }
    else {
        return state;
    }
}