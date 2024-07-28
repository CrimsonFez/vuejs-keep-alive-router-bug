<script setup lang="ts">
import { useRoute } from 'vue-router';
import { useKeepAlive } from './util';

const route = useRoute();

</script>

<template>
  <div class="flex flex-col gap-3">
    <div class="bg-neutral-700 p-3">
      <div class="flex flex-row gap-3 items-center">
        <span class="text-lg">Test App</span>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/person/saruman/about">Saruman</RouterLink>
        <RouterLink to="/person/gandalf/about">Gandalf</RouterLink>
        <RouterLink to="/region/the-shire/about">The Shire</RouterLink>
      </div>
      <span>path: {{ route.path }}</span>
      <div>
        <label>use KeepAlive </label>
        <input type="checkbox" v-model="useKeepAlive">
      </div>
    </div>
    <router-view v-slot="{ Component, route }">
      <KeepAlive v-if="useKeepAlive">
        <Component :is="Component" :key="route.path"></Component>
      </KeepAlive>
      <Component :is="Component" :key="route.path" v-else></Component>
    </router-view>
  </div>
</template>
