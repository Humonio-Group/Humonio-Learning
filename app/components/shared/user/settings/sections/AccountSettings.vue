<script setup lang="ts">
import { Save, Upload } from "lucide-vue-next";

const { user } = useUser();
const userToSave = ref({ ...user.value });

watch(user, value => userToSave.value = { ...value });

const isTouched = computed(() => Object.keys(user.value).some(key => userToSave.value[key] !== user.value[key]));

onBeforeMount(reset);
onBeforeUnmount(reset);

function save() {
  user.value = { ...userToSave.value };
}
function reset() {
  userToSave.value = { ...user.value };
}
</script>

<template>
  <div class="flex flex-col gap-4">
    <section
      id="avatar"
      class="flex items-center gap-4"
    >
      <div class="relative w-fit">
        <Avatar class="size-24">
          <AvatarImage
            v-if="user.picture"
            :src="user.picture"
          />
          <AvatarFallback class="text-2xl">
            {{ user.firstname[0] }}{{ user.lastname[0] }}
          </AvatarFallback>
        </Avatar>
        <Button
          variant="outline"
          size="smIcon"
          class="absolute bottom-0 right-0"
        >
          <Upload />
        </Button>
      </div>
      <div>
        <p class="font-medium leading-none">
          {{ $t("settings.profile.picture.title") }}
        </p>
        <span class="text-xs text-muted-foreground">
          {{ $t("settings.profile.picture.caption") }}
        </span>
      </div>
    </section>
    <section class="grid grid-cols-2 gap-4">
      <div class="space-y-2">
        <Label for="firstname">{{ $t("settings.profile.firstname") }}</Label>
        <Input
          id="firstname"
          v-model="userToSave.firstname"
        />
      </div>
      <div class="space-y-2">
        <Label for="lastname">{{ $t("settings.profile.lastname") }}</Label>
        <Input
          id="lastname"
          v-model="userToSave.lastname"
        />
      </div>
    </section>
    <section class="space-y-2">
      <Label for="email">{{ $t("settings.profile.email") }}</Label>
      <Input
        id="email"
        v-model="userToSave.email"
        type="email"
      />
    </section>
    <section class="space-y-2">
      <Label for="phone">{{ $t("settings.profile.phone") }}</Label>
      <Input
        id="phone"
        v-model="userToSave.phone"
        type="tel"
      />
    </section>
    <section class="space-y-2">
      <Label for="linkedin">{{ $t("settings.profile.linkedin") }}</Label>
      <Input
        id="linkedin"
        v-model="userToSave.linkedin"
      />
    </section>

    <footer class="flex items-center justify-end gap-2">
      <Button
        variant="secondary"
        :disabled="!isTouched"
        @click="reset"
      >
        {{ $t("btn.reset") }}
      </Button>
      <Button
        :disabled="!isTouched"
        @click="save"
      >
        <Save />
        {{ $t("btn.save") }}
      </Button>
    </footer>
  </div>
</template>
