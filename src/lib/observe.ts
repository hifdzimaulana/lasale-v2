type Callback = (entry: IntersectionObserverEntry) => void;

class ScrollObserver {
  private observer: IntersectionObserver;
  private handlers = new Map<Element, Callback>();

  constructor(options?: IntersectionObserverInit) {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('in');
            const cb = this.handlers.get(entry.target);
            cb?.(entry);
            this.observer.unobserve(entry.target);
            this.handlers.delete(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px', ...options }
    );
  }

  observe(el: Element, callback?: Callback) {
    if (callback) this.handlers.set(el, callback);
    this.observer.observe(el);
  }

  disconnect() {
    this.observer.disconnect();
    this.handlers.clear();
  }
}

export function initScrollReveals() {
  const observer = new ScrollObserver();
  const els = document.querySelectorAll('.reveal');
  els.forEach((el) => observer.observe(el));
  return observer;
}
