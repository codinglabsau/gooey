<script setup lang="ts">
import { Badge } from "@/components/badge"
</script>

<template>
  <div class="flex gap-2">
    <Badge data-cy="badge"> Badge </Badge>

    <Badge data-cy="badge" variant="secondary"> Secondary Badge </Badge>

    <Badge data-cy="badge" variant="destructive"> Destructive Badge </Badge>

    <Badge data-cy="badge" variant="outline"> Outline Badge </Badge>

    <Badge data-cy="badge" variant="success"> Success Badge </Badge>

    <Badge data-cy="badge" variant="warning"> Warning Badge </Badge>
  </div>
</template>
