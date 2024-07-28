<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue';
import { useRoute } from 'vue-router';

const route = useRoute();
</script>

<template>
  <div class="flex flex-col gap-3 p-3">
    <span>path: {{ route.path }}</span>
    <div class="flex flex-row gap-3 items-center">
      <span class="text-lg">Test App</span>
      <RouterLink to="/">Home</RouterLink>
      <RouterLink to="/people/wizards/saruman">Saruman</RouterLink>
      <RouterLink to="/people/wizards/gandalf">Gandalf</RouterLink>
      <RouterLink to="/places/regions/the-shire">The Shire</RouterLink>
    </div>
    <router-view v-slot="{ Component, route }">
      <KeepAlive>
        <Component :is="Component" :key="route.path"></Component>
      </KeepAlive>
    </router-view>
  </div>
</template>
