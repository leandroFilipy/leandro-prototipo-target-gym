'use client';

import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  ['#modalidades', 'Modalidades'],
  ['#equipe', 'Equipe'],
  ['#estrutura', 'Estrutura'],
  ['#planos', 'Planos'],
  ['#duvidas', 'Dúvidas'],
];

export function MobileMenu({ whatsapp }: { whatsapp: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [open]);

  return (
    <div className="mobile-menu">
      <button className="menu-toggle" aria-expanded={open} aria-controls="menu-panel" aria-label={open ? 'Fechar menu' : 'Abrir menu'} onClick={() => setOpen(!open)}>
        {open ? <X /> : <Menu />}
      </button>
      <div className="menu-panel" id="menu-panel" hidden={!open}>
        <nav aria-label="Menu">
          {links.map(([href, label]) => (
            <a key={href} href={href} onClick={() => setOpen(false)}>{label}</a>
          ))}
        </nav>
        <a className="btn btn-red" href={whatsapp} target="_blank" rel="noreferrer" onClick={() => setOpen(false)}>
          Agendar aula experimental
        </a>
      </div>
    </div>
  );
}
