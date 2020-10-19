import { noop } from '../utils/shared';

interface WebSocketHandler {
  onopen?: ((this: WebSocket, ev: Event) => any) | null;
  onclose?: ((this: WebSocket, ev: CloseEvent) => any) | null;
  onerror?: ((this: WebSocket, ev: Event) => any) | null;
  onmessage?: ((this: WebSocket, ev: MessageEvent<any>) => any) | null;
}

export function useWebSocket(url: string, listeners: WebSocketHandler) {
  let instance: WebSocket | null = null;
  let lockReconnect: boolean = false;
  let timer: NodeJS.Timeout;

  // 创建实例
  createSocket();

  // 创建心跳实例
  const heartCheck = createHeartCheck();

  // create
  function createSocket() {
    const { onopen = null, onclose = null, onerror = null, onmessage = null } = listeners;

    try {
      instance = new WebSocket(url);
      instance.onopen = onopen;
      instance.onclose = onclose;
      instance.onerror = onerror;
      instance.onmessage = onmessage;
    } catch (err) {
      console.log(`create error`);
      reconnectSocket();
    }
  }

  // reconnect
  function reconnectSocket() {
    if (lockReconnect) return;

    lockReconnect = true;

    timer && clearTimeout(timer);
    timer = setTimeout(() => {
      createSocket();
      lockReconnect = false;
    }, 4000);
  }

  return { instance, reconnect: reconnectSocket, heartCheck };
}

function createHeartCheck() {
  const timeout = 50000;
  let timeoutObj: NodeJS.Timeout;
  let serverTimeoutObj: NodeJS.Timeout;

  return function (handler: Function = noop) {
    timeoutObj && clearTimeout(timeoutObj);
    serverTimeoutObj && clearTimeout(serverTimeoutObj);
    timeoutObj = setInterval(handler, timeout);
  };
}
