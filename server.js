const express = require('express');
const app = express();
const PORT = 8080;
const routes = require("./src/routes/index")

app.use("/",routes)







app.listen(PORT, () => {
    console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
