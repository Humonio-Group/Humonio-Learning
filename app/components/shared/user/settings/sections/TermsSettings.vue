<script setup lang="ts">
import { BookOpen, X } from "lucide-vue-next";
import { formatDate } from "@vueuse/shared";

const terms = ref([
  {
    key: "a",
    title: "Règlement intérieur",
    lastUpdate: new Date(2024, 7, 25, 22, 0),
  },
  {
    key: "b",
    title: "CGV formation Humonio",
    lastUpdate: new Date(2024, 7, 25, 22, 0),
  },
  {
    key: "c",
    title: "Conditions générales des services",
    lastUpdate: new Date(2020, 8, 3, 12, 2),
  }, {
    key: "d",
    title: "Politique de confidentialité",
    lastUpdate: new Date(2020, 8, 3, 12, 2),
  },
  {
    key: "e",
    title: "Contrat de Licence Utilisateur Final",
    lastUpdate: new Date(2020, 8, 3, 12, 2),
  },

]);

function revoke(key: string) {
  terms.value.splice(terms.value.findIndex(term => term.key === key), 1);
}
</script>

<template>
  <div class="flex flex-col gap-4 overflow-y-auto">
    <Card
      v-for="term in terms"
      :key="term.key"
      class="py-4"
    >
      <CardContent class="px-4 flex items-center justify-between">
        <header>
          <CardTitle>{{ term.title }}</CardTitle>
          <CardDescription>
            {{ $t("labels.last-update", {
              date: formatDate(term.lastUpdate, "DD/MM/YYYY"),
              hour: formatDate(term.lastUpdate, "HH:MM"),
            }) }}
          </CardDescription>
        </header>

        <div class="flex items-center">
          <Button
            variant="ghost"
            size="icon"
          >
            <BookOpen />
          </Button>
          <Button
            variant="ghost"
            size="icon"
            @click="revoke(term.key)"
          >
            <X />
          </Button>
        </div>
      </CardContent>
    </Card>
  </div>
</template>
