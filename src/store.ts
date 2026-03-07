/**
 * Tiny global state store for client-side interactivity.
 * Astro components can import this in their <script> tags
 * to share and react to state changes.
 */

type Listener = (isOpen: boolean) => void;
type Unsubscribe = () => void;

let _isOpen = false;
const _listeners: Set<Listener> = new Set();

export const store = {
  get isOpen(): boolean {
    return _isOpen;
  },

  toggle(): void {
    _isOpen = !_isOpen;
    _listeners.forEach((fn) => fn(_isOpen));
  },

  /**
   * Subscribe to state changes.
   * The listener fires only when the state CHANGES — NOT on initial subscription.
   * Components that need initial-state setup should do so directly via CSS
   * (e.g. el.style.transform) before any GSAP animations run, to avoid
   * conflicting with their entrance animations.
   * @returns An unsubscribe function — call it to stop receiving updates.
   */
  subscribe(fn: Listener): Unsubscribe {
    _listeners.add(fn);
    return () => _listeners.delete(fn);
  },
};
