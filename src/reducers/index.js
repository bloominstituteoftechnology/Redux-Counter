import { ADD_COMMENT } from '../actions';

const reducer = (state = [], action) => {
    switch (action.type) {
        case ADD_COMMENT:
            const postIndex = action.payload.postIndex;
            const post = state[postIndex];
            post.comments = [
                ...post.comments,
                action.payload.body
            ];
            return state;
        default:
            return state;
    }
}

export default reducer;