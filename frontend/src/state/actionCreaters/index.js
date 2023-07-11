export const threat = (amount)=>{
    return (dispatch)=>{
        dispatch({
            type:"threat",
            payload : amount
        })
    }
}

// export const alertCloseBtn = (amount)=>{
//     return (dispatch)=>{
//         dispatch({
//             type:"alertCloseBtn",
//             payload : amount
//         })
//     }
// }
