export * from './is';
export * from './looseEqual';
export * from './cloneDeep';
export * from './debounce-throttle';

/**
 * Perform no operation.
 */
export const noop = () => {};

/**
 * Always return false.
 */
export const no = () => false;

/**
 * Return same value.
 */
export const identity = (value: any) => value;

const hasOwnProperty = Object.prototype.hasOwnProperty;
export const hasOwn = (val: Object, key: string) => hasOwnProperty.call(val, key);
