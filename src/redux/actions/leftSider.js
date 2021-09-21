import { TOGGLE_COLLAPSE } from '../actionTypes'

// 切换左侧菜单折叠状态
export const toggleCollapse = () => {
  return {
    type: TOGGLE_COLLAPSE
  }
}