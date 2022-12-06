<template>
	<div class="find-teacher-container">
		<div class="wrapper-teacher">
			<h3 class="title">Professores certificados</h3>
			<p class="subtitle">Escolha o professor que mais lhe agrade!</p>
			<RouterLink class="button" to="/agendar/listagem-professor">Encontre seu professor</RouterLink>
		</div>
		<div class="container-img">
			<ul class="wrapper-img-content">
				<li class="professor" v-for="item in professores">
					<RouterLink class="wrapper-img" to="/agendar/listagem-professor/sobre-aula-x">
						<div>
							<div class="img">
								<div class="name">{{ item.title }}</div>
								<!-- <div class="description">{{ item.description }}</div> -->
							</div>
						</div>
					</RouterLink>
				</li>
			</ul>
		</div>
	</div>		
</template>

<script setup>
	import { ref } from 'vue'

	const professores = ref([
		{title: 'Thiago', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Paulo', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Pedro', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Osmario', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'}
	])

</script>

<style scoped>
	.find-teacher-container {
		display: flex;
		justify-content: space-between;
	}

	.title {
		margin: 0;
		font-size: 35px;
		margin-bottom: 10px;
	}

	.subtitle {
		margin: 0;
		font-size: 18px;
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

	.container-img {
		height: 50%;
		width: 50%;
		display: flex;
		padding-left: 120px;
	}

	.wrapper-img-content {
		height: 50%;
		width: 50%;
		display: grid;
		gap: 20px;
		grid-template-columns: auto auto;
		margin: 0;
		padding: 0;
		background-color: #54545405;
	}

	.professor {
		list-style-type: none;
  	height: 150px;
		width: 200px;

	}

	.wrapper-img {
		height: 150px;
		width: 200px;

	}

	.img {
		height: 150px;
		width: 200px;
		background-image: url('./img/professor.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-color: #1A2DF3;
		border-radius: 5px;
		margin: 0;
		display: flex;
	}

	.name {
		font-size: 18px;
		color: #ffffff;
		align-self: flex-end;
		margin: 0 0 15px 15px;
	}

	.description {
		color: #ffffff99;
	}

	@media(hover:hover) {
		.img:hover {
			box-shadow: 0 0 20px #ccc;

		}
	}
</style>