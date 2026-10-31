type Lang = 'es' | 'en';

interface Props {
  lang: Lang;
  label: string;
}

const PATH: Record<Lang, string> = { es: '/', en: '/en/' };

export default function LanguageToggle({ lang, label }: Props) {
  const choose = (target: Lang) => (event: React.MouseEvent<HTMLAnchorElement>) => {
    try {
      localStorage.setItem('lang', target);
    } catch {
      /* storage blocked: the link still navigates */
    }
    if (target === lang) return;
    event.preventDefault();
    window.location.href = PATH[target] + window.location.hash;
  };

  return (
    <div
      role="group"
      aria-label={label}
      className="flex items-center rounded-xl border border-subtle bg-surface p-0.5 font-mono text-xs font-medium"
    >
      {(['es', 'en'] as const).map((code) => {
        const active = code === lang;
        return (
          <a
            key={code}
            href={PATH[code]}
            lang={code}
            hrefLang={code}
            aria-current={active ? 'true' : undefined}
            onClick={choose(code)}
            className={
              'inline-flex h-9 min-w-10 items-center justify-center rounded-[0.6rem] px-2.5 transition-colors ' +
              (active ? 'bg-accent-emerald text-[#0A0C10]' : 'text-muted hover:text-primary')
            }
          >
            {code.toUpperCase()}
          </a>
        );
      })}
    </div>
  );
}
