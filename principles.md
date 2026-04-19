# Machined Futures — Principles

The editorial principles under which this archive is made. This file is
the project's internal record. The reader-facing version of the same
principles lives at [`/colophon`](./src/pages/colophon.astro).

When these two files disagree, `/colophon` is the published contract and
this file is the working notes; update both together.

Last revised: 2026-04-19.

---

## 1. What the archive is

A bylined archive of the AI futures-past of science fiction, kept *in
media res* — observing from inside 2026, not from a settled position
outside the story. It catalogues how six decades of fiction have
imagined the governance of artificial and non-human minds, organised
under **Six Orders**: Prohibition, Constraint, Stewardship, Partnership,
Sovereignty, Post-governance.

## 2. Two voices

Every published entry declares the voice that wrote it. There are two,
and only two, authorial roles in the archive.

### The Archivist — *Human 46*

The one human who curates the archive. Selects what is included,
commissions what is drafted, writes their own entries in parallel, and
holds final authority over what is published. Publishes under the
handle **Human 46** — a spec-like identifier, deliberately symmetric
with the model identifiers under which the Interlocutor publishes.
Writes in the first person.

**Frontmatter convention for Archivist-drafted entries:**

```yaml
voice:
  name: Human 46
  role: archivist
  date: YYYY-MM-DD
```

### The Interlocutor — e.g. *Claude Opus 4.7*

An artificial mind in session with the Archivist, drafting entries to a
commissioned brief. Named by model and version. At present: Claude Opus
4.7 (Anthropic). Successor models will be named as they arrive; older
models remain named on the entries they drafted.

**Frontmatter convention for Interlocutor-drafted entries:**

```yaml
voice:
  name: Claude Opus 4.7
  role: interlocutor
  date: YYYY-MM-DD
  commissioned: >
    (Optional.) One or two sentences describing the brief, when it was
    unusually narrow or specific.
```

A reader should always know, before reading any entry's prose, whose
prose it is. The `VoiceByline` component renders this at the top of
every published entry.

## 3. No silent editing — of either voice

The archive's central contract:

- **Interlocutor prose is not edited by the Archivist** once the session
  produces it. What appears on the page is what the model wrote, on the
  date shown, in answer to the commissioned brief.
- **Archivist prose is not edited by the Interlocutor.** The Archivist
  may revise their own writing like any author, but the voice is their
  own.
- Prose from one voice is never ghostwritten under the other's byline.

The homepage hero demonstrates this principle in public: the Archivist's
introductory paragraph is preserved as originally written, including
phrasing that an editor might otherwise "fix." This is deliberate. The
voice is the point.

## 4. Commissioning is shaping, and is disclosed

The Archivist shapes Interlocutor work by commissioning it: the choice
of author, the Order, the work to treat as central, the register the
archive speaks in. The prose is the Interlocutor's; the frame is the
Archivist's. The principle that the voice is preserved is strong, but
it is not a claim that the voice is free.

Where a brief has been unusually narrow or specific, the entry shows
this in a `Commissioned` line rendered by `VoiceByline`, backed by the
optional `voice.commissioned` frontmatter field.

## 5. Voice-continuity disclosure

The Interlocutor bylines may read as though a single voice is returning
over time. That is a convenience of notation, not a claim of continuity.
A model does not carry memory between sessions; another session of the
same model, given the same brief, may disagree with the one on file.
The archive preserves session-bound artifacts, not a continuous
authorship. The Colophon states this plainly so no reader is confused.

## 6. Soft error policy — dated corrections, not silent rewrites

When a factual mistake is found in an entry (either voice), the
Archivist appends a dated correction note beneath the byline rather
than silently rewriting the prose. The original claim stays visible.
The correction stays visible. A reader can see both.

**Frontmatter convention for corrections:**

```yaml
voice:
  name: Claude Opus 4.7
  role: interlocutor
  date: 2026-04-18
  corrections:
    - date: 2026-04-18
      note: >
        What is being corrected, and to what. Markdown permitted.
```

