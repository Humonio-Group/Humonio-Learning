<script setup lang="ts">
import Page from "~/components/shared/primitives/composition/Page.vue";
import UserContext from "~/components/shared/user/UserContext.vue";
</script>

<template>
  <Page>
    <Button>{{ $t("hello") }}</Button>

    <UserContext />
  </Page>
</template>
