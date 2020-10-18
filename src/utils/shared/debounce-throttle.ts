/**
 * 函数防抖
 * @param {Function} fn
 * @param {number} [wait=300]
 * @param {boolean} [immediate=false]
 */
export function debounce(fn: Function, wait: number = 300, immediate: boolean = false) {
  let timer: NodeJS.Timeout | null = null;

  return function (...args: any[]) {
    if (timer) clearTimeout(timer);

    if (immediate) {
      const callnow = !timer;

      timer = setTimeout(() => {
        timer = null;
      }, wait);

      if (callnow) fn(args);
    } else {
      timer = setTimeout(() => {
        fn(args);
      }, wait);
    }
  };
}

/**
 * 函数节流
 * @param {Function} fn
 * @param {number} [wait=300]
 */
export function throttle(fn: Function, wait: number = 300) {
  let timer: NodeJS.Timeout | null = null;

  return function (...args: any[]) {
    if (!timer) {
      timer = setTimeout(() => {
        timer = null;
        fn(args);
      }, wait);
    }
  };
}
