import { MongoClient } from 'mongodb'

export default defineEventHandler(async () => {
  const client = new MongoClient(process.env.MONGODB_URI);
  try {
    await client.connect();
    const db = client.db('weather_data');
    const collection = db.collection('sf_weather');
    const data = await collection.find({}).toArray();
    return data;
  } catch (err) {
    return { error: 'Error fetching data from MongoDB' + err};
  } finally {
    client.close();
  }
});

