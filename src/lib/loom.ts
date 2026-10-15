/**
 * Every Loom recording embedded on the site. Thumbnails are resolved at build
 * time through Loom's oEmbed endpoint so each embed can show a poster image
 * instantly instead of loading the full player on page load.
 *
 * Add new recording ids here when you add a <LoomEmbed />. An id that is
 * missing (or whose lookup fails) simply falls back to the lazy player.
 */
export const loomVideoIds = [
  "ce52a6780423414688dbced4ea629ee0", // CRM walkthrough
  "36a54869700548d4821b2206725e1b78", // Voice AI agent live call
  "87b3418f5d9a4f48a43c379dd44ef473", // Social media AI agent
  "787dbf49e2ad4694bc031224eeb50568", // Landlord automation workflows tour
  "6c5d35d920fe4d8f9422a9aa17d70796", // Lead qualification system
  "9a49064c7e2a4da8895a62540ffad69a", // Lead nurture sequence explained
  "6d20f218258e48e7ac994730098ac7bc", // AI with Ann
  "ed99355e712945119fdfb733d0a2b8d8", // Sales rep dashboard
] as const;

export type LoomThumbnails = Record<string, string>;

async function fetchThumbnail(id: string): Promise<string | null> {
  const share = encodeURIComponent(`https://www.loom.com/share/${id}`);
  try {
    const res = await fetch(`https://www.loom.com/v1/oembed?url=${share}`, {
      signal: AbortSignal.timeout(8000),
    });
    if (!res.ok) return null;
    const data = (await res.json()) as { thumbnail_url?: string };
    return data.thumbnail_url ?? null;
  } catch {
    return null;
  }
}

export async function getLoomThumbnails(): Promise<LoomThumbnails> {
  const pairs = await Promise.all(
    loomVideoIds.map(async (id) => [id, await fetchThumbnail(id)] as const)
  );
  const out: LoomThumbnails = {};
  for (const [id, url] of pairs) {
    if (url) out[id] = url;
  }
  return out;
}
