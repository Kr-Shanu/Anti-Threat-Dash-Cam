const reducer = (state=0,action)=>{
    if(action.type==='threat'){
        return action.payload;
    
    }
    else return state;
}

export default reducer;