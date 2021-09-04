export const Increment=(value)=>async dispatch=>{
    dispatch({
        type:"INCREMENT",
        payload:value
    })

}
export const Decrement=(valu)=>async dispatch=>{
    dispatch({
        type:"DECREMENT",
        payload:valu
    })

}
