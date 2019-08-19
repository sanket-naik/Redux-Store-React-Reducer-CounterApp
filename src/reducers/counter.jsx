const counterReducer = (state=0, action)=>{
    switch(action.type){
        case '+':
            return state+action.payload;
        case '-':
                return state-1;
        default :
                return state;
    }
}

export default counterReducer;