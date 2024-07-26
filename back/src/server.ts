import express from "express";

import { countriesRoutes, foodRoutes, ingredientsRoutes, reservationsRoutes, tagsRoutes, userRoutes } from "./api/routes/index.js";

const app = express();
app.use(express.json());
const port = 3000;

app.use("/api/food", foodRoutes);
app.use("/api/tags", tagsRoutes);
app.use("/api/countries", countriesRoutes);
app.use("/api/ingredients", ingredientsRoutes);
app.use("/api/users", userRoutes);
app.use("/api/reservations", reservationsRoutes);


app.listen(port, () => {
    console.log("Server listening on port", port);
});