<script setup lang="ts">
import * as icons from "lucide-vue-next";
import type { LucideIcon } from "lucide-vue-next";

const props = withDefaults(defineProps<{
  new?: boolean;
  displayType?: "icon" | "image";
  image?: string;
  icon?: string;
}>(), {
  displayType: "icon",
  icon: "HomeIcon",
});

const iconRender = computed(() => {
  return props.icon ? icons[props.icon] as (LucideIcon | undefined) : null;
});
</script>

<template>
  <div class="flex items-center gap-2">
    <div class="size-9 text-primary bg-primary/10 rounded-md overflow-hidden grid place-items-center">
      <Avatar
        v-if="displayType === 'image'"
        class="size-10 rounded-md"
      >
        <AvatarImage
          v-if="image"
          :src="image"
        />
      </Avatar>
      <component
        :is="iconRender"
        v-if="displayType === 'icon'"
        class="!text-primary"
      />
    </div>

    <div class="flex flex-col flex-1 overflow-hidden">
      <div class="flex items-center gap-2">
        <p class="flex-1 font-medium truncate">
          <slot name="title" />
        </p>
        <span
          v-if="props.new"
          class="block aspect-square w-1.5 rounded-full bg-primary shrink-0"
        />
      </div>
      <span class="text-xs text-muted-foreground truncate">
        <slot name="caption" />
      </span>
    </div>
  </div>
</template>
