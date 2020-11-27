import { db } from "./firebase-config";
import { firestore } from "firebase-admin";

const ref = db.collection("data").doc("editable");

export type PostResponse = {
  success: boolean;
  error?: string;
};

export async function getGreeting(): Promise<{ data: string }> {
  const data: FirebaseFirestore.DocumentData = (await ref.get()).data()!;
  return { data: data.greeting };
}

export async function getNames(): Promise<{ data: string[] }> {
  const data: FirebaseFirestore.DocumentData = (await ref.get()).data()!;
  return { data: data.names };
}

async function updateObject(updatedObj: any): Promise<PostResponse> {
  return ref
    .update(updatedObj)
    .then(() => {
      return { success: true };
    })
    .catch((err) => {
      return {
        success: false,
        error: err.message,
      };
    });
}

export function setGreeting(greeting: string): Promise<PostResponse> {
  return updateObject({ greeting });
}

export function resetNames(): Promise<PostResponse> {
  return updateObject({ names: [] });
}

export function editName(
  name: string,
  remove: boolean = false
): Promise<PostResponse> {
  return updateObject({
    names: remove
      ? firestore.FieldValue.arrayRemove(name)
      : firestore.FieldValue.arrayUnion(name),
  });
}
