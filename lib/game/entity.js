let latest = 0

export default function({
    name = 'Unnamed',
    hp = 4,
    maxHp = 4,
    ap = 2,
    maxAp = 2,
    x = 0,
    y = 0
} = {}) {
    return {
        name,
        hp,
        maxHp,
        ap,
        maxAp,
        position: { x, y },
        guid: latest++
    }
}
