<script setup lang="ts">
import type { HTMLAttributes } from "vue";

const props = withDefaults(defineProps<{
  name?: string;
  class?: HTMLAttributes["class"];
}>(), {
  name: "home",
});
</script>

<template>
  <div
    :data-page="name"
    :class="props.class"
  >
    <slot />
  </div>
</template>
