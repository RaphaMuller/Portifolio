export interface RayGeneratorOptions {
  centerX?: number;
  centerY?: number;
  count?: number;
  outerRadius?: number;
}

interface PolarPoint {
  radius: number;
  angle: number;
  centerX: number;
  centerY: number;
}

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

const DEFAULT_RAY_COUNT = 36;
const SKIP_CHANCE = 0.3;

function toPoint({ radius, angle, centerX, centerY }: PolarPoint): string {
  const x = centerX + Math.cos(angle) * radius * 50;
  const y = centerY + Math.sin(angle) * radius * 50;
  return `${x.toFixed(2)},${y.toFixed(2)}`;
}

/**
 * @example
 * generateNavRays(3, { centerX: 70, centerY: 50 }).map((pts) => <polygon key={pts} points={pts} />)
 */
export function generateNavRays(
  seed: number,
  options: RayGeneratorOptions = {},
): string[] {
  const centerX = options.centerX ?? 50;
  const centerY = options.centerY ?? 50;
  const count = options.count ?? DEFAULT_RAY_COUNT;
  const outerRadius = options.outerRadius ?? 1.6;

  const random = createRng(11 + seed * 97);
  const rays: string[] = [];

  for (let index = 0; index < count; index++) {
    if (random() < SKIP_CHANCE) continue;
    const angle = (index / count) * Math.PI * 2 + (random() - 0.5) * 0.16;
    const width = 0.012 + random() * 0.05;
    const tip = 0.48 + random() * 0.18;
    const tipPoint = toPoint({ radius: tip, angle, centerX, centerY });
    const leftEdge = toPoint({ radius: outerRadius, angle: angle - width, centerX, centerY });
    const rightEdge = toPoint({ radius: outerRadius, angle: angle + width, centerX, centerY });
    rays.push(`${tipPoint} ${leftEdge} ${rightEdge}`);
  }

  return rays;
}
