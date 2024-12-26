const { MongoClient } = require('mongodb');

// Connection URL
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);

// Database and Collection
const dbName = 'myDatabase';
const collectionName = 'myCollection';

async function run() {
    try {
        // Connect to the MongoDB server
        await client.connect();
        console.log('Connected to MongoDB');

        const db = client.db(dbName);
        const collection = db.collection(collectionName);

        // Insert records
        const records = [
            { name: "John", age: 25, city: "New York" },
            { name: "Jane", age: 30, city: "San Francisco" },
            { name: "Mike", age: 35, city: "Chicago" }
        ];

        const result = await collection.insertMany(records);
        console.log(`${result.insertedCount} records inserted.`);
    } catch (err) {
        console.error('Error:', err);
    } finally {
        // Close the connection
        await client.close();
    }
}

run();
