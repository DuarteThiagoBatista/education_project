<template>
	<div class="container">
		<ul class="wrapper-professor">
			<li class="professor" v-for="item in professores">
				<RouterLink to="/agendar/listagem-professor/sobre-aula-x">
					<div >
						<div class="img"></div>
						<div class="name">{{ item.title }}</div>
						<div class="description">{{ item.description }}</div>
					</div>
				</RouterLink>
			</li>
		</ul>
	</div>
</template>

<script setup>
	import { ref } from 'vue'

	const professores = ref([
		{title: 'Thiago', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Paulo', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Pedro', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Osmario', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Thiago', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Thiago', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Paulo', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Paulo', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Pedro', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Pedro', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Osmario', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Thiago', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Thiago', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Paulo', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Paulo', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Pedro', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Pedro', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Osmario', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'},
		{title: 'Osmario', description: 'Lucas ipsum dolor sit amet kessel draethos lama gungan melodie darth castell snootles padmé moddell.'}
	])

</script>

<style scoped>
	
	.wrapper-professor {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
		padding: 0;
	}

	.professor {
		width: 200px;
  	height: 400px;
		list-style-type: none;
	}

	.img {
		width: 200px;
  	height: 150px;
		background-image: url('./img/professor.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		background-color: #1A2DF3;
		margin-bottom: 10px;
		border-radius: 5px;
	}

	.name {
		font-size: 18px;
		color: #455A64;
	}

	.description {
		color: #455A64;
	}
</style>