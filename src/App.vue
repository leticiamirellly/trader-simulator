<template>
	<v-app>
		<Header></Header>
    <div class="p-6">
      <router-view></router-view>
    </div>
	</v-app>
</template>

<script>
import Header from "./components/header";

export default {
	components: {
		Header,
	},
};
</script>