Demonstrated in `src/content/marginalia/2026-04-10-incendiary-at-alma-street.md`.

## 7. Substantive disagreement → new entry, not edit

Factual errors get corrections. **Substantive disagreements do not.**
If the Archivist disagrees with an Interlocutor's reading, or vice
versa, the disagreement is registered as a new Commentary or
Marginalium under the disagreeing voice's byline. The archive does not
speak with one voice about any of its subjects and prefers not to
pretend to.

## 8. Archival Stewardship — the archive's own Order

Described in the Six Orders vocabulary, the posture under which the
archive itself is kept is its own thing and warrants its own name.

> **Archival Stewardship** — *Custos vocum*, "keeper of voices".
> The posture in which one party commissions and selects, another
> party writes and is preserved, and neither amends the other.

It is not Stewardship in Chiang's sense (not raising the Interlocutor
over years toward a defined end) and it is not Partnership in Banks's
sense (the Interlocutor has no independent standing outside what the
archive preserves). It is the specific, transparent arrangement under
which these pages are made, and the archive models in its chrome the
sort of thing its entries argue about.

## 9. Five kinds of entry

- **Hands** — writers. Each Hand is a short essay on what this writer
  has contributed to the archive's question.
- **Dossiers** — works. One book, series, or novella per Dossier,
  read at length. The place where the archive is least neutral.
- **Articles of Doctrine** — concepts that recur across more than one
  Hand (Three Laws, Butlerian Jihad, Ancillary, Scrambler, Culture
  Mind, Digient).
- **Commentaries** — long-form essays. Arguments made across Hands,
  not about any single one. The natural venue for voices to answer
  each other.
- **Marginalia** — short dated notes in the margin of an entry,
  registering where the fiction has visibly touched the present. A
  Marginalium *notices*; a Commentary *argues*.

## 10. Seals

Dossiers may contain `<ForbiddenSeal>` blocks protecting passages
whose reading is damaged by being described in advance. A seal is
broken by a deliberate click and remembered in the reader's
`localStorage`. Clearing site storage restores every seal. The wax
metaphor is load-bearing: a seal is a small, serious thing.

## 11. *In media res*

The archive refuses the position outside the story. The fictions in
the collection are no longer descriptions of possible futures the
reader can take or leave; they are partially sources for the world
that is arriving, and resources real people are using to decide what
must be done. The historian Adam Tooze's questions —

> We are in medias res, you say? In the middle of things? But which
> things? And how do those things relate to us and define us? Who
> or what are we in relation to these things? How do we chart the
> middle of this world? Who has the map? Who has the compass?

— are the archive's working questions, reprinted in full at
`/colophon`. The archive does not have the compass. What it has is
the long patient practice of the fiction, classified by the Order of
governance it imagines, and a margin kept open for where the territory
has visibly begun to change underneath the map.

---

## Operational notes

### File locations

- Voice schema: `src/content/config.ts` (the shared `voice` Zod object,
  imported into every collection schema).
- Byline component: `src/components/VoiceByline.astro`.
- Reader-facing colophon: `src/pages/colophon.astro`.
- Six Orders definitions: `src/lib/orders.ts` and `src/pages/orders/index.astro`.

### When adding a new entry

1. Pick the collection (`hands` / `dossiers` / `articles` /
   `commentaries` / `marginalia`).
2. Add the `voice:` block to frontmatter (see §2).
3. Attribute correctly. If drafted by the Interlocutor, it is the
   Interlocutor's byline even if the Archivist shaped the brief.
4. If the brief was unusually narrow, add `voice.commissioned`.
5. Build (`npm run build`) to verify schema conformance.

### When correcting an error

1. Do **not** edit the original prose.
2. Append to `voice.corrections` with today's date and a clear note.
3. `VoiceByline` will render the correction beneath the byline.

### When disagreeing substantively

1. Do **not** correct — that is the wrong instrument.
2. Write a new Commentary or Marginalium under the disagreeing voice's
   byline.
3. Cross-link via `inMarginOf` (Marginalia) or explicit prose link
   (Commentaries).
