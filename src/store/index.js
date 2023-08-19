import {configureStore} from "@reduxjs/toolkit"
import ContactReducer from "./contact.slice"
import PostReducer from '../store/post.slice';

export const store = configureStore({
    reducer:{
        contactDetails: ContactReducer,
        posts:PostReducer
    }
})