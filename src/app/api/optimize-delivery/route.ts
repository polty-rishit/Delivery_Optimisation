import { NextResponse } from 'next/server';

// Assuming box volumes and vehicle capacity
const boxSizes = {
  Small: 10,  // Small box volume in cubic units
  Medium: 20, // Medium box volume in cubic units
  Large: 30,  // Large box volume in cubic units
};

const vehicleCapacity = 100; // Vehicle capacity in cubic units
const CO2_PER_VEHICLE = 50;  // Assumed CO2 emissions per vehicle (in kg)

function knapsack(boxes: { size: keyof typeof boxSizes; quantity: number }[]) {
  let totalVolume = 0;
  boxes.forEach((box) => {
    const boxVolume = boxSizes[box.size] * box.quantity;
    totalVolume += boxVolume;
  });

  const vehiclesRequired = Math.ceil(totalVolume / vehicleCapacity);
  return vehiclesRequired;
}

export async function POST(req: Request) {
  try {
    const { boxes } = await req.json(); 

    const vehiclesRequired = knapsack(boxes);

    const emissions = vehiclesRequired * CO2_PER_VEHICLE;

    const responseData = { vehicles: vehiclesRequired, emissions };

    return NextResponse.json(responseData);
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: 'Error processing the request' },
      { status: 500 }
    );
  }
}

export async function GET() {
  return NextResponse.json(
    { error: "Method not allowed" },
    { status: 405 }
  );
}
