<script setup lang="ts">
import { Bell, Palette, User, FileText, X } from "lucide-vue-next";
import InterfaceSettings from "~/components/shared/user/settings/sections/InterfaceSettings.vue";
import AccountSettings from "~/components/shared/user/settings/sections/AccountSettings.vue";
import NotificationsSettings from "~/components/shared/user/settings/sections/NotificationsSettings.vue";
import TermsSettings from "~/components/shared/user/settings/sections/TermsSettings.vue";

const open = defineModel<boolean>("open", {
  default: false,
});
const pages = ["profile", "interface", "notifications", "terms"];
const icons = [User, Palette, Bell, FileText];

type Page = (typeof pages)[number];

const selectedPage = ref<Page>("profile");

function selectPage(page: Page) {
  selectedPage.value = page;
}
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent
      class="sm:!max-w-3xl overflow-hidden p-0"
      :closable="false"
    >
      <DialogTitle class="sr-only">
        {{ $t("settings.title") }}
      </DialogTitle>
      <DialogDescription class="sr-only">
        {{ $t("settings.description") }}
      </DialogDescription>

      <SidebarProvider class="overflow-hidden min-h-0 h-full h-[calc(100dvh-2rem)] md:h-[70dvh]">
        <Sidebar class="hidden md:flex">
          <SidebarHeader class="border-b flex-row justify-between px-4 py-3">
            <h1 class="text-lg font-bold">
              {{ $t("settings.title") }}
            </h1>

            <DialogClose>
              <X class="text-muted-foreground size-4" />
            </DialogClose>
          </SidebarHeader>

          <SidebarContent>
            <SidebarGroup>
              <SidebarMenu>
                <SidebarMenuItem
                  v-for="(page, index) in pages"
                  :key="page"
                >
                  <SidebarMenuButton
                    :is-active="selectedPage === page"
                    @click="selectPage(page)"
                  >
                    <component :is="icons[index]" />
                    {{ $t(`settings.${page}.label`) }}
                  </SidebarMenuButton>
                </SidebarMenuItem>
              </SidebarMenu>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <main class="flex-1 flex flex-col overflow-hidden">
          <header class="sticky top-0 z-1 py-3 px-4 border-b flex items-center gap-2">
            <SidebarTrigger class="md:hidden" />
            <h2 class="text-lg font-bold">
              {{ $t(`settings.${selectedPage}.label`) }}
            </h2>

            <DialogClose class="md:hidden ml-auto">
              <X class="size-4 text-muted-foreground" />
            </DialogClose>
          </header>

          <div class="p-4 overflow-y-auto">
            <AccountSettings v-if="selectedPage === 'profile'" />
            <InterfaceSettings v-if="selectedPage === 'interface'" />
            <NotificationsSettings v-if="selectedPage === 'notifications'" />
            <TermsSettings v-if="selectedPage === 'terms'" />
          </div>
        </main>
      </SidebarProvider>
    </DialogContent>
  </Dialog>
</template>
