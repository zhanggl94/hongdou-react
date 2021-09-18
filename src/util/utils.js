// 设置 LocalStorage
export const setLocalStorageItem = (k, v) => localStorage.setItem(k, v);

// 批量设置localStorage
export const setLocalStorageItems = obj => {
  if (obj) {
    for (const item in obj) {
      localStorage.setItem(item, obj[item])
    }
  }
}

// 获取 LocalStorage
export const getLocalStorageItem = (k) => localStorage.getItem(k);

// 删除 LocalStorage
export const removeLocalStorageItem = (k) => localStorage.removeItem(k);

// 批量删除 LocalStorage
export const removeLocalStorageItems = (keyList) => {
  if (keyList.length) {
    for (const k of keyList) {
      localStorage.removeItem(k);
    }
  }
}