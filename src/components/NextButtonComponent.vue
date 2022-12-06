<template>
    <div class="button">
        Próximo
    </div>
</template>

<script>
export default{
    data: () => ({
        isClicked: false
    }),
    methods: {
    }
}


</script>

<style scoped>

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

/*.btn{
    padding: 5px 10px;
    border-style: none;
    border-radius: 5px;
    border-color: #ec1464;
    background-color: #ec1464;
    color: white;
    width: 350px;
    font-size: large;
    text-align: center;
    cursor: pointer;
}

/* @media (hover:hover){
    .btn:hover{
        border-color: #ff2474;
        background-color: #ff2474;
    }
} */
</style>