export default (current, action) => {
    switch (action.type) {
        case 'login':
            return action.payload;
        case 'logout':
            return null;
        default:
            return current;
    }
};
