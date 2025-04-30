import { useEffect, useState } from 'react';
import Places from './Places.jsx';

export default function AvailablePlaces({ onSelectPlace }) {

  const [availablePlaces, setAvailablePlaces] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function getData() {
      setIsLoading(true);
      const response = await fetch("http://localhost:3000/places");
      const data = await response.json();
      setAvailablePlaces(data.places);
      setIsLoading(false);
    }
    getData();

  }, []);

  return (
    <Places
      title="Available Places"
      places={availablePlaces}
      fallbackText="No places available."
      isLoading={isLoading}
      onSelectPlace={onSelectPlace}
    />
  );
}
