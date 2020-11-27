import { db } from './firebase-config'
import { firestore } from 'firebase-admin'

const ref = db.collection("data").doc("editable")

type PostResponse = {
  success: boolean,
  error?: string
}

export async function getGreeting(): Promise<string> {
  const data: FirebaseFirestore.DocumentData = (await ref.get()).data()!
  return data.greeting
}

export async function getNames(): Promise<string[]> {
  const data: FirebaseFirestore.DocumentData = (await ref.get()).data()!
  return data.names
}

export async function setGreeting(greeting: string): Promise<PostResponse> {
  return ref.update({
    greeting
  }).then(() => {
    return {success: true}
  }).catch(err => {
    return {
      success: false,
      error: err.message
    }
  })
}

export async function resetNames(): Promise<PostResponse> {
  return ref.update({
    names: []
  }).then(() => {
    return {success: true}
  }).catch(err => {
    return {
      success: false,
      err: err.message
    }
  })
}

export async function editName(name: string, remove: boolean = false): Promise<PostResponse> {
  return ref.update({
    names: remove 
    ? firestore.FieldValue.arrayRemove(name) 
    : firestore.FieldValue.arrayUnion(name)
  }).then(() => {
    return {success: true}
  }).catch(err => {
    return {
      success: false,
      err: err.message
    }
  })
}
