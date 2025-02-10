import mongoose from 'mongoose';

const fuelPlanSchema = new mongoose.Schema({
  meals: {
    type: Object,
    required: true,
  },
  macros: {
    protein: Number,
    carbs: Number,
    fats: Number,
    calories: Number,
  },
  portions: {
    type: Object,
    required: true,
  },
  estimation: {
    weight: Number,
    height: Number,
    age: Number,
    maintenanceCalories: String,
  },
});

const FuelPlan = mongoose.model('FuelPlan', fuelPlanSchema);
export default FuelPlan;
