<template>
    <div>
        <h1>Directivas</h1>
        <h3>{{ $data }}</h3>
        <label class="form-label">Introduzca un numero:</label>
        <input type="number" v-model="numero" class="form-control" />
        <hr />
        <h3 v-if="numero > 0" style="color: green">POSITIVO</h3>
        <h3 v-else-if="numero < 0" style="color: red">NEGATIVO</h3>
        <h3 v-else style="color: BLUE">CERO</h3>
        <ul v-if="series.length > 0">
            <li v-for="serie in series" :key="serie">{{ serie }}</li>
        </ul>
        <hr />
        <div id="div1">
            <label class="form-label">Introduce la serie</label>
            <input type="text" v-model="serieNueva" class="form-control" />
            <br />
            <button id="button" @click="nuevaSerie()">Crear serie</button>
        </div>
    </div>
</template>

<script>
export default {
    name: "DirectivasComponent",
    data() {
        return {
            numero: 0,
            nombre: "Alumno",
            series: ["Pulso", "Bull", "911"],
            serieNueva: "",
        };
    },
    methods: {
        nuevaSerie() {
            this.series.push(this.serieNueva);
        },
    },
};
</script>

<style scoped>
#div1 {
    width: 80%;
    margin: auto;
    background: linear-gradient(to right, #5389ca, #5359ca, #8953ca);
    border-radius: 5px;
    color: white;
    padding: 10px;
}
#button {
    background-color: #00000000;
    border-radius: 5px;
    color: white;
    border-color: white;
    margin: auto;
    display: block;
    padding: 10px;
}
</style>
