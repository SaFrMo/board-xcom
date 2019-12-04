<template>
    <button :class="['soldier-selector', { selected }]">
        <span>{{ soldier.icon }}</span>
        <span>{{ soldier.name }}</span>
    </button>
</template>

<script>
export default {
    props: ['soldier', 'selected']
}
</script>

<style lang="scss">
button.soldier-selector {
    padding: 5px;

    &.selected {
        background: var(--selected-soldier-background);
        color: var(--selected-soldier-color);
    }
}
</style>
