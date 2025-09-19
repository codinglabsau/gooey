<script setup lang="ts">
import { Badge } from "@/components/badge"
</script>

<template>
  <div class="flex gap-2">
    <Badge data-cy="badge"> Badge </Badge>

    <Badge data-cy="badge-secondary" variant="secondary"> Secondary Badge </Badge>

    <Badge data-cy="badge-destructive" variant="destructive"> Destructive Badge </Badge>

    <Badge data-cy="badge-outline" variant="outline"> Outline Badge </Badge>

    <Badge data-cy="badge-success" variant="success"> Success Badge </Badge>

    <Badge data-cy="badge-warning" variant="warning"> Warning Badge </Badge>
  </div>
</template>
