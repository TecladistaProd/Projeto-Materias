import React, {
  createContext,
  memo,
  useRef,
  useCallback,
  useContext,
  useMemo,
} from "react";

import {
  TDispatchEventDefault,
  IEventBus as IEB,
  TEvents,
} from "@/interfaces/eventBus";

const EventBusContext = createContext<IEB>({
  addEventListener: () => null,
  removeEventListener: () => null,
  dispatchEvent: (() => null) as TDispatchEventDefault,
});

function useEventBus(): IEB {
  const { addEventListener, removeEventListener, dispatchEvent } =
    useContext(EventBusContext);
  return useMemo(
    () => ({
      addEventListener,
      removeEventListener,
      dispatchEvent,
    }),
    [addEventListener, removeEventListener, dispatchEvent]
  );
}

const EventBusConsumer: React.FC<{ children: React.ReactElement }> = ({
  children,
}) => {
  const eventsRef = useRef<TEvents>({});

  const addEventListener = useCallback<IEB["addEventListener"]>(
    (eventName, event) => {
      if (!eventsRef.current[eventName]) {
        eventsRef.current[eventName] = {
          queue: [],
        };
      }

      if (eventsRef.current[eventName].queue.indexOf(event) > -1)
        eventsRef.current[eventName].queue[
          eventsRef.current[eventName].queue.indexOf(event)
        ] = event;
      else
        eventsRef.current[eventName].queue[
          eventsRef.current[eventName].queue.length
        ] = event;
    },
    []
  );

  const removeEventListener = useCallback<IEB["removeEventListener"]>(
    (eventName, event) => {
      if (eventsRef.current[eventName].queue.indexOf(event) > -1)
        eventsRef.current[eventName].queue.splice(
          eventsRef.current[eventName].queue.indexOf(event),
          1
        );
    },
    []
  );

  const dispatchEvent = useCallback<TDispatchEventDefault>(
    (eventName, ...data) => {
      if (eventsRef.current[eventName]) {
        eventsRef.current[eventName].queue.forEach((e) => {
          e(...data);
        });
      }
    },
    []
  );

  return React.createElement(
    EventBusContext.Provider,
    {
      value: {
        // eslint-disable-next-line
        // @ts-ignore
        addEventListener,
        removeEventListener,
        dispatchEvent,
      },
    },
    children
  );
};

export const EventBusProvider = memo(EventBusConsumer);

export type IEventBus = IEB;

export default useEventBus;
