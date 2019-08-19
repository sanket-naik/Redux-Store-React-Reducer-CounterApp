export const increment=(val)=>{
    return{
        type: '+',
        payload: val
    }
}

export const decrement=()=>{
    return{
        type:'-'
    }
}