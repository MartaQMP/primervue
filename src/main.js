import { createApp } from "vue";
import App from "./App.vue";
import router from "./Router";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

let app = createApp(App)
app.config.globalProperties.$filters = {
    //CREAMOS DOS METODOS QUE RECIBIRAN ALGO Ç
    //Y DEVOLVERAN UN RESULTADO
    mayuscula(dato){
        return dato.toUpperCase()
    },
    getNumeroDoble(numero){
        return numero * 2
    }
}

app.use(router).mount("#app");
