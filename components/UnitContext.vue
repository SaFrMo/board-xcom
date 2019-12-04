<template>
    <section class="unit-context">
        <h3 class="name">{{ unit.name }}</h3>
        <div class="hp">HP: {{ unit.hp }} / {{ unit.maxHp }}</div>
        <div class="ap" v-if="unit.maxAp">
            AP: {{ unit.ap }} / {{ unit.maxAp }}
        </div>
    </section>
</template>

<script>
export default { props: ['unit'] }
</script>

<style lang="scss">
.unit-context {
    background: var(--white);
    color: var(--black);
    border: 1px solid var(--black);
    width: 150px;
    text-align: left;

    h3 {
        font-size: 16px;
        border-bottom: 1px dotted var(--black);
    }
    .progress-bar {
        position: relative;
        width: 100%;
        height: 10px;

        svg {
            transform-style: preserve-3d;
        }
    }
}
</style>
