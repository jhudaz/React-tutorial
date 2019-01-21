export default function (state = [], action) {
    switch (action.type) {
        case "ADD_COMMENT":
            if(state.length === 0){
                state.push({id:1, comment:'hola'});
            }else{
                state.push({ id: state[state.length - 1].id + 1, comment: 'hola' });
            }
            return state.slice(0);

        case "SAVE_COMMENT":
            console.log('2', state);
            console.log('3', action);
            state.forEach(h => {
                if (h.id === action.payload.id) {
                    h.comment = action.payload.comment;
                }
            });
            return state.slice(0);
        default:
            return state;
    }
}