<script setup lang="ts">
import Page from "~/components/shared/primitives/composition/Page.vue";
import UserContext from "~/components/shared/user/UserContext.vue";
import UserNotifications from "~/components/shared/user/notifications/UserNotifications.vue";
</script>

<template>
  <Page class="flex items-center">
    <Button>{{ $t("hello") }}</Button>

    <UserNotifications />

    <UserContext />
  </Page>
</template>
