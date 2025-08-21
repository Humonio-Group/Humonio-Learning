<script setup lang="ts">
import { ProgramsNotificationOptions, SummaryNotificationOptions } from "#shared/types/notifications";

const { user } = useUser();
</script>

<template>
  <div class="flex flex-col gap-4 overflow-y-auto">
    <section class="space-y-4">
      <Label
        for="programs"
        class="flex flex-col items-start gap-0"
      >
        <span class="block">{{ $t("settings.notifications.programs.label") }}</span>
        <span class="block text-xs font-normal text-muted-foreground">{{ $t("settings.notifications.programs.caption") }}</span>
      </Label>
      <RadioGroup
        id="programs"
        v-model="user.notifications.programs"
      >
        <Label
          v-for="option in ProgramsNotificationOptions"
          :key="option"
          class="flex items-start gap-2"
        >
          <RadioGroupItem :value="option" />
          <div>
            <p class="font-semibold">
              {{ $t(`settings.notifications.programs.options.${option}.title`) }}
            </p>
            <span class="text-xs text-muted-foreground">{{
              $t(`settings.notifications.programs.options.${option}.caption`)
            }}</span>
          </div>
        </Label>
      </RadioGroup>
    </section>
    <Separator />
    <section class="space-y-4">
      <Label
        for="summary"
        class="flex flex-col items-start gap-0"
      >
        <span class="block">{{ $t("settings.notifications.summary.label") }}</span>
        <span class="block text-xs font-normal text-muted-foreground">{{ $t("settings.notifications.summary.caption") }}</span>
      </Label>
      <RadioGroup
        id="summary"
        v-model="user.notifications.summary"
      >
        <Label
          v-for="option in SummaryNotificationOptions"
          :key="option"
          class="flex items-start gap-2"
        >
          <RadioGroupItem :value="option" />
          <div>
            <p class="text-sm font-semibold leading-none">
              {{ $t(`settings.notifications.summary.options.${option}.title`) }}
            </p>
            <span class="inline-block text-xs text-muted-foreground">{{
              $t(`settings.notifications.summary.options.${option}.caption`)
            }}</span>
          </div>
        </Label>
      </RadioGroup>
    </section>
  </div>
</template>
