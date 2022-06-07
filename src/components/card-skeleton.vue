<template>
<div v-for="(item, i) in length" :key="i" class="w-full mr-2">
  <div class="shadow rounded-md border">
  <div class="animate-pulse">
    <div class="rounded bg-blue-800 h-14 p-2 flex items-center">
      <div class="rounded-full bg-slate-200 h-10 w-10"></div>
      <div class="h-2 bg-slate-200 rounded w-4/6 ml-2"></div>
    </div>
    <div class="p-8">
      <div>
          <div class="h-2 bg-slate-200 rounded mb-2"></div>
          <div class="h-2 bg-slate-200 rounded"></div>
      </div>
    </div>
  </div>
</div>
</div>
</template>

<script>
export default {
  props: {
    length: {type: Number, default: 1}
  }
}
</script>

<style>

</style>