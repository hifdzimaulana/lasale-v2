export function initPortalParallax(container: string = '.portal') {
  const portals = document.querySelectorAll<HTMLElement>(container);
  if (!portals.length) return;

  let mouseX = 0, mouseY = 0;
  let curX = 0, curY = 0;

  const onMouseMove = (e: MouseEvent) => {
    mouseX = (e.clientX / window.innerWidth - 0.5) * 2;
    mouseY = (e.clientY / window.innerHeight - 0.5) * 2;
  };

  window.addEventListener('mousemove', onMouseMove);

  let rafId: number;

  const tick = () => {
    curX += (mouseX - curX) * 0.05;
    curY += (mouseY - curY) * 0.05;

    portals.forEach((p, i) => {
      const depth = (i % 3 + 1) * 6;
      p.style.transform = `translate(${curX * depth}px, ${curY * depth}px)`;
    });

    rafId = requestAnimationFrame(tick);
  };

  rafId = requestAnimationFrame(tick);

  return () => {
    window.removeEventListener('mousemove', onMouseMove);
    cancelAnimationFrame(rafId);
  };
}
