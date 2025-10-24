<template>
    <div>
        <h1>Mi primer vue de viernes</h1>
        <h2>Su nombre es {{ nombre }}</h2>
        <h2>Su edad es {{ edad }}</h2>
        <img src="../assets/images/batman.png" />
    </div>
</template>

<script>
//VUE UTILIZA CODIGO JS (ESPECIAL)
//CADA COMPONENT QUE GENEREMOS DEBE TENER UN NOMBRE OBLIGATORIO
//Y DEBEMOS EXPORTARLO CON DICHO NOMBRE. EL name ES LA ETIQUETA QUE
//UTILIZARAN OTROS COMPONENTS PARA DIBUJAR
export default {
    name: "HolaMundo",
    data() {
        //LAS VARIABLES SON DECLARADAS EN FORMATO JSON
        //DENTRO DE UN RETURN
        return {
            nombre: "Marta",
            edad: 20,
            miArray: [],
            objeto: {},
        };
    },
};
</script>

<style scoped>
@import "../assets/css/estilos.css";
</style>
