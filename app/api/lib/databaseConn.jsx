import mongoose from "mongoose";

const MONGODB_URI = process.env.MONGODB_URI

if (!MONGODB_URI) {
  throw new Error("Please define the MONGODB_URI environment variable");
}

const MAX_RETRIES = 3;
const RETRY_DELAY = 1000;

let cached = global.mongoose || { conn: null, promise: null };

async function connectToDB() {
  if (cached.conn) return cached.conn;
  if (!cached.promise) {
    let retries = 0;
    cached.promise = (async () => {
      while (retries < MAX_RETRIES) {
        try {
          const conn = await mongoose.connect(MONGODB_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
          });
          return conn;
        } catch (error) {
          retries++;
          if (retries === MAX_RETRIES) throw error;
          await new Promise(resolve => setTimeout(resolve, RETRY_DELAY));
        }
      }
    })();
  }
  cached.conn = await cached.promise;
  return cached.conn;
}
export default connectToDB
