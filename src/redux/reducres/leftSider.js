import { TOGGLE_COLLAPSE } from "../actionTypes";

const initState = {
  collapse: false
}


const leftSide = (state = initState, action) => {
  switch (action.type) {
    case TOGGLE_COLLAPSE: // 切换左侧菜单折叠状态
      return { ...initState, collapse: !initState.collapse }
    default:
      return state;
  }
}
export default leftSide;