// Ícones do vestiário no mesmo traço das silhuetas de treino.

type Props = { className?: string };

const line = {
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 10,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
};

const accent = { ...line, stroke: 'var(--fig-accent, #e11414)' };

export function IconChuveiro({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path {...line} d="M60 12v14" />
      <path {...line} d="M26 46a34 34 0 0 1 68 0z" />
      <path {...accent} d="M40 64v12M60 68v14M80 64v12M50 92v10M70 92v10" />
    </svg>
  );
}

export function IconArmario({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <rect {...line} x="18" y="14" width="84" height="92" rx="5" />
      <path {...line} d="M60 14v92" />
      <path {...accent} d="M32 34h14M74 34h14" />
      <path {...accent} d="M48 62v10M72 62v10" />
    </svg>
  );
}

export function IconBanco({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <path {...accent} d="M14 50h92" />
      <path {...line} d="M26 58v42M94 58v42" />
      <path {...line} d="M26 76h68" />
    </svg>
  );
}

export function IconEspelho({ className }: Props) {
  return (
    <svg className={className} viewBox="0 0 120 120" aria-hidden="true">
      <rect {...line} x="24" y="14" width="72" height="92" rx="8" />
      <path {...accent} d="M44 82 76 40M62 84l18-24" />
    </svg>
  );
}
