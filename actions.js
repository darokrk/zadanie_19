import uuid from uuid;

export const ADD_COMMENT = 'ADD_COMMENT';
export const REMOVE_COMMENT = 'REMOVE_COMMENT';
export const EDIT_COMMENT = 'EDIT_COMMENT';
export const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
export const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

export const boundAddComment = text => dispatch(addComment(text));
export const boundEditComment = (text, id) => dispatch(editComment(text, id));
export const boundRemoveComment = id => dispatch(removeComment(id));
export const boundThumbUpComment = id => dispatch(thumbUpComment(id));
export const boundThumbDownComment = id => dispatch(thumbDownComment(id));

function addComment(text) {
    return {
        type: ADD_COMMENT,
        text: text,
        id: uuid.v4()
    }
}
function editComment(text, id) {
    return {
        type: EDIT_COMMENT,
        text: text,
        id: id
    }
}
function removeComment(id) {
    return {
        type: REMOVE_COMMENT,
        id: id
    }
}
function thumbUpComment(id) {
    return {
        type: THUMB_UP_COMMENT,
        id: id
    }
}
function thumbDownComment(id) {
    return {
        type: THUMB_DOWN_COMMENT,
        id: id
    }
}