export type EstimatorInput = {
  sqft: number;
  pitch: 'low' | 'med' | 'steep';
  material: 'asphalt' | 'metal' | 'tile';
  ageYears: number;
  stories: 1 | 2 | 3;
};

export function estimateRoof(i: EstimatorInput) {
  let base = i.sqft * 4.5;           // base $/sqft
  if (i.material === 'metal') base *= 1.6;
  if (i.material === 'tile')  base *= 2.1;
  if (i.pitch === 'med')      base *= 1.10;
  if (i.pitch === 'steep')    base *= 1.25;
  if (i.ageYears > 18)        base *= 1.12;
  if (i.stories >= 2)         base *= 1.08;

  const low = Math.round(base * 0.9);
  const high = Math.round(base * 1.2);
  return { low, high };
}
