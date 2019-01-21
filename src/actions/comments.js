export function saveComment(id,comment){

    return {
        type: "SAVE_COMMENT",
        payload: {id,comment}
    }
}

export function addComment(){
    return {
        type: "ADD_COMMENT",
    }
}