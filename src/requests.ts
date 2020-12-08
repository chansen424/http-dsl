import fetch from "node-fetch";
import { removeEnclosing } from "./utils";

async function getRequest(s: string): Promise<Object> {
  const url = new URL(removeEnclosing(s));
  return fetch(url).then((res) => res.json());
}

async function postRequest(s: string, body: Object): Promise<Object> {
  const url = new URL(removeEnclosing(s));
  return fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(body),
  });
}

export { getRequest, postRequest };
