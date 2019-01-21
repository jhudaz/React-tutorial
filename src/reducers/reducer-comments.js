export default function(state = [], action){
    switch(action.type){
        case "ADD_COMMENT":
            state.push({id: 5,comment: ''});
            //console.log(state);    
            return state;
        case "SAVE_COMMENT":
            state.forEach(h => {
                if(h.id === action.payload.id){
                    h.comment = action.payload.comment;
                }
            });
            return state;
        default:
            return state;
    }
}