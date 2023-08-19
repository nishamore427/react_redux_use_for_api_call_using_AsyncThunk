import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts } from "../store/post.slice";

export default function PostsListing(){
    const dispatch = useDispatch();
    const posts = useSelector((state)=>{
        console.log(state)
        return state.posts;
    })
    useEffect(()=>{
        dispatch(fetchPosts());
    },[]);

    console.log(posts)

    return(
        <ul>
        {posts && posts.data && posts.data.length > 0 && posts.data.map((post)=>{return<li>
            {post.title}
        </li>})}
            <li></li>
        </ul>
    )

}