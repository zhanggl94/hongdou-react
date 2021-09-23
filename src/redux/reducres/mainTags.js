import { ADD_MAINTAG, REMOVE_MAINTAG } from '../actionTypes'

const initState = []
const mainTags = (state = initState, action) => {
    switch (action.type) {
        case ADD_MAINTAG:
            return [...state, action.data];
        case REMOVE_MAINTAG:
            return state.reduce((pre, curr) => {
                if (curr.path !== action.data.path) {
                    pre.push(curr);
                }
                return pre
            }, [])
        default:
            return state;
    }
}
export default mainTags;