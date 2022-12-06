<template>
	<div class="container">
		<div class="wrapper-professor"> 
			<div class="img"></div>
			<h3>Duarte Thiago</h3>
		</div>
		<div class="wrapper-information">
			<p v-if="this.urgency">Data escolhida: <span class="value">{{this.urgencyText}}</span></p>
			<p v-if="!this.urgency">Data escolhida: <span class="value">{{this.date}}</span></p>
			<p v-if="!this.urgency">Horário escolhido: <span class="value">{{this.time}}</span></p>
			<p>Valor: <span class="value">50$</span></p>
			<label>Texto que será enviado:</label>
			<textarea name="" id="" cols="40" rows="8">{{this.text}}</textarea>
		</div>
		<div class="wrapper-payment">
			<h3>Formas de pagamento</h3>
			<div class="switch-field">
				<input @click="switchFieldTrue" type="radio" id="radio-one" name="switch"/>
				<img src="../assets/pix_icon_198027.png" alt="">
				<input @click="switchFieldTrue" type="radio" id="radio-two" name="switch"/>
				<img src="../assets/credit-card.png" alt="">
			</div>
		</div>
	</div>
</template>

<script>
	import { scheduleStore } from '../store/schedule'

	const store = scheduleStore() 

	export default {
		data() {
			return {
				urgency: store.$state.scheduleData.urgency,
				text: store.$state.scheduleData.text,
				date: store.$state.scheduleData.date,
				time: store.$state.scheduleData.time,
				urgencyText: 'Aguardando resposta do professor'
			}
		},
		methods: {
			getDate() {
				// this.date = new Date().toLocaleDateString() 
				console.log(this.date.toLocaleDateString)
			},
			getTime() {
				console.log(this.time)
			}
		},
		mounted() {
			console.log('textP:', this.text)
		}
	}

</script>

<style scoped>

	.container {
		margin-top: 60px;
		
	}

	.wrapper-professor {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}

	.img {
		height: 250px;
		width: 250px;
		background-image: url('../components/img/professor.jpeg');
		background-repeat: no-repeat;
		background-size: cover;
		background-position: center;
		border-radius: 5px;
		box-shadow: rgba(14, 30, 37, 0.12) 0px 2px 4px 0px, rgba(14, 30, 37, 0.32) 0px 2px 16px 0px;
	}

	.wrapper-information {
		display: flex;
		flex-direction: column;
		align-items: center;
		
	}

	.value {
		padding-left: 10px;
	}

	.wrapper-payment {
		display: flex;
		flex-direction: column;
		align-items: center;
	}

	label {
		margin: 10px 0;
	}

</style>