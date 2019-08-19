import React,{useReducer} from 'react'

export default function Reducer() {

    const initalState={
        count:1
    }

    function countReducer(state, action) {
        switch (action.type) {
            case 'add':
                 return{
                     ...state,
                    count:state.count+1,
                 } 
            case '-':
                return{
                    ...state,
                    count:state.count-1,
                }
            default : 
                return state
                
        }
    }

    const[state, dispatch]=useReducer(countReducer, initalState);

    const{count}=state;
    

    return (
        <div>
            {count}
            <button onClick={()=>dispatch({type:'add'})}>Incremet</button>
            <button onClick={()=>dispatch({type:'-'})}>Decrement</button>
        </div>
    )
}
