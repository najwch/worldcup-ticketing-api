import { app } from "./infrastructure/app";

export default {
    port : 3000,
    fetch : app.fetch
};