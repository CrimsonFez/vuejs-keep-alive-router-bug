<script setup lang="ts">
import { computed } from 'vue';
import { useKeepAlive } from '../util';


const props = defineProps<{
  regionId: string
}>()

let regions = [
  {
    id: 'the-shire',
    name: 'The Shire',
    summary: 'where Gandalf gets his weed'
  }
]

const region = computed(() => {
  return regions.find(i => i.id == props.regionId )
})

</script>

<template>
  <div class="flex flex-col gap-3 border-[1px] p-3">
    <span class="text-lg">> Region</span>
    <code><pre>{{ props }}</pre></code>
    <router-view v-slot="{ Component, route }">
      <KeepAlive v-if="useKeepAlive">
        <Component :region="region" :is="Component" :key="route.path"></Component>
      </KeepAlive>
      <Component :region="region" :is="Component" :key="route.path" v-else></Component>
    </router-view>
  </div>
</template>
