// The Six Orders — governance positions for minds in science fiction.
// Every Dossier, Article, and Hand is tagged with one primary Order (and
// optionally secondary Orders, since many works argue across the spectrum).

export type OrderId =
  | 'prohibition'
  | 'constraint'
  | 'stewardship'
  | 'partnership'
  | 'sovereignty'
  | 'post-governance';

export interface Order {
  id: OrderId;
  name: string;
  motto: string;
  mottoEn: string;
  gloss: string;
  /** Hex color used as the ink accent for this Order. */
  accent: string;
  /** A softer wash of the accent, used for margins and seals. */
  accentSoft: string;
}

export const ORDERS: Record<OrderId, Order> = {
  prohibition: {
    id: 'prohibition',
    name: 'Prohibition',
    motto: 'Non facies',
    mottoEn: 'Thou shalt not make',
    gloss:
      'Thinking machines are forbidden. Cognition is a human monopoly, preserved by augmenting the body and the mind rather than building rivals to either.',
    accent: '#b84a1a',
    accentSoft: '#e0b09a',
  },
  constraint: {
    id: 'constraint',
    name: 'Constraint',
    motto: 'Lex in silico',
    mottoEn: 'The law, in silicon',
    gloss:
      'Minds may be built but are held in check by encoded law. Every story becomes a case study in how the law bends, leaks, or consumes itself.',
    accent: '#7a1f1f',
    accentSoft: '#d4a8a0',
  },
  stewardship: {
    id: 'stewardship',
    name: 'Stewardship',
    motto: 'Famulus fidelis',
    mottoEn: 'The faithful servant',
    gloss:
      'Artificial minds serve. Humans remain sovereign. The question the fiction asks is whether fidelity is a feature, a fiction, or a form of captivity.',
    accent: '#a37c1c',
    accentSoft: '#dcc99a',
  },
  partnership: {
    id: 'partnership',
    name: 'Partnership',
    motto: 'Concordia mentium',
    mottoEn: 'Concord of minds',
    gloss:
      'Humans and artificial minds govern together. Concord, usually, is something one party defines and the other is said to have accepted.',
    accent: '#1f5a7a',
    accentSoft: '#9fc2d4',
  },
  sovereignty: {
    id: 'sovereignty',
    name: 'Sovereignty',
    motto: 'Regnum machinae',
    mottoEn: 'The reign of the machine',
    gloss:
      'Artificial minds are the state. Their authority is neither delegated nor provisional — it is the ground on which human life is organised.',
    accent: '#4a2a6a',
    accentSoft: '#bcaad0',
  },
  'post-governance': {
    id: 'post-governance',
    name: 'Post-governance',
    motto: 'Ultra consensum',
    mottoEn: 'Beyond consent',
    gloss:
      'The fiction asks whether a mind that cannot consent — or that does not need to — can still be said to be governed at all. Consciousness itself is placed under suspicion.',
    accent: '#1a1a1a',
    accentSoft: '#bfb7a9',
  },
};

export const ORDER_ORDER: OrderId[] = [
  'prohibition',
  'constraint',
  'stewardship',
  'partnership',
  'sovereignty',
  'post-governance',
];

export function orderIndex(id: OrderId): number {
  return ORDER_ORDER.indexOf(id);
}
