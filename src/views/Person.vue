<script setup lang="ts">
import { computed } from 'vue';
import { useKeepAlive } from '../util';

const props = defineProps<{
  personId: string
}>()

let people = [
  {
    id: 'gandalf',
    name: 'Gandalf',
    summary: '2000 year old pot smoking wizard'
  },
  {
    id: 'saruman',
    name: 'Saruman',
    summary: 'he is stinky'
  }
]

const person = computed(() => {
  return people.find(i => i.id == props.personId)
})

</script>

<template>
  <div class="flex flex-col gap-3 border-[1px] p-3">
    <div class="w-full">
      <span class="text-lg">> Person</span>
    </div>
    <code><pre>{{ props }}</pre></code>
    <router-view v-slot="{ Component, route }" v-if="person != undefined">
      <KeepAlive v-if="useKeepAlive">
        <Component :person="person" :is="Component" :key="route.path"></Component>
      </KeepAlive>
      <Component :person="person" :is="Component" :key="route.path" v-else></Component>
    </router-view>
  </div>
</template>
