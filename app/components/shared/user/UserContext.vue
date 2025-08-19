<script setup lang="ts">
import { DropdownMenu } from "~/components/ui/dropdown-menu";
import { HelpCircle, LogOut, Settings, ShieldUser, User } from "lucide-vue-next";

const user = {
  firstname: "Loic",
  lastname: "Maes",
  name: "Loic Maes",
  email: "loic@humonio.com",
  phone: "01 23 45 67 89",
  admin: true,
};

defineProps<{
  side?: "top" | "right" | "bottom" | "left";
  align?: "start" | "center" | "end";
}>();
</script>

<template>
  <DropdownMenu>
    <DropdownMenuTrigger>
      <slot>
        <Button
          size="icon"
          variant="ghost"
          as-child
        >
          <Avatar>
            <AvatarFallback>
              {{ user.firstname[0] }}{{ user.lastname[0] }}
            </AvatarFallback>
          </Avatar>
        </Button>
      </slot>
    </DropdownMenuTrigger>
    <DropdownMenuContent
      :side="side"
      :align="align"
    >
      <DropdownMenuGroup class="p-1 flex items-center gap-2">
        <Avatar class="rounded-md size-10">
          <AvatarFallback>
            {{ user.firstname[0] }}{{ user.lastname[0] }}
          </AvatarFallback>
        </Avatar>
        <div class="flex flex-col">
          <p class="font-medium leading-none">
            {{ user.name }}
          </p>
          <span class="text-xs text-muted-foreground">{{ user.email }}</span>
        </div>
      </DropdownMenuGroup>
      <DropdownMenuSeparator />
      <DropdownMenuGroup>
        <DropdownMenuItem>
          <User />
          {{ $t("user-context.profile") }}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <Settings />
          {{ $t("user-context.settings") }}
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HelpCircle />
          {{ $t("user-context.getting-help") }}
        </DropdownMenuItem>
      </DropdownMenuGroup>
      <template v-if="user.admin">
        <DropdownMenuSeparator />
        <DropdownMenuItem>
          <ShieldUser />
          {{ $t("user-context.go-to-admin") }}
        </DropdownMenuItem>
      </template>
      <DropdownMenuSeparator />
      <DropdownMenuItem variant="destructive">
        <LogOut />
        {{ $t("user-context.log-out") }}
      </DropdownMenuItem>
    </DropdownMenuContent>
  </DropdownMenu>
</template>
