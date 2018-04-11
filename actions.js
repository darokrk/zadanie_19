import uuid from uuid;

const ADD_COMMENT = 'ADD_COMMENT';
const REMOVE_COMMENT = 'REMOVE_COMMENT';
const EDIT_COMMENT = 'EDIT_COMMENT';
const THUMB_UP_COMMENT = 'THUMB_UP_COMMENT';
const THUMB_DOWN_COMMENT = 'THUMB_DOWN_COMMENT';

const boundAddComment = text => dispatch(addComment(text));
const boundEditComment = (text, id) => dispatch(editComment(text, id));
const boundRemoveComment = id => dispatch(removeComment(id));
const boundThumbUpComment = id => dispatch(thumbUpComment(id));
const boundThumbDownComment = id => dispatch(thumbDownComment(id));

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