<template>
    <div style="display: flex; flex-direction: row; align-items: center; justify-content: space-around;">
        <div style="display:flex; flex-direction:column; justify-content: space-evenly; align-items: center">
            <div class="title">
                <h1 v-if="isSelected">Você dá aula de</h1>
                <h1 v-if="isSelected" style="margin-left: 9px; color: #ec1464">{{ subject }}</h1>
                <h1 v-else>O que você ensina?</h1>
            </div>
            
            <div class="wrapper-subjects">
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
                <CheckboxComponent @click="isSelected = !isSelected"/>
            </div>
        </div>

        <div style="display:flex; flex-direction:column; justify-content: space-evenly; align-items: center">
            <div class="title">
                <h1>Sobre sua</h1>
                <h1 style="margin-left: 9px; color: #ec1464">aula</h1>
            </div>
            <h4>(12 palavras no mínimo)</h4>
            <textarea v-model="text" class="textbox" placeholder="ex: Formado no conservatório e artista plástico dá aulas de cantos violão para todos os níveis. Metodologia personalizada e descontraída!"></textarea>
    </div>
</div>
</template>

<script>
import CheckboxComponent from '../Schedule/CheckboxComponent.vue'

export default {
    data: () => ({
        subject: "Matemática",
        isSelected: false,
        quantity: 0
    }),
    components:{
        CheckboxComponent,
    },
}
</script>

<style scoped>
.title{
    display:flex;
    flex-direction: row;
    justify-content: center;
}
h1{
    text-align: center;
    font-size: 32px;
}
@media screen and (max-height: 1800px) {
    .wrapper-subjects{
        overflow:hidden scroll;
        height:250px;
    }
}
.wrapper-subjects{
    display: flex;
    flex-direction: column;
    width: 300px;
}
.checkbox{
    width: 100%;
    margin-bottom: 10px
}
.checkboxSelected{
    width: 100%;
    margin-bottom: 10px
}

h4{
    text-align: center;
    margin: -40px 141px 0 0;
}

::placeholder{
    color: #455a64b7;
    opacity: 0.5;
}

.textbox{
    border: hidden;
    border-radius: 10px;
    background-color: #dbd2d5;
    color: #455A64;
    font-family: 'Questrial', sans-serif;
    font-size: 12pt;
    width: 600px;
    height: 200px;
    margin-top: 50px;
    resize: none;
    padding: 10px;
    text-align: justify;
}

</style>