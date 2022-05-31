<template>
	<div class="flex justify-center items-center mb-6">
		<div class="w-full">
			<input
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
				id="inline-full-name"
				type="text"
				placeholder="Pesquisar..."
			/>
		</div>
    <button class="bg-blue-600 p-2 text-white rounded w-1/6 hover:bg-blue-800">
      Buscar
    </button>
	</div>
	<div class="flex flex-wrap">
		<div class="mr-4" v-for="(item, i) in 4" :key="i">
			<stockComponent></stockComponent>
		</div>
	</div>
</template>

<script>
import stockComponent from "@/components/stock-component.vue";
export default {
	components: {
		stockComponent,
	},
};
</script>

<style>
</style>