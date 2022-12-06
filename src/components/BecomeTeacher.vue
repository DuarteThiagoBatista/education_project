<template>
	<div class="container-become-professor">
		<h3 class="title">Deseja compartilhar seus conhecimentos?</h3>
		<p class="subtitle">Venha fazer parte da família education!</p>
		<RouterLink class="button" to="">Saber mais</RouterLink>
	</div>		
</template>

<style scoped>
	.container-become-professor {
		padding: 75px;
		box-shadow: 0 0 20px #ccc;
		border-radius: 30px;
		margin: 0 40px 0 40px;
	}

	.title {
		margin: 0;
		font-size: 35px;
		margin-bottom: 20px;
	}

	.subtitle {
		margin: 0;
		font-size: 20px;
		margin-bottom: 40px;
	}

	.button{
		background-color: #ec1464;
		color: white;
		padding: 10px 24px;
		margin-top: 10px;
		height: 22px;
		width: 230px;
		font-size: 13pt;
		text-align: center;
		border-radius: 10px;
	}
	@media (hover:hover) {
		.button:hover {
			padding: 6px 20px;
			color: #ec1464;
			background-color: #fff;
			border-style: solid;
		}
	}
</style>