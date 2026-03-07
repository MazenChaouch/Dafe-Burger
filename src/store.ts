/**
 * Generic store factory to create independent pieces of state.
 */
function createStore(initialState = false) {
  let _isOpen = initialState;
  const _listeners: Set<(isOpen: boolean) => void> = new Set();

  return {
    get isOpen(): boolean {
      return _isOpen;
    },
    toggle(): void {
      _isOpen = !_isOpen;
      _listeners.forEach((fn) => fn(_isOpen));
    },
    set(value: boolean): void {
      _isOpen = value;
      _listeners.forEach((fn) => fn(_isOpen));
    },
    subscribe(fn: (isOpen: boolean) => void) {
      _listeners.add(fn);
      fn(_isOpen); // Fire immediately with current state
      return () => _listeners.delete(fn);
    },
  };
}

// Independent stores for different UI parts
export const menuStore = createStore(false);
export const burgerStore = createStore(false);
