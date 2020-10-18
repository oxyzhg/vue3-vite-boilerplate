export const LOADING = 'LOADING';
export const SUCCESS = 'SUCCESS';
export const FAIL = 'FAIL';

export const checkLoading = (status: string) => status === LOADING;
export const checkSuccess = (status: string) => status === SUCCESS;
