/**
 * Tiny global state store for client-side interactivity.
 * Astro components can import this in their <script> tags
 * to share and react to state changes.
 */

type Listener = (isOpen: boolean) => void;

let _isOpen = false;
const _listeners: Set<Listener> = new Set();

export const store = {
  get isOpen() {
    return _isOpen;
  },

  toggle() {
    _isOpen = !_isOpen;
    _listeners.forEach((fn) => fn(_isOpen));
  },

  subscribe(fn: Listener) {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  },
};
