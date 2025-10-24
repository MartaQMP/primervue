<template>
    <div>
        <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <a class="navbar-brand" href="#">Menu</a>
                <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="navbar-toggler-icon"></span>
                </button>
                <div class="collapse navbar-collapse" id="navbarNav">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <router-link to="/" class="nav-link">Home</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/cine" class="nav-link">Cine</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/musica" class="nav-link">Musica</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/ciclo" class="nav-link">Ciclo Vida</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/directivas" class="nav-link">Directivas</router-link>
                        </li>
                        <li class="nav-item">
                            <router-link to="/parimpar" class="nav-link">Par Impar</router-link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: "MenuComponent",
};
</script>

<style scoped>
ul#menu li {
    display: inline;
    padding: 10px;
}
</style>
