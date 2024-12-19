"use client";

import { useState } from "react";

const DeliveryBoxOptimization = () => {
  const [boxes, setBoxes] = useState<{ size: string; quantity: number }[]>([]);
  const [boxSize, setBoxSize] = useState("Small");
  const [quantity, setQuantity] = useState(1);
  const [optimizationResult, setOptimizationResult] = useState<{
    vehicles: number;
    emissions: number;
  } | null>(null);
  const [error, setError] = useState<string | null>(null);

  const addBox = () => {
    if (quantity <= 0) return;

    setBoxes((prev) => [...prev, { size: boxSize, quantity }]);
    setQuantity(1);
  };

  const handleSubmit = async () => {
    const requestData = {
      boxes,
    };

    try {
      const response = await fetch("/api/optimize-delivery", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(requestData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      if (data.vehicles && data.emissions) {
        setOptimizationResult({
          vehicles: data.vehicles,
          emissions: data.emissions,
        });
        setError(null);
      } else {
        throw new Error('Invalid response data');
      }
    } catch (err) {
      console.error(err);
      setError("An error occurred while optimizing delivery.");
      setOptimizationResult(null);
    }
  };

  return (
    <div className="space-y-6">
      <h2 className="text-xl font-semibold">Delivery Box Optimization</h2>

      {/* Input Section */}
      <div className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
        <div>
          <label htmlFor="boxSize" className="block mb-1 font-medium">
            Box Size
          </label>
          <select
            id="boxSize"
            value={boxSize}
            onChange={(e) => setBoxSize(e.target.value)}
            className="border border-gray-300 rounded p-2 w-full"
          >
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
          </select>
        </div>

        <div>
          <label htmlFor="quantity" className="block mb-1 font-medium">
            Quantity
          </label>
          <input
            type="number"
            id="quantity"
            value={quantity}
            onChange={(e) => setQuantity(Number(e.target.value))}
            className="border border-gray-300 rounded p-2 w-full"
            min="1"
          />
        </div>

        <button
          onClick={addBox}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition"
        >
          Add Box
        </button>
      </div>

      {/* List of Added Boxes */}
      <div className="space-y-2">
        <h3 className="font-medium">Added Boxes</h3>
        <ul className="list-disc pl-5">
          {boxes.map((box, index) => (
            <li key={index} className="flex justify-between">
              <span>
                {box.quantity} x {box.size} box(es)
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Submit Button */}
      <button
        onClick={handleSubmit}
        className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition"
      >
        Optimize Delivery
      </button>

      {/* Display Result or Error */}
      <div className="mt-6">
        {error && <div className="text-red-600 font-semibold">{error}</div>}
        {optimizationResult && (
          <div className="bg-green-100 p-4 rounded-lg mt-4">
            <h4 className="font-medium">Optimization Results:</h4>
            <p>Estimated vehicles: {optimizationResult.vehicles}</p>
            <p>Estimated CO2 Emissions: {optimizationResult.emissions} kg</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default DeliveryBoxOptimization;
