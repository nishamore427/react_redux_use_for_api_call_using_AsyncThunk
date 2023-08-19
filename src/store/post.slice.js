import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from 'axios'

export const fetchPosts =  createAsyncThunk("posts/fetch",async()=>{
    const response = await axios.get("https://jsonplaceholder.typicode.com/posts");
    return response.data;
});
export const PostsSlice = createSlice({
    name:"posts",
    initialState:{
        data:null,
        loading:false,
        error:null
    },
    reducers:{},
    extraReducers:(builder)=>{
        
        builder
        
        .addCase(fetchPosts.pending,(state)=>{
            state.loading = true;
        })
        .addCase(fetchPosts.fulfilled,(state,action)=>{
            state.loading = false;
            state.data = action.payload
        })
        .addCase(fetchPosts.rejected,(state,action)=>{
            state.loading = false;
            state.error = action.error.message;
        });
    }
})

export default PostsSlice.reducer;