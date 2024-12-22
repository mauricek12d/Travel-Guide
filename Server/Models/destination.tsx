import { Model, DataTypes } from 'sequelize';
import sequelize from '../Config/database';

interface DestinationAttributes {
  id?: number;
  name: string;
  description: string;
  location: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export class Destination extends Model<DestinationAttributes> implements DestinationAttributes {
  public id!: number;
  public name!: string;
  public description!: string;
  public location!: string;

  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

Destination.init(
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    location: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    sequelize,
    modelName: 'Destination',
    tableName: 'destinations',
    timestamps: true,
  }
);

export default Destination;
