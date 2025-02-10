const FuelCard = ({ fuelPlan }: { fuelPlan: any }) => {
  if (!fuelPlan) {
    return <p className="text-center">Loading fuel plan...</p>;
  }

  return (
    <div className="w-84 hover:scale-101 mb-6 max-w-3xl rounded-lg bg-white p-6 shadow-lg duration-300">
      {/* Title */}
      <div className="mb-4 flex items-center justify-between border-b-2 pb-2">
        <h3 className="text-xl font-bold text-black">Daily Fuel Plan</h3>
        <button className="cursor-pointer rounded-xl border-2 bg-white px-2 font-medium shadow-lg duration-300 hover:scale-105 hover:border-black hover:bg-black hover:font-bold hover:text-white">
          Edit
        </button>
      </div>

      {/* Meal Plan */}
      <ul className="space-y-6">
        {Object.entries(fuelPlan.meals).map(([meal, details]) => (
          <li
            key={meal}
            className="rounded-lg bg-gray-100 p-4 shadow-sm duration-300 hover:scale-105"
          >
            <h4 className="text-lg font-semibold text-black">{meal}</h4>
            <p className="text-sm">{String(details)}</p>{' '}
            {/* ✅ Ensure details is a string */}
          </li>
        ))}
      </ul>

      {/* Macros */}
      <div className="mt-6 rounded-lg bg-gray-200 p-4 shadow-sm">
        <h4 className="text-lg font-semibold text-black">
          Approximate Macros:
        </h4>
        <p className="text-sm">Protein: {fuelPlan.macros.protein} g</p>
        <p className="text-sm">Carbohydrates: {fuelPlan.macros.carbs} g</p>
        <p className="text-sm">Fats: {fuelPlan.macros.fats} g</p>
        <p className="text-sm font-semibold">
          Total Calories: {fuelPlan.macros.calories} kcal
        </p>
      </div>

      {/* Portion Details */}
      <div className="mt-6 rounded-lg bg-gray-200 p-4 shadow-sm">
        <h4 className="text-lg font-semibold text-black">Portion Details:</h4>
        {Object.entries(fuelPlan.portions).map(([item, details]) => (
          <p key={item} className="text-sm">
            {item}: {String(details)}
          </p>
        ))}
      </div>

      {/* Calorie Estimation */}
      <div className="mt-6 rounded-lg bg-gray-200 p-4 shadow-sm">
        <h4 className="text-lg font-semibold text-black">
          Your Estimated Maintenance Calories:
        </h4>
        <p className="text-sm">
          Weight: {fuelPlan.estimation.weight} kg | Height:{' '}
          {fuelPlan.estimation.height} m | Age: {fuelPlan.estimation.age} years
        </p>
        <p className="text-sm">
          Sedentary Maintenance Calories:{' '}
          {fuelPlan.estimation.maintenanceCalories} kcal
        </p>
      </div>
    </div>
  );
};

export default FuelCard;
