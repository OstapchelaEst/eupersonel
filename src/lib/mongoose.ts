import mongoose from 'mongoose'

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error(
    'Please define the MONGODB_URI environment variable inside .env.local'
  )
}

declare global {
  var mongoose: {
    conn: typeof mongoose | null
    promise: Promise<typeof mongoose> | null
  }
}

let cached = global.mongoose

if (!cached) {
  cached = global.mongoose = { conn: null, promise: null }
}

async function dbConnect() {
  if (cached.conn) {
    return cached.conn
  }

  if (cached.promise) {
    cached.conn = await cached.promise
    return cached.conn
  }

  const opts = {
    bufferCommands: false,
  }
  //@ts-expect-error type
  cached.promise = mongoose.connect(MONGODB_URI!, opts)

  cached.conn = await cached.promise
  return cached.conn
}

export default dbConnect
