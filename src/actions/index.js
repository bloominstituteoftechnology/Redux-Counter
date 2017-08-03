export const ADD_COMMENT = 'ADD_COMMENT';

export const addComment = (commentData) => {
    return {
        type: ADD_COMMENT,
        payload: commentData
    };
};