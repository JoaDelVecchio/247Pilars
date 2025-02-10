import { Request, Response } from 'express';
import FuelPlan from '../models/FuelPlan';

export const getFuelPlan = async (req: Request, res: Response) => {
  try {
    const fuelPlan = await FuelPlan.findOne();
    if (!fuelPlan) {
       res.status(404).json({ message: 'Fuel plan not found' });
       return
    }
    res.json({ fuelPlan });
  } catch (error) {
    console.error('Error fetching fuel plan:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const createFuelPlan = async (req: Request, res: Response) => {
  try {
    const { meals, macros, portions, estimation } = req.body;

    // Ensure there's only one fuel plan
    await FuelPlan.deleteMany();

    const newFuelPlan = new FuelPlan({
      meals,
      macros,
      portions,
      estimation,
    });

    await newFuelPlan.save();
    res.status(201).json({ message: 'Fuel plan created successfully', fuelPlan: newFuelPlan });
  } catch (error) {
    console.error('Error creating fuel plan:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const updateFuelPlan = async (req: Request, res: Response) => {
  try {
    const { meals, macros, portions, estimation } = req.body;

    const updatedFuelPlan = await FuelPlan.findOneAndUpdate(
      {},
      { meals, macros, portions, estimation },
      { new: true, upsert: true }
    );

    res.json({ message: 'Fuel plan updated successfully', fuelPlan: updatedFuelPlan });
  } catch (error) {
    console.error('Error updating fuel plan:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};


export const deleteFuelPlan = async (req: Request, res: Response) => {
  try {
    await FuelPlan.deleteMany();
    res.json({ message: 'Fuel plan deleted successfully' });
  } catch (error) {
    console.error('Error deleting fuel plan:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
};
