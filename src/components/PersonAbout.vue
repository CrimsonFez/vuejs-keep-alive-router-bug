<script setup lang="ts">

const props = defineProps<{ person: any }>()

</script>

<template>
  <div class="flex flex-col p-3 w-full border-[1px]">
    <span class="text-lg">>> About</span>
    <code><pre>{{ props }}</pre></code>
  </div>
</template>
