const initialStateRobots={
    searchfield: '',   
}

export const robotReducer = (state=initialStateRobots, action={}) => {
    switch (action.type){
        case "Fetch_Robots":
        return Object.assign({},state,{searchfield:action.payload});
        default:
        return state
    }
}