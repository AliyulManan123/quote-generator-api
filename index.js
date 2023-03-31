import express from 'express';
import routes from "./src/routes.js";

const app = express();
app.use(routes)

app.listen(3000,()=>{
    console.log('listening on port 3000')
})