<script setup lang="ts">
import { Bell, BellDot } from "lucide-vue-next";
import type { Align, Side } from "#shared/types/positions";
import NotificationLine from "~/components/shared/user/notifications/NotificationLine.vue";

defineProps<{
  side?: Side;
  align?: Align;
}>();

const hasNotifications = computed(() => true);

const notifs = [
  {
    title: "Nouveau courriel réceptionné",
    caption: "Vous ne vous êtes pas connecté depuis plus de 14 jours...",
    icon: "Mail",
  },
  {
    title: "Nouveau message dans ta boîte de réception",
    caption: "Uriel : \"Hello Loïc, on en est où de l'avancée de l'apprentissage sur le parcours Barista ?\"",
    icon: "MessageCircle",
    new: true,
  },
  {
    title: "Nouveau badge disponible",
    caption: "Tu as débloqué le succès \"Obtient de l'aide\" !",
    icon: "Badge",
  },
];
const notifications = computed(() => notifs.sort((a, b) => a.new ? -1 : 1));
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger as-child>
      <slot>
        <Button
          size="icon"
          variant="ghost"
        >
          <BellDot v-if="hasNotifications" />
          <Bell v-else />
        </Button>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      :side="side"
      :align="align"
      class="w-sm"
    >
      <DropdownMenuItem
        v-for="(notification, index) in notifications"
        :key="index"
        as-child
      >
        <NotificationLine
          :icon="notification.icon"
          :new="notification.new"
        >
          <template #title>
            {{ notification.title }}
          </template>
          <template #caption>
            {{ notification.caption }}
          </template>
        </NotificationLine>
      </DropdownMenuItem>
      <template v-if="notifications.length > 10">
        <DropdownMenuSeparator />
        <Button
          variant="link"
          size="sm"
          class="w-full"
        >
          {{ $t("btn.see-all-notifications") }}
        </Button>
      </template>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
