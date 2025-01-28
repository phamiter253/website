import { MongoClient } from 'mongodb'

const client = new MongoClient(process.env.MONGODB_URI);

export default defineEventHandler(async () => {
  try {
    await client.connect();
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');

    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);

    return movie;
  } catch (err) {
    console.error('Error connecting to MongoDB:', err);
    return { error: 'Failed to fetch data from MongoDB' };
  } finally {
    await client.close();
  }
});

