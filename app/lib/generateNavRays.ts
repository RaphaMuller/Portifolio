// Deterministic PRNG (mulberry32) so server and client render identical rays.
function createRng(seed: number) {
  let state = seed;
  return () => {
    state = (state + 0x6d2b79f5) | 0;
    let t = Math.imul(state ^ (state >>> 15), 1 | state);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

const RAY_COUNT = 36;
const SKIP_CHANCE = 0.3;

function toPoint(radius: number, angle: number) {
  const x = 50 + Math.cos(angle) * radius * 50;
  const y = 50 + Math.sin(angle) * radius * 50;
  return `${x.toFixed(2)},${y.toFixed(2)}`;
}

/**
 * Generates speed-line polygons (viewBox 0 0 100 100) for a comic panel.
 * @example
 * generateNavRays(3).map((points) => <polygon key={points} points={points} />)
 */
export function generateNavRays(seed: number): string[] {
  const random = createRng(11 + seed * 97);
  const rays: string[] = [];

  for (let index = 0; index < RAY_COUNT; index++) {
    if (random() < SKIP_CHANCE) continue;
    const angle = (index / RAY_COUNT) * Math.PI * 2 + (random() - 0.5) * 0.16;
    const width = 0.012 + random() * 0.05;
    const tip = 0.42 + random() * 0.16;
    rays.push(
      `${toPoint(tip, angle)} ${toPoint(1.6, angle - width)} ${toPoint(1.6, angle + width)}`,
    );
  }

  return rays;
}
