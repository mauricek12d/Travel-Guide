import sequelize from '../Config/database';
import Destination from '../destination';

const models = {
  Destination,
};

const initializeDatabase = async () => {
  try {
    await sequelize.authenticate();
    console.log('Database connected successfully.');
    await sequelize.sync({ alter: true }); // Synchronizes the database
    console.log('Database synchronized.');
  } catch (error) {
    console.error('Error connecting to the database:', error);
  }
};

export { sequelize, models, initializeDatabase };
