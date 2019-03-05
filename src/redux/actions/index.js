export const selectUser = (user) => {
    console.log("You clicked on button: ", user);
    return {
        type: 'USER_SELECTED',
        payload: user
    }
};
