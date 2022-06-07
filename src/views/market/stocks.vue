<template>
	<div class="flex justify-center items-center mb-12">
		<div class="w-4/6">
			<input
				class="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-blue-200"
				id="inline-full-name"
				type="text"
				placeholder="Pesquise por um código"
				v-model="search"
			/>
		</div>
	</div>
	<div class="flex flex-wrap justify-center" v-if="stocks.length && !loading">
		<div class="mr-4 mb-4" v-for="stock in stocks" :key="stock.stock">
			<stockComponent :data="stock" @buyStock="buyStock"></stockComponent>
		</div>
	</div>
	<div v-if="loading" class="w-full flex">
		<cardSkeleton :length="4"></cardSkeleton>
	</div>
	<div v-if="!stocks.length && !loading" class="w-full flex">
		<span class="text-base font-medium text-slate-600">
			Poxa, não encontramos resultado para sua busca. Tente buscar por outro
			nome.
		</span>
	</div>
</template>

<script>
import stockComponent from "@/components/stock-component.vue";
import cardSkeleton from "@/components/card-skeleton.vue";

export default {
	components: {
		stockComponent,
		cardSkeleton,
	},
	data() {
		return {
			stocks: [],
			search: "",
			delayTimer: null,
			loading: false,
		};
	},
	created() {
		this.fetchStocks();
	},
	methods: {
		async fetchStocks() {
			this.loading = true;
			await this.$store.dispatch("getStocks");
			this.stocks = await this.$store.getters["getCurrentsStocks"];
			this.loading = false;
		},
		async searchStocks() {
			let result = await this.$store.getters["getStocks"];
			this.stocks = result.stocks.filter((element) => {
				return element.stock.match(this.search.toUpperCase());
			});
			this.loading = false;
		},
		buyStock(data) {
			this.$store.dispatch("buyStock", data);
		},
	},
	watch: {
		async search() {
			if (this.search.length) {
				this.loading = true;
				clearTimeout(this.delayTimer);
				this.delayTimer = setTimeout(() => {
					this.searchStocks();
				}, 1500);
			} else {
				this.stocks = await this.$store.getters["getCurrentsStocks"];
			}
		},
	},
};
</script>

<style>
</style>