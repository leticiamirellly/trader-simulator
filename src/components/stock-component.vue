<template>
	<div class="flex">
		<div class="card rounded border border-gray-300">
			<div
				class="header rounded bg-blue-800 h-14 flex items-center justify-between text-white p-2"
			>
				<div class="flex items-center">
					<img :src="data.logo" alt="" width="30" height="30" class="rounded-full"/>
					<span class="ml-2"> {{ `${data.name.length > 9 ? `${data.name.slice(0,9)}...` : data.name }` }} - {{ data.stock }}</span>
				</div>
				<div class="font-bold">
					{{ data.close }}
				</div>
			</div>

			<div class="content p-4">
				<div class="mb-4 flex">
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="quantity"
						type="number"
						min="0"
						placeholder="Quantidade"
						v-model="quantity"
					/>
					<button class="bg-blue-800 p-2 text-white rounded hover:bg-blue-600"
					@click="quantity > 0 && $emit('buyStock', {data, quantity})">Comprar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			quantity: 0
		}
	},
	props: {
		data: { type: Array },
	},
};
</script>

<style>
</style>