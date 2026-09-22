// Silhuetas de treino desenhadas em SVG.
// O corpo usa currentColor; o equipamento usa a cor definida em --fig-accent.

type Props = { className?: string };

const body = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 20,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const gear = {
  fill: 'none',
  stroke: 'var(--fig-accent, #e11414)',
  strokeWidth: 16,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

// Agachamento com barra
export function FigAgachamento({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 170 170" aria-hidden="true">
      <circle cx="80" cy="40" r="17" fill="currentColor" />
      <path {...body} d="M80 58 74 96" />
      <path {...body} d="M74 96 52 118l6 32" />
      <path {...body} d="M74 96l26 20-4 34" />
      <path {...body} d="M80 66 58 54M80 66l22-12" />
      <path {...gear} d="M18 50h134" />
      <path {...gear} d="M32 32v36M138 32v36" />
    </svg>
  );
}

// Rosca com halter
export function FigHalter({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 170 170" aria-hidden="true">
      <circle cx="74" cy="36" r="17" fill="currentColor" />
      <path {...body} d="M74 54v44" />
      <path {...body} d="M74 98 58 126l-2 28" />
      <path {...body} d="M74 98l20 26v30" />
      <path {...body} d="M74 68 62 96l36 4" />
      <path {...gear} d="M104 100h26" />
      <path {...gear} d="M110 86v28M126 86v28" />
    </svg>
  );
}

// Corrida / condicionamento
export function FigCorrida({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 170 170" aria-hidden="true">
      <circle cx="102" cy="34" r="17" fill="currentColor" />
      <path {...body} d="M100 52 84 92" />
      <path {...body} d="M94 64 66 52M94 64l26 16" />
      <path {...body} d="m84 92 24 20-4 36" />
      <path {...body} d="M84 92 58 106l8 30" />
      <path {...gear} d="M16 58h26M10 88h28M22 118h24" />
    </svg>
  );
}

// Balanço com kettlebell
export function FigKettlebell({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 170 170" aria-hidden="true">
      <circle cx="58" cy="44" r="17" fill="currentColor" />
      <path {...body} d="m60 62 14 34" />
      <path {...body} d="M74 96 54 120l4 32" />
      <path {...body} d="m74 96 24 22-2 34" />
      <path {...body} d="m64 72 40 24" />
      <path {...gear} d="M106 98a12 12 0 0 1 18 6" />
      <circle cx="124" cy="124" r="18" fill="var(--fig-accent, #e11414)" />
    </svg>
  );
}

// Alvo da marca (anéis + mira)
export function TargetMark({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 100 100" aria-hidden="true">
      <circle cx="50" cy="50" r="42" fill="none" stroke="currentColor" strokeWidth="9" />
      <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="9" />
      <circle cx="50" cy="50" r="8" fill="currentColor" />
      <path d="M50 0v14M50 86v14M0 50h14M86 50h14" stroke="currentColor" strokeWidth="7" strokeLinecap="round" />
    </svg>
  );
}
