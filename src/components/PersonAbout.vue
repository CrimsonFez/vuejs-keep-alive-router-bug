<script setup lang="ts"></script>

const props = defineProps<{ person: any }>()

<template>
  <span>{{ props.person.name }}</span>
</template>
