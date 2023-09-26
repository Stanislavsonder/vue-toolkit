import VImage from "./VImage.vue";
import {App, Plugin} from "vue";

export default {
    install(app: App) {
        app.component('VImage', VImage)
    }
} as Plugin

export {
    VImage
}
