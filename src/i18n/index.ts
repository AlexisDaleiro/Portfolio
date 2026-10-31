import es from './es.json';
import en from './en.json';

export type Lang = 'es' | 'en';
export type Dict = typeof es;

const dicts: Record<Lang, Dict> = { es, en };
export const getDict = (lang: Lang): Dict => dicts[lang];

export const CONTACT = {
  email: 'alexisdaleiro@gmail.com',
  // ID del form de Formspree (formspree.io/f/<ID>). Vacío = el modo email abre mailto:.
  formspreeId: 'meaargqk',
  phoneDisplay: '+598 095 673 109',
  waNumber: '59895673109',
  linkedin: 'https://www.linkedin.com/in/alexisdaleiro/',
  github: 'https://github.com/AlexisDaleiro',
  fideId: '3024326',
  fide: 'https://ratings.fide.com/profile/3024326',
} as const;

export const wa = (message: string): string =>
  `https://wa.me/${CONTACT.waNumber}?text=${encodeURIComponent(message)}`;

export const homePath = (lang: Lang): string => (lang === 'es' ? '/' : '/en/');
