import bodyParser from "body-parser";
import express from "express";
import path from "path";
import cors from "cors";

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const router = express.Router();

router
  .route("templates")

  .get(function(req, res) {});

app.use(router);
app.use("/*", staticFiles);
app.set("port", process.env.PORT || 3001);
app.listen(app.get("port"), () => {
  console.log(`Listening on ${app.get("port")}`);
});
