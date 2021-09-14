import { USER_SIGNIN } from "../actionTypes";

const initState = { id: '', token: '' };

const userSign = (state = initState, action) => {
    switch (action.type) {
        case USER_SIGNIN:
            return action.data;
        default:
            return state;
    }
}

export default userSign