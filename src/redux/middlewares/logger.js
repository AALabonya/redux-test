const logger = (store)=>(next)=>(action)=>{
    const currentState= store.getState();
    console.log("currentState=>",currentState);
    console.log("action dispatcch=>",action);

    next(action)
console.log("update=>",store.getState());
}

export default logger