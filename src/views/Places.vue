<script setup lang="ts"></script>

<template>
  <div>
    <span>Places</span>
    <router-view v-slot="{ Component, route }">
      <KeepAlive>
        <Component :is="Component" :key="route.path"></Component>
      </KeepAlive>
    </router-view>
  </div>
</template>
