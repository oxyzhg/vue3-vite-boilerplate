import { LOADING, SUCCESS, FAIL } from '../../store/status';
import { noop } from '../shared';

/**
 * 快速创建异步请求方法
 * @param {string} type 基本类型
 * @param {Function} api 请求方法
 */
export function createAction(type: string, api: Function) {
  return async (context: any, params: any) => {
    const { commit } = context;

    try {
      commit(type, { params });
      const res = await api(params);
      commit(`${type}_SUCCESS`, { res, params });
      return res;
    } catch (err) {
      commit(`${type}_FAILURE`, { params });
      throw err;
    }
  };
}

/**
 * 快速新增一组异步方法状态管理
 * @param {string} type 基本类型
 * @param {string} key 状态改变后要修改的属性名
 * @param {Function} callback 回调函数，用于其他逻辑
 */
export function createStatusReducer(type: string, key: string, callback: Function = noop) {
  return {
    [type](state) {
      state[key] = LOADING;
    },
    [`${type}_SUCCESS`](state) {
      state[key] = SUCCESS;
    },
    [`${type}_FAILURE`](state) {
      state[key] = FAIL;
    }
  };
}

/**
 * 快速新增一组 mutation 属性，包含3项
 * @param {string} type 基本类型
 */
export function createMutationType(type: string) {
  Object.assign(this, {
    [type]: null,
    [`${type}_SUCCESS`]: null,
    [`${type}_FAILURE`]: null
  });
}
