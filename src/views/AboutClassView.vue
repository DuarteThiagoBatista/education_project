<template>
	<div class="container">
		<div class="container-about">
			<div class="wrapper-about">
				<h1 class="title">Professor de Física, Matemática e Química, Aulas Particulares e Reforço Escolar, Licenciado em Física UFS</h1>
				<div class="subtitle">Sergipe. Na casa dele. Em minha casa webcam.</div>
			</div>
			<div>
				<h2 class="title">Sobre a aula</h2>
				<p>
					Lucas ipsum dolor sit amet jinn palpatine c-3po fisto obi-wan windu darth hutt moff palpatine. Yavin lando baba kessel darth. Kamino antilles anakin ben fett. Skywalker coruscant hutt padmé darth luke mandalore jar. Yavin palpatine wampa solo maul luuke ahsoka obi-wan moff. Moff hutt lars fett wicket hutt. Mace obi-wan kenobi sidious skywalker luke. Wedge kashyyyk darth windu solo tatooine moff owen. Windu solo kenobi coruscant palpatine. Organa cade secura wookiee dooku wedge organa windu chewbacca.
					Skywalker windu boba amidala darth hutt kessel chewbacca. Biggs sidious antilles mara dantooine mon kenobi hutt. Skywalker calamari wampa solo ewok bothan darth ventress mothma. Utapau watto sidious obi-wan. Mothma jinn boba jinn biggs ahsoka skywalker dagobah lando. Darth mace yoda boba dooku cade. Solo gamorrean solo vader darth. Han jinn solo skywalker hutt han moff. C-3po lando utapau mon. Skywalker jade darth leia. Moff grievous dantooine mon ponda mon jinn leia. Mothma palpatine lando binks gamorrean.
					Dantooine jango yoda darth. Skywalker k-3po coruscant tatooine owen maul gonk. Owen maul binks antilles mara darth darth. Ventress darth lars anakin yavin mara. Alderaan solo antilles moff gonk kashyyyk moff jango jabba. Sebulba jabba darth solo hutt mustafar lobot. Dagobah sidious skywalker jabba windu. Ventress biggs jabba tatooine. Padmé jango c-3po dantooine dagobah. Moff ponda kenobi calrissian qui-gonn anakin jango padmé biggs. Jinn tatooine organa wedge kessel mon obi-wan calamari wookiee.
				</p>
			</div>
			<div>
			
			</div>
			<div>
				<h2 class="title">Mais sobre Palpatine</h2>
				<p>
					Lucas ipsum dolor sit amet jinn palpatine c-3po fisto obi-wan windu darth hutt moff palpatine. Yavin lando baba kessel darth. Kamino antilles anakin ben fett. Skywalker coruscant hutt padmé darth luke mandalore jar. Yavin palpatine wampa solo maul luuke ahsoka obi-wan moff. Moff hutt lars fett wicket hutt. Mace obi-wan kenobi sidious skywalker luke. Wedge kashyyyk darth windu solo tatooine moff owen. Windu solo kenobi coruscant palpatine. Organa cade secura wookiee dooku wedge organa windu chewbacca.
					Skywalker windu boba amidala darth hutt kessel chewbacca. Biggs sidious antilles mara dantooine mon kenobi hutt. Skywalker calamari wampa solo ewok bothan darth ventress mothma. Utapau watto sidious obi-wan. Mothma jinn boba jinn biggs ahsoka skywalker dagobah lando. Darth mace yoda boba dooku cade. Solo gamorrean solo vader darth. Han jinn solo skywalker hutt han moff. C-3po lando utapau mon. Skywalker jade darth leia. Moff grievous dantooine mon ponda mon jinn leia. Mothma palpatine lando binks gamorrean.
					Dantooine jango yoda darth. Skywalker k-3po coruscant tatooine owen maul gonk. Owen maul binks antilles mara darth darth. Ventress darth lars anakin yavin mara. Alderaan solo antilles moff gonk kashyyyk moff jango jabba. Sebulba jabba darth solo hutt mustafar lobot. Dagobah sidious skywalker jabba windu. Ventress biggs jabba tatooine. Padmé jango c-3po dantooine dagobah. Moff ponda kenobi calrissian qui-gonn anakin jango padmé biggs. Jinn tatooine organa wedge kessel mon obi-wan calamari wookiee.
				</p>
			</div>
		</div>
		<div class="container-request">
			<div class="card">
				<div class="perfil-wrapper">
					<div class="img"></div>
					<p class="name">Duarte Thiago</p>
				</div>
				<ul class="card-content">
					<li>
						<span>Preço hora/aula</span>
						<span class="value">R$120</span>
					</li>
					<li>
						<span>Tempo de resposta</span>
						<span class="value">1h</span>
					</li>
					<li>
						<span>Número de alunos</span>
						<span class="value">34</span>
					</li>
				</ul>
			</div>
			<div class="wrapper-request">
				<h1 class="title">Solicite sua aula</h1>
				<form action="">
					<h3><label for="textarea">Informe o que deseja aprender</label></h3>
					<textarea v-model="text" name="textarea" id="" cols="40" rows="5"></textarea>
					<h3>Data da aula</h3>
					<div class="switch-field">
						<input @click="switchTrue" type="radio" id="radio-one" name="switch" checked/>
						<label for="radio-one"> <span>Com urgência</span></label>
						<input @click="switchFalse" type="radio" id="radio-two" name="switch"/>
						<label for="radio-two"> <span>Propor data</span></label>
					</div>
					<DatePicker class="calendar" v-if="!urgency" v-model="date" mode="dateTime" column="1" :first-day-of-week="1" is24hr :minute-increment="5"/>
				</form>
				<RouterLink @click="saveData" class="button" to="/agendar/listagem-professor/sobre-aula-x/metodo-pagamento">Enviar</RouterLink>
			</div>
		</div>
	</div>
