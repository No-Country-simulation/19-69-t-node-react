import express from "express";

import { foodRoutes } from "./api/routes/index.js";
import { tagsRoutes } from "./api/routes/index.js";
import { userRoutes } from "./api/routes/index.js";
import { countriesRoutes } from "./api/routes/index.js";
import { ingredientsRoutes } from "./api/routes/index.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api/food", foodRoutes);
app.use("/api/tags", tagsRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/ingredients", ingredientsRoutes);
app.use("/api/users", userRoutes);


app.listen(port, () => {
    console.log("Server listening on port", port);
});