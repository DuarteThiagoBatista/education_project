<template>
	<header>
		<Navbar v-if="!($route.path === ('/cadastro' || '/login'))" />
	</header>
	<body class="body">
		<RouterView/>
	</body>
	<footer class="rodape">
		<FooterComponent />
	</footer>
</template>

<script>
import { RouterLink, RouterView } from 'vue-router';
import Navbar from './components/NavbarComponent.vue';
import FooterComponent from './components/FooterComponent.vue';

export default {
	components: {
		Navbar,
		FooterComponent,
	}
}
</script>

<style scoped>
	.body {
		width: 1080px;
		margin: 0 auto;
	}
	.rodape {
		background-image: linear-gradient(to right, #ec146420, #1A2DF320);
		display: flex;
		justify-content: center;
	}

</style>
