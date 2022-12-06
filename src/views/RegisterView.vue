<template>
    <div class="background">
        <img style="z-index: 2" src="../assets/education1.svg">
        <img style="filter: blur(6px); z-index: 1; width: 1750px;" src="../assets/background.jpg">
        <div class="registerBox">
            <img class="img" @click="$router.push('/')" width="75" src="../assets/educationrosa.png">
            <span class="title">Cadastro de Estudante</span>
            <div style="display: flex;">
                <input style="margin-right: 10px; width: 100%;" placeholder="Nome" type="text">
                <input style="width: 100%;" placeholder="Sobrenome" type="text">
            </div>
            <input placeholder="Instituição de Ensino" type="text">
            <input placeholder="E-mail" type="email">
            <input placeholder="Senha" type="password">
            <input placeholder="Confirme a senha" type="password">
            <div style="display: flex; flex-direction: row; justify-content: center; align-items: center;">
                <input class="checkbox" type="checkbox">
                <div class="terms">
                    <span style="margin-top: 30px; margin-right: 2px">Li e concordo com os</span>
                    <span class="link" @click="$router.push('/termos')"><strong>Termos de Uso</strong></span>
                    <span>.</span>
                </div>
            </div>
            <input class="btn" type="submit" value="Cadastrar-se">
            <div class="login">
                <span style="margin-right: 3px">Já tem uma conta? Clique em</span>
                <span style="color:#ec1464" class="link" @click="$router.push('/login')"><strong>entrar</strong></span>
                <span>.</span>
            </div>
        </div>   
    </div>
</template>

<script>
    import TextField from '../components/Register/TextFieldComponent.vue'
    export default {
        data: () => ({
            items: ['Nome','Sobrenome','E-mail','Senha']
        }),
        components: {
            TextField,
        }
    }
</script>

<style scoped>
    .checkbox{
        width: 25px;
        height: fit-content;
        cursor:pointer;
    }
    .registerBox{
        padding: 20px 20px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 450px;
        height: 650px;
        background: white;
        border-radius: 15px;
        z-index: 3;
        justify-content: space-between;
        border: solid #ec1464;
        position: absolute;
    }
    .background{
        width: 100%;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        overflow-x: hidden;
        overflow-y:hidden;
    }
    input{
        border-style: none;
        border-radius: 2px;
        width: 100%;
        height: 60px;
        padding: 5px 10px;
        border-bottom: solid #ec1464 2px;
        /* background-color: #dbd2d5; */
        font-family: 'Questrial', sans-serif;
        font-size: 12pt;
        color: #455A64;
    }
    .title{
        font-size: 25pt;
    }
    .btn{
        cursor: pointer;
        background-color: #ec1464;
        color: white;
        font-family: 'PoppinsBold';
        transition: 0.3s
    }
    .terms{
        font-family:'Questrial', sans-serif;
    }

    .link{
        cursor: pointer;
        transition: 0.5s;
    }
    .img{
        cursor: pointer;
        transition: 0.5s;
    }
    @media (hover:hover){
        .link:hover{
            border-bottom: solid #ec1464 1px;
        }
        .btn:hover{
            transform: scale(1.02);
        }
        .img:hover{
            transform: scale(1.04)
        }
    }
    .login{
        font-family: 'Questrial', sans-serif;
    }
</style>