// 设置 LocalStorage
export const setLocalStorageItem = (k,v) => localStorage.setItem(k, v);

// 获取 LocalStorage
export const getLocalStorageItem = (k) => localStorage.getItem(k);

// 删除 LocalStorage
export const removeLocalStorageItem = (k) => localStorage.removeItem(k);