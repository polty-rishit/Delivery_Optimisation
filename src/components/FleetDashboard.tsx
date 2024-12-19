const FleetDashboard = () => {
  const fleetData = [
    { vehicle: 'Truck #1', status: 'Active', lastDelivery: '2 hours ago' },
    { vehicle: 'Truck #2', status: 'Inactive', lastDelivery: '1 day ago' },
    { vehicle: 'Truck #3', status: 'Active', lastDelivery: '30 minutes ago' },
  ];

  return (
    <div className="space-y-4">
      {fleetData.map((data, index) => (
        <div key={index} className="flex justify-between p-4 bg-gray-100 rounded-md shadow-md">
          <div>
            <h4 className="font-medium">{data.vehicle}</h4>
            <p className="text-sm text-gray-500">Last Delivery: {data.lastDelivery}</p>
          </div>
          <span
            className={`font-semibold ${
              data.status === 'Active' ? 'text-green-500' : 'text-red-500'
            }`}
          >
            {data.status}
          </span>
        </div>
      ))}
    </div>
  );
};

export default FleetDashboard;
