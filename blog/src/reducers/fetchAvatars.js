export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_AVATARS':
            return action.payload;
        default:
            return state;
    }
}