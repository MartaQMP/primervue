<template>
    <div>
        <label class="form-label">Introduce numero</label>
        <input class="form-control" v-model="numero"/>
        <button></button>
    </div>
</template>

<script>
export default {
    name: "ParImpar",
    data(){
        return{
            numero: 0
        }
    }
};
</script>

<style scoped></style>
