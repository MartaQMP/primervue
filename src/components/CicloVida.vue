<template>
    <div>
        <h1>Ciclo de vida y metodos VUE</h1>
        <h2>{{ mensaje }}</h2>
        <button @click="cambiarMensaje()">Cambiar Mensaje</button>
    </div>
</template>

<script>
export default {
    name: "CicloVida",
    data() {
        return {
            mensaje: "Hoy es viernes",
        };
    },
    methods: {
        //AQUI INCLUIMOS NUESTROS METODOS PERSONALIZADOS
        cambiarMensaje() {
            //PARA ACCEDER A LAS VARIABLES DE data() DEL COMPONENT
            //DEBEMOS UTILIZAR LA PALABRA this
            this.mensaje = "Hoy se sale";
        },
    },
    mounted() {
        console.log("Mounted");
    },
    created() {
        console.log("Created");
    },
    updated() {
        console.log("Update");
    },
    unmounted() {
        console.log("Unmounted");
    },
};
</script>

<style scoped></style>
