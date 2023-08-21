import { MongoClient } from 'mongodb'
const NEXT_PUBLIC_USER = process.env.NEXT_PUBLIC_USER;
const options = { useNewUrlParser: true }

let connectDB

if (process.env.NODE_ENV === 'development') {
  if (!global._mongo) {
    global._mongo = new MongoClient(NEXT_PUBLIC_USER, options).connect()
  }
  connectDB = global._mongo
} else {
  connectDB = new MongoClient(NEXT_PUBLIC_USER, options).connect()
}
export { connectDB }