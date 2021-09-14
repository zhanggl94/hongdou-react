import { USER_SIGNIN, USER_SIGNUP } from '../actionTypes'

export const userSignin = (data) => {
    return {
        type: USER_SIGNIN,
        data,
    }
}

export const userSignUp = (data) => ({ type: USER_SIGNUP, data })