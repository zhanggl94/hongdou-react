import Cookies from 'universal-cookie'
const jwtToken = 'jwtToken'

const cookies = new Cookies();

// 设置JWT Token
export const setJWTToken = value => cookies.set(jwtToken, value)

// 获取JWT Token
export const getJWTToken = value => cookies.get(jwtToken)

// 删除JWT Token
export const removeJWTToken = () => cookies.remove(jwtToken)