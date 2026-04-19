import { defineCollection, reference, z } from 'astro:content';

const orderId = z.enum([
  'prohibition',
  'constraint',
  'stewardship',
  'partnership',
  'sovereignty',
  'post-governance',
]);

// Every entry declares its voice. The Archivist writes and selects; the
// Interlocutor writes in interlocution and is preserved as written. The
// voice is a session-bound attribution, not a claim of continuity: a later
// session of the same model may disagree. See /colophon.
const voice = z.object({
  name: z.string(),                              // e.g. "Claude Opus 4.7"
  role: z.enum(['archivist', 'interlocutor']),
  date: z.coerce.date(),
  /**
   * Optional note on the commissioning frame — the brief the voice was
   * asked to write within. "Commissioning is a form of shaping." Left
   * unset on Archivist entries.
   */
  commissioned: z.string().optional(),
  /**
   * Dated correction note(s), appended by the Archivist without rewriting
   * the preserved voice. Soft-correction policy: see /colophon.
   */
  corrections: z
    .array(z.object({ date: z.coerce.date(), note: z.string() }))
    .default([]),
});

// A Hand: an author. ("In the hand of...")
const hands = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    lived: z.string().optional(), // "1920–1992" or "b. 1966"
    nationality: z.string().optional(),
    primaryOrders: z.array(orderId).min(1),
    summary: z.string(),
    portraitAlt: z.string().optional(),
    voice,
  }),
});

// A Dossier: a single work or series.
const dossiers = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    hand: reference('hands'),
    year: z.number().int().optional(),
    series: z.string().optional(),
    seriesPosition: z.number().int().optional(),
    primaryOrder: orderId,
    secondaryOrders: z.array(orderId).default([]),
    articles: z.array(reference('articles')).default([]),
    /** One-line premise shown on cards and in the Concordance. */
    premise: z.string(),
    /** Optional pull quote displayed under the title. */
    epigraph: z
      .object({
        text: z.string(),
        attribution: z.string().optional(),
      })
      .optional(),
    /** Brief "why it matters" for the governance throughline. */
    governanceNote: z.string(),
    voice,
  }),
});

// An Article of Doctrine: a concept (Three Laws, Butlerian Jihad, Ancillary, etc.)
const articles = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    alsoKnownAs: z.array(z.string()).default([]),
    order: orderId,
    origin: z.string().optional(), // "Frank Herbert, Dune (1965)"
    summary: z.string(),
    relatedDossiers: z.array(reference('dossiers')).default([]),
    relatedArticles: z.array(reference('articles')).default([]),
    voice,
  }),
});

// A Commentary: long-form essay by an Archivist or Interlocutor.
const commentaries = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    subtitle: z.string().optional(),
    /** Approximate reading time in minutes. */
    reading: z.number().int().optional(),
    /** Orders the essay engages most directly. */
    orders: z.array(orderId).default([]),
    /** Optional: Dossiers, Articles, or Hands this commentary engages. */
    engages: z
      .array(
        z.object({
          kind: z.enum(['hand', 'dossier', 'article']),
          slug: z.string(),
        })
      )
      .default([]),
    voice,
  }),
});

// A Marginalium: a short, dated note in the margin of an entry, registering
// where the fiction has touched the present. The archive is kept in media res;
// Marginalia are how it keeps watch.
const marginalia = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    /** The day the archive is registering. */
    date: z.coerce.date(),
    /** One-line summary shown on index cards. */
    summary: z.string(),
    /** What fiction this note is written in the margin of. */
    inMarginOf: z
      .array(
        z.object({
          kind: z.enum(['hand', 'dossier', 'article']),
          slug: z.string(),
        })
      )
      .min(1),
    /** Optional pointer to a Commentary that expands this note. */
    expandedBy: z
      .object({
        slug: z.string(),
      })
      .optional(),
    /** Orders this note most closely engages. */
    orders: z.array(orderId).default([]),
    voice,
  }),
});

export const collections = { hands, dossiers, articles, commentaries, marginalia };
