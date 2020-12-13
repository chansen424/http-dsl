import express = require("express");
import bodyparser = require("body-parser");
import cookieparser = require("cookie-parser");

import {
  getGreeting,
  getNames,
  setGreeting,
  resetNames,
  editName,
  PostResponse,
} from "./db-funtions";

const app: express.Application = express();
const PORT = process.env.PORT || 8000;
app.use(bodyparser.json());
app.use(cookieparser());

function responseUtil(
  res: express.Response,
  callback: (
    ...args: any
  ) => Promise<PostResponse | { data: string | string[] }>,
  ...args: any
) {
  callback(...args)
    .then((result) => res.status(200).send(result))
    .catch((err) => {
      console.log(err);
      res.status(400).send({ error: err.message });
    });
}

app.get("/", (_, res) =>
  res.send({ data: "Welcome to a quick demo of http-dsl!" })
);

app.get("/greeting", (_, res) => responseUtil(res, getGreeting));

app.get("/names", (_, res) => responseUtil(res, getNames));

app.get("/user", (req, res) => res.send({ user: req.cookies.user }));

app.get("/protected", (req, res) => {
  if (req.headers.authorization) {
    const tokens = req.headers.authorization.split(" ");
    if (tokens[0] === "Bearer" && tokens[1] === "nateisagenius") {
      res
        .status(200)
        .send({ success: true, data: "Hat's off on this semester, Nate!" });
    } else {
      res.status(403).send({ error: "Insufficient permissions" });
    }
  } else {
    res.status(403).send({ error: "You are not permitted to use this route." });
  }
});

app.post("/set-greeting", (req, res) =>
  responseUtil(res, setGreeting, req.body.greeting)
);

app.post("/reset-names", (_, res) => responseUtil(res, resetNames));

app.post("/add-name", (req, res) => responseUtil(res, editName, req.body.name));

app.post("/remove-name", (req, res) =>
  responseUtil(res, editName, req.body.name, true)
);

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
