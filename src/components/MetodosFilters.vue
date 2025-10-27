<template>
    <div id="div1">
        <h1>Metodos filters</h1>
        <hr />
        <ul>
            <li v-for="num in numeros" :key="num">Numero: {{ num }}, Doble: {{ $filters.getNumeroDoble(num) }}</li>
        </ul>
        <ul>
            <li v-for="nombre in nombres" :key="nombre">{{ $filters.mayuscula(nombre) }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "MetodosFilters",
    data() {
        return {
            numeros: [3, 58, 23, 30],
            nombres: ["Diana", "Alicia", "Marta"],
        };
    },
};
</script>

<style scoped>
#div1 {
    width: 90%;
    margin: auto;
}
h1 {
    text-align: center;
    color: white;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
}
</style>
