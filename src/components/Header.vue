<template>
	<nav class="bg-blue-800 p-6">
		<div class="flex items-center justify-between items-center w-auto">
			<div class="flex items-end">
				<h1 class="font-semibold text-3xl tracking-tight text-white mr-6">Trader simulator</h1>
				<div class="text-md lg:flex-grow">
					<router-link to="/" class="mt-4 hover:underline mr-4 cursor-pointer text-white">
							Início
					</router-link>
					<router-link to="/portfolio" class="mt-4 hover:underline mr-4 cursor-pointer text-white">
							Portfolio
					</router-link>
					<router-link to="/stocks" class="mt-4 hover:underline cursor-pointer text-white">
						Ações
					</router-link>
				</div>
			</div>
			<div>
				<button
					class="text-white mr-4 border rounded px-4 py-1 hover:bg-blue-600"
				>
					Finalizar Dia
				</button>
				<div class="dropdown inline-block relative">
					<button
						class="bg-blue-600 text-white font-semibold py-2 px-4 rounded inline-flex items-center"
					>
						<span class="mr-1">Salvar & carregar</span>
						<svg
							class="fill-current h-4 w-4"
							xmlns="http://www.w3.org/2000/svg"
							viewBox="0 0 20 20"
						>
							<path
								d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
							/>
						</svg>
					</button>
					<ul class="dropdown-menu absolute hidden bg-blue-800  text-white pt-1">
						<li class="">
							<a
								class="rounded-t bg-blue-800 text-white hover:bg-blue-600 py-2 px-4 block whitespace-no-wrap"
								href="#"
								>Salvar dados</a
							>
						</li>
						<li class="">
							<a
								class="bg-blue-800 text-white hover:bg-blue-600  py-2 px-4 block whitespace-no-wrap"
								href="#"
								>Carregar dados</a
							>
						</li>
					</ul>
				</div>
			</div>
		</div>
	</nav>
</template>
<script>
export default {};
</script>

<style>
.dropdown:hover .dropdown-menu {
	display: block;
}
.router-link-active, .is-active{
	text-decoration: underline;
	color: white;
}
</style>