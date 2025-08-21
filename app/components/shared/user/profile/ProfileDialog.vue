<script setup lang="ts">
import { Mail, Phone, Linkedin } from "lucide-vue-next";

const open = defineModel<boolean>("open", {
  default: false,
});

defineProps<{
  user: IUser;
}>();
</script>

<template>
  <Dialog v-model:open="open">
    <DialogTrigger as-child>
      <slot />
    </DialogTrigger>
    <DialogContent>
      <DialogTitle class="sr-only">
        {{ $t("sr-messages.profile-viewing.title", { name: user.name }) }}
      </DialogTitle>
      <DialogDescription class="sr-only">
        {{ $t("sr-messages.profile-viewing.caption", { name: user.name }) }}
      </DialogDescription>
      <!-- -->
      <header class="flex flex-col items-center gap-2">
        <Avatar class="size-32">
          <AvatarImage
            v-if="user.picture"
            :src="user.picture"
          />
          <AvatarFallback>
            {{ user.firstname[0] }}{{ user.lastname[0] }}
          </AvatarFallback>
        </Avatar>
        <p class="font-bold text-2xl">
          {{ user.name }} <span class="text-sm font-normal text-muted-foreground">#{{ user.id }}</span>
        </p>
      </header>
      <Separator />
      <main class="flex flex-col sm:flex-row gap-6 sm:gap-4">
        <section class="sm:flex-1 flex flex-col gap-4">
          <Label class="text-muted-foreground">{{ $t("user-profile.contact") }}</Label>
          <NuxtLink
            :to="`mailto:${user.email}`"
            class="flex items-center gap-4 underline-offset-4 hover:underline"
          >
            <Mail class="size-4" />
            <p>{{ user.email }}</p>
          </NuxtLink>
          <NuxtLink
            v-if="user.phone"
            :to="`tel:${user.phone}`"
            class="flex items-center gap-4 underline-offset-4 hover:underline"
          >
            <Phone class="size-4" />
            {{ user.phone }}
          </NuxtLink>
        </section>
        <section class="sm:flex-1 flex flex-col gap-4">
          <Label class="text-muted-foreground">{{ $t("user-profile.public-profiles") }}</Label>
          <NuxtLink
            v-if="user.linkedin"
            :to="user.linkedin"
            target="_blank"
            class="flex items-center gap-4 underline-offset-4 hover:underline"
          >
            <Linkedin class="size-4" />
            {{ user.linkedin?.split("/")[4] }}
          </NuxtLink>
        </section>
      </main>
    </DialogContent>
  </Dialog>
</template>
