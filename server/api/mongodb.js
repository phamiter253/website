import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI);  // Replace with your MongoDB URI

export default defineEventHandler(async () => {
  try {
    await client.connect(); // Connect to the database
    const db = client.db('weather_data'); // Replace with your database name
    const collection = db.collection('sf_weather'); // Replace with your collection name

    const data = await collection.find({}).toArray(); // Query all documents in the collection
    return data; // Return all documents
  } catch (error) {
    console.error('Error fetching data from MongoDB:', error);
    throw createError({ statusCode: 500, message: 'Database query failed' });
  } finally {
    await client.close(); // Close the database connection
  }
});

