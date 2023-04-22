export type TEvent = (...a: Array<unknown>) => void | Promise<void>;

export type TEventListener = (eventName: string, event: TEvent) => void;

export type TEvents = Record<
  string,
  {
    queue: TEvent[];
  }
>;

export type TDispatchEventDefault = (
  eventName: string,
  ...data: Array<unknown>
) => void;

export interface IEventBus {
  addEventListener: TEventListener;
  removeEventListener: TEventListener;
  dispatchEvent(eventName: string, ...data: unknown[]): void;
  dispatchEvent(eventName: "onQueryProducts"): void;
}
