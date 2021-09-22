import { ADD_MAINTAG, REMOVE_MAINTAG } from '../actionTypes'

// 添加tag
export const addMainTag = (data) => ({ type: ADD_MAINTAG, data })

// 移除tag
export const removeMainTag = (data) => ({ type: REMOVE_MAINTAG, data })
