import fetch from "node-fetch";
import { Headers } from "./types";
import { removeEnclosing } from "./utils";

async function getRequest(s: string, headers?: Headers): Promise<Object> {
  const url = new URL(removeEnclosing(s));
  return fetch(url, { headers }).then((res) => res.json()).catch(err => console.log(err));
}

async function postRequest(s: string, body: Object, headers?: Headers): Promise<Object> {
  const url = new URL(removeEnclosing(s));
  return fetch(url, {
    method: "POST",
    headers: { ...headers, "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export { getRequest, postRequest };
