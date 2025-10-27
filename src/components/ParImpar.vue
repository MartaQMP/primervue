<template>
    <div>
        <label class="form-label">Introduce numero</label>
        <input class="form-control" v-model="numero" />
        <br />
        <button class="btn btn-info" @click="parImpar()">Generar numero</button>
        <h3 v-if="numero % 2 == 0" style="color: green">Par</h3>
        <h3 v-else style="color: red">Inpar</h3>
    </div>
</template>

<script>
export default {
    name: "ParImpar",
    data() {
        return {
            numero: 0,
        };
    },
    methods: {
        parImpar() {
            this.numero = parseInt(Math.random() * 50 + 1);
        },
    },
};
</script>

<style scoped></style>
