export interface FlightDestination {
  name: string;
  airportCode: string;
}

export interface Location extends FlightDestination {
  imageUrl: string;
  altImageUrl: string;
  description: string;
  travelDescription: string;
  climateDescription: string;
  latitude: number;
  longitude: number;
}
