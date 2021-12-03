import { createStore, applyMiddleware, combineReducers } from 'redux';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import thunk from 'redux-thunk';
import { userReducer, profileReducer, productsReducer, categoriesReducer, cartsReducer, wishlistsReducer } from './reducer'

const persistConfig = {
    key: 'root',
    storage
}

const reducer = combineReducers({
        userReducer,
        profileReducer,
        productsReducer,
        cartsReducer,
        categoriesReducer,
        wishlistsReducer
})

const persistedReducer = persistReducer(persistConfig, reducer)


    let store = createStore(persistedReducer, applyMiddleware(thunk))
    let persistor = persistStore(store)
export { store , persistor }