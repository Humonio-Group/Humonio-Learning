<script setup lang="ts">
const { locale, locales } = useI18n();
watch(locale, val => navigateTo(useSwitchLocalePath()(val)));

const themes = [
  {
    name: "light",
    color: "bg-white",
  },
  {
    name: "dark",
    color: "bg-black",
  }, {
    name: "system",
    color: "bg-gradient-to-r from-white to-black",
  },

];
</script>

<template>
  <div class="flex flex-col gap-4">
    <section class="space-y-2">
      <Label for="theme">
        {{ $t("settings.interface.theme.label") }}
      </Label>
      <div class="grid grid-cols-1 sm:grid-cols-3 gap-2">
        <Card
          v-for="theme in themes"
          :key="theme.name"
          class="py-4 gap-4 cursor-pointer"
          :class="{ 'border-primary': $colorMode.preference === theme.name }"
          @click="$colorMode.preference = theme.name"
        >
          <CardHeader class="px-4 grid-rows-1">
            <AspectRatio
              :ratio="3"
              class="rounded-md border"
              :class="theme.color"
            />
          </CardHeader>
          <CardContent class="px-4">
            <p class="text-sm font-medium">
              {{ $t(`settings.interface.theme.options.${theme.name}`) }}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
    <section class="space-y-2">
      <Label for="lang">
        {{ $t("settings.interface.lang.label") }}
      </Label>
      <Select
        id="lang"
        v-model="locale"
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent align="end">
          <SelectItem
            v-for="loc in locales"
            :key="loc.iso"
            :value="loc.code"
          >
            {{ loc.name }}
          </SelectItem>
        </SelectContent>
      </Select>
    </section>
  </div>
</template>
