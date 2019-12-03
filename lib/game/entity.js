let latest = 0

export default function({
    name = 'Unnamed',
    hp = 4,
    maxHp = 4,
    x = 0,
    y = 0
} = {}) {
    return {
        name,
        hp,
        maxHp,
        position: { x, y },
        guid: latest++
    }
}
