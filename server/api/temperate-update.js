import { MongoClient } from 'mongodb';
import axios from 'axios';
const apiKey = process.env.API_KEY;
const client = new MongoClient(process.env.MONGODB_URI)

export default defineEventHandler(() => {
  const fetchTemperatureData = async () => {
    const yesterday = new Date();
    yesterday.setDate(yesterday.getDate() - 1);
    const apiDate = yesterday.toISOString().split('T')[0];

    const response = await axios.get(
      `https://api.weatherapi.com/v1/history.json?key=${apiKey}&q=San Francisco&dt=${apiDate}`
    );

    const formattedDate = yesterday.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });

    return {
      date: formattedDate,
      avgTemperature: response.data.forecast.forecastday[0].day.avgtemp_f,
    };
  };

  const saveToDatabase = async (data) => {
    try {
      await client.connect();
      const db = client.db('weather_data');
      const collection = db.collection('sf_weather');
      
      const existingRecord = await collection.findOne({ date: data.date });
      if (!existingRecord) {
        await collection.insertOne(data);
        console.log('New data added to MongoDB.');
      } else {
        console.log('Data for this date already exists.');
      }
    } catch (error) {
      return ('Error saving to MongoDB:', error.message);
    } finally {
      await client.close();
    }
  };

  setInterval(async () => {
    console.log('Running daily temperature update...');
    const temperatureData = await fetchTemperatureData();
    await saveToDatabase(temperatureData);
  }, 24 * 60 * 60 * 1000); // 24 hours in milliseconds
});
