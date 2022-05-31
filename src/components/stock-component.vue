<template>
	<div class="flex py-4">
		<div class="card rounded border border-gray-300">
			<div class="header rounded bg-blue-600 h-14 flex items-center text-white">
				<span class="ml-4"> Title </span>
			</div>
			<div class="content p-4">
				<div class="mb-4 flex">
					<input
						class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
						id="quantity"
						type="number"
                        min="0"
						placeholder="Quantidade"
					/>
					<button class="bg-blue-600 p-2 text-white rounded">Comprar</button>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {};
</script>

<style>
</style>