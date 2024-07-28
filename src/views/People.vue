<script setup lang="ts"></script>

const props = defineProps<{ personName: string }>()

<template>
  <div>
    <span>People</span>
    <router-view v-slot="{ Component, route }">
      <KeepAlive>
        <Component :is="Component" :key="route.path"></Component>
      </KeepAlive>
    </router-view>
  </div>
</template>
