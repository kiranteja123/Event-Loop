/** Max extra chars for prefix match (e.g. copy → copying), not substring (copy → copyright). */
const PREFIX_MATCH_MAX_EXTRA = 4;

function normalizeForSearch(s) {
    return String(s)
        .normalize('NFD')
        .replace(/\p{M}/gu, '')
        .toLowerCase()
        .replace(/[^\p{L}\p{N}]+/gu, ' ')
        .replace(/\s+/g, ' ')
        .trim();
}

function queryTokens(debouncedQuery) {
    const normalized = normalizeForSearch(debouncedQuery);
    if (!normalized) return [];
    return normalized.split(/\s+/).filter(Boolean);
}

function extractWords(rawText) {
    return rawText.toLowerCase().match(/[\p{L}\p{N}]+/gu) ?? [];
}

function tokenMatchesInWords(words, token) {
    if (!token) return true;
    if (token.length <= 2) {
        return words.some((w) => w === token);
    }
    return words.some((w) => {
        if (w === token) return true;
        if (w.startsWith(token)) {
            return w.length - token.length <= PREFIX_MATCH_MAX_EXTRA;
        }
        return false;
    });
}

function tokensMatchInText(rawText, tokens) {
    const words = extractWords(`${rawText}`);
    return tokens.every((t) => tokenMatchesInWords(words, t));
}

/**
 * Every query word must match in question or answer (order-free).
 * Symbol-only queries fall back to raw substring match.
 */
export function filterQaList(list, debouncedQuery) {
    const raw = debouncedQuery.trim();
    if (!raw) return list;

    const tokens = queryTokens(debouncedQuery);
    if (tokens.length > 0) {
        return list.filter((item) => {
            const haystack = `${item.question ?? ''} ${String(item.answer ?? '')}`;
            return tokensMatchInText(haystack, tokens);
        });
    }

    const q = raw.toLowerCase();
    return list.filter((item) => {
        const haystack = `${item.question ?? ''} ${String(item.answer ?? '')}`.toLowerCase();
        return haystack.includes(q);
    });
}
