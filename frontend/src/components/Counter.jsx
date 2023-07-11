import React from "react";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { alterVal } from "../redux/slices/countSlice";

const Counter = () => {

    const items = useSelector(state => state);
    console.log("Item received: ", items);
    const dispatch = useDispatch();

    return(
        <div>
            <button onClick={() => dispatch(alterVal({type: "INCREMENT"}))}>INCREMENT</button>
            <h2>{items.counter}</h2>
            <button onClick={() => dispatch(alterVal({type: "DECREMENT"}))}>DECREMENT</button>
        </div>
    );
}

export default Counter;