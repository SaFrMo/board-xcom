<template>
    <button :class="['soldier-selector', { selected }]">
        {{ soldier.name }}
    </button>
</template>

<script>
export default {
    props: ['soldier', 'selected']
}
</script>

<style lang="scss">
.soldier-selector {
    &.selected {
        background: var(--selected-soldier-background);
        color: var(--selected-soldier-color);
    }
}
</style>
