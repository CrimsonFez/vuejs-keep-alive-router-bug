<script setup lang="ts">
const props = defineProps<{
  wizardName: string;
}>();
</script>

<template>
  <div class="flex flex-col">
    <span>Wizards</span>
    <span>wizard name: {{ props.wizardName }}</span>
  </div>
</template>
