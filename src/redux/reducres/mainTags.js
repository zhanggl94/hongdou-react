import { ADD_MAINTAG, REMOVE_MAINTAG } from '../actionTypes'

const initState = []
const mainTags = (state = initState, action) => {
    switch (action.type) {
        case ADD_MAINTAG:
            return initState;
        case REMOVE_MAINTAG:
            return initState;
        default:
            return state;
    }
}
export default mainTags;