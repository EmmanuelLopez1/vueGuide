import { createApp } from 'vue'
import App from './App.vue'

const app = createApp(App)
app.mount("#app")

app.config.errorHandler = (err)=>{
    console.log("el error es");
    console.log(err);
}

app.config.globalProperties = {
    globalTitle:"titulo global"

}