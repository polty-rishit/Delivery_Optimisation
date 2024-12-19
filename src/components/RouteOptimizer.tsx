import React, { useState } from 'react';
import { GoogleMap, DirectionsRenderer, useLoadScript } from '@react-google-maps/api';

const containerStyle = { width: '100%', height: '400px' };

const RouteOptimizer: React.FC = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.GOOGLE_MAPS_API_KEY || '',
  });

  const [directions, setDirections] = useState<google.maps.DirectionsResult | null>(null);

  const calculateRoute = async () => {
    if (!google || !google.maps) return;

    const directionsService = new google.maps.DirectionsService();
    const result = await directionsService.route({
      origin: 'Times Square, New York, NY',
      destination: 'Central Park, New York, NY',
      travelMode: google.maps.TravelMode.DRIVING,
    });

    setDirections(result);
  };

  return (
    <div>
      <button onClick={calculateRoute} className="btn btn-primary">
        Optimize Route
      </button>
      {isLoaded && (
        <GoogleMap mapContainerStyle={containerStyle} center={{ lat: 40.758, lng: -73.985 }} zoom={13}>
          {directions && <DirectionsRenderer directions={directions} />}
        </GoogleMap>
      )}
    </div>
  );
};

export default RouteOptimizer;
