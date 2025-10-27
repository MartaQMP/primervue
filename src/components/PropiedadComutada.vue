<template>
    <div id="div1">
        <h1>Propiedad Conmutada</h1>
        <hr/>
        <label class="form-label">Introduza un numero:</label>
        <input class="form-control" type="number" v-model="numero"/>
        <div v-html="evaluarNumero"></div>
        <ul>
            <li v-for="juego in juegosRojos" :key="juego" v-html="juego"></li>
        </ul>
        <ul>
            <li v-for="juego in juegos" :key="juego">{{ juego }}</li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "PropiedadConmutada",
    computed: {
        evaluarNumero() {
            let data = "";
            if (this.numero % 2 == 0) {
                data = "<h4 style='color:green'>Par</h4>";
            } else {
                data = "<h4 style='color:red'>Inpar</h4>";
            }
            return data;
        },
        //SE ESCRIBE COMO UN METODO PERO SE UTILIZA COMO UNA PROPIEDAD
        juegosRojos() {
            //Hay q crear copias no igualar a un data
            let datos = [...this.juegos];
            let i = 0;
            for (let juego of this.juegos) {
                let juegoRojo = "<span style='font-weight:bold'>" + juego + "</span>";
                datos[i] = juegoRojo;
                i++;
            }
            return datos;
        },
    },
    data() {
        return {
            numero: 0,
            juegos: ["Parchis", "Oca", "Monopoly", "Mus"],
        };
    },
};
</script>

<style scoped>
#div1{
    width: 90%;
    margin: auto;
}
h1{
    text-align: center;
    color:white;
    background-color: black;
    padding: 10px;
    border-radius: 5px;
}
</style>
