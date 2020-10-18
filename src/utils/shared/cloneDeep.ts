const arrayTag = '[object Array]';
const objectTag = '[object Object]';
const mapTag = '[object Map]';
const setTag = '[object Set]';
const argsTag = '[object Arguments]';

const boolTag = '[object Boolean]';
const stringTag = '[object String]';
const numberTag = '[object Number]';
const dateTag = '[object Date]';
const symbolTag = '[object Symbol]';
const regexpTag = '[object RegExp]';
const errorTag = '[object Error]';
const funcTag = '[object Function]';

const deepTags = [arrayTag, objectTag, mapTag, setTag, argsTag];

function isObject(target: any) {
  const type = typeof target;
  return target !== null && (type === 'object' || type === 'function');
}

function getType(target: any) {
  return Object.prototype.toString.call(target);
}

function getInit(target: any) {
  return new target.constructor();
}

function cloneOther(target: any, type: string) {
  const Ctor = target.constructor;

  switch (type) {
    case numberTag:
    case stringTag:
    case boolTag:
    case dateTag:
    case errorTag:
      return new Ctor(target.valueOf());
    case regexpTag:
      return cloneRegExp(target);
    case symbolTag:
      return cloneSymbol(target);
    case funcTag:
      return cloneFunction(target);
    default:
      return null;
  }
}

function cloneRegExp(target: any) {
  const reFlags = /\w*$/;
  const result = new target.constructor(target.source, reFlags.exec(target));
  return result;
}

function cloneSymbol(target: Symbol) {
  return Object(Symbol.prototype.valueOf.call(target));
}

function cloneFunction(target: Function) {}

export function cloneDeep(target: any, map: WeakMap<any, any> = new WeakMap()) {
  if (!isObject(target)) {
    return target;
  }

  const type = getType(target);
  let cloneTarget: any;

  if (deepTags.includes(type)) {
    cloneTarget = getInit(target);
  } else {
    return cloneOther(target, type);
  }

  if (map.has(target)) {
    return map.get(target);
  }

  map.set(target, cloneTarget);

  if (type === setTag) {
    target.forEach((value: any) => {
      cloneTarget.add(cloneDeep(value, map));
    });
    return cloneTarget;
  }

  if (type === mapTag) {
    target.forEach((value: any, key: any) => {
      cloneTarget.set(key, cloneDeep(value, map));
    });
    return cloneTarget;
  }

  for (let key in target) {
    if (target.hasOwnProperty(key)) {
      cloneTarget[key] = cloneDeep(target[key], map);
    }
  }

  return cloneTarget;
}
