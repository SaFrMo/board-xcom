let latest = 0

export default function({
    name = 'Unnamed',
    hp = 4,
    maxHp = 4,
    ap = 2,
    maxAp = null,
    x = 0,
    y = 0,
    // 0 = none, 1 = half, 2 = full
    cover = 0,
    ...options
} = {}) {
    return {
        name,
        hp,
        maxHp,
        ap,
        maxAp: maxAp === null ? ap : maxAp,
        position: { x, y },
        guid: latest++,
        cover,
        ...options
    }
}
