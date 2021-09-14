import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import allReducres from './reducres'
// 设置中间件
const enhancer = composeWithDevTools(
    applyMiddleware(thunk)
);

export default createStore(allReducres, enhancer)