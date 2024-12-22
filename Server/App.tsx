import express from 'express';
import { Request, Response } from 'express-serve-static-core';
import bodyParser from 'body-parser'; //
import Destination from './models/destination'; 

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// GET Endpoint: Fetch all destinations
app.get('/api/destinations', async (req: Request, res: Response) => {
  try {
    const destinations = await Destination.findAll();
    res.status(200).json(destinations);
  } catch (error) {
    res.status(500).json({ error: 'Error fetching destinations', details: error.message });
  }
});

// POST Endpoint: Create a new destination
app.post('/api/destinations', async (req: Request, res: Response) => {
  const { name, description, location } = req.body;

  try {
    if (!name || !description || !location) {
      return res.status(400).json({ error: 'Missing required fields: name, description, location' });
    }

    const newDestination = await Destination.create({ name, description, location });
    res.status(201).json(newDestination);
  } catch (error) {
    res.status(500).json({ error: 'Error creating destination', details: error.message });
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
