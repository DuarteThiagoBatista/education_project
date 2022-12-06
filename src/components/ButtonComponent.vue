<template>
    <div class="btn">
        {{ btnName }}
    </div>
</template>

<style scoped>
.btn{
    cursor:pointer;
    padding: 5px 10px;
    border-style: none;
    border-radius: 5px;
    background-color: #dbd2d5;
    color: #ec1464;
    width: 200px;
    font-size: large;
    text-align: center;
    transition: 0.2s;
}

@media (hover:hover){
    .btn:hover{
        /* border-radius: 10px; */
        /* box-shadow: 2px 2px 5px rgba(0, 0, 0, 0.5); */
        background-color: #c5bdc0;
    }
}
</style>

<script>
export default{
     props:{
        btnName: String,
     },
}


</script>