<script setup lang="ts">
const props = defineProps<{
  regionName: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <span>Regions</span>
    <span>region name: {{ props.regionName }}</span>
  </div>
</template>
