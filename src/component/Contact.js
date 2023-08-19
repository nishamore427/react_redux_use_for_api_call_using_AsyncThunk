import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import {increase, decrease} from '../store/contact.slice'
const Contact =()=>{

    const counter = useSelector((state)=>{
        // console.log(state);
        // return 0;
        console.log(state)
        console.log(state.contactDetails.contactNumber)
        return state.contactDetails.contactNumber;
    })
    const dispatch = useDispatch()
    return(<>
    <h1>Contact</h1>
    <button onClick={()=>{dispatch(increase())}}>+</button>
    <div>{counter}</div>
    <button onClick={()=>{dispatch(decrease())}}>-</button>
    </>)
}
export default Contact;