</template>

<script>
  import { DatePicker } from 'v-calendar';
  import 'v-calendar/dist/style.css'
	import { scheduleStore } from '../store/schedule'

	const store = scheduleStore() 
  
  export default {
		components: {
		  DatePicker,
	  },
		data() {
			return {
				urgency: true,
				text: '',
				date: new Date(),
			}
		},
		methods: {
			switchTrue() {
				this.urgency = true;
			},
			switchFalse() {
				this.urgency = false;
			},
			saveData() {
				if (this.urgency) {
					store.$state.scheduleData.urgencyText = 'Aguardando resposta do professor';
				}
					const date = new Date(this.date).toLocaleDateString();
					const time = new Date(this.date).toLocaleTimeString();
					
					store.$state.scheduleData.date = date;
					store.$state.scheduleData.time = time;
					store.$state.scheduleData.text = this.text;
					store.$state.scheduleData.urgency = this.urgency;
					console.log('date: ', date);
					console.log('time: ', time);
					console.log('textTTT: ', text);
				}
		},
		updated() {
			// store.$state.scheduleData.text = this.text;
			// store.$state.scheduleData.urgency = this.urgency;
			console.log('text: ', this.text);
			console.log('urgency: ', this.urgency);
		}
	}
</script>

<style scoped>
	.container {
		display: flex;
		flex-direction: row;
		padding: 15px;
	}
	.container-about {
		width: 60%;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
		padding: 0 10px 0 10px;
	}
	.wrapper-about {
		background-color: #1A2DF320;
		border-radius: 10px;
		margin: 0 10px 15px 0;
		padding: 10px;
		box-shadow: 0 0 20px #ccc;
	}
	.container-request {
		padding: 0 10px 0 10px;
		width: 40%;
	}
	.card {
		box-shadow: 0 0 20px #ccc;
		min-height: 250px;
		width: 100%;
		margin-bottom: 50px;
		border-radius: 10px;
		display: flex;
		align-items: center;
	}

	.perfil-wrapper {
		padding: 20px;
	}
	.img {
		height: 150px;
		width: 150px;
		background-image: url('../components/img/professor.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 5px;
		box-shadow: 0.5rem 0.5rem #ec146420, -0.5rem -0.5rem #1A2DF320;
	}
	.name {
		font-size: 20px;
	}
	ul {
		margin:  0 0 60px 0;
		padding: 0;
	}
	li {
		list-style-type: none;
		padding-bottom: 10px;
	}
	.value {
		margin-left: 15px;
		border-color: #ec146420;
		padding: 3px;
		border-radius: 10px;
		border-style: solid;
	}
	.wrapper-request {
		padding: 10px;
		background-color: #ec146420;
		border-radius: 10px;
		box-shadow: 0 0 20px #ccc;
		min-height: 400px;
	}
	.title {
		margin: 0;
		line-height: normal;	
		margin: 10px 0;
	}

	.switch-field {
		margin: 20px 0;
	}

	.calendar {
		margin-bottom: 40px;
	}

	.button{
		font-family: "PoppinsBold";
		background-color: #ec1464;
		color: white;
		padding: 10px 24px;
		height: 50px;
		width: 150px;
		font-size: 13pt;
		border-radius: 10px;
		border: none;
		text-align: center;
		margin: 20px 0;
	}
	@media (hover:hover) {
		.button:hover {
			padding: 6px 20px;
			color: #ec1464;
			background-color: #ec146420;
			border-style: solid;
		}
	}

</style>
