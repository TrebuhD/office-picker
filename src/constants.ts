import { FlightDestination, Location } from "./types/common";

export enum LocationName {
  MADRID = "Madrid",
  AMSTERDAM = "Amsterdam",
  BUDAPEST = "Budapest",
  LONDON = "London",
  PARIS = "Paris",
  NEW_YORK = "New York",
}

// office locations to choose from
export const locationData: Array<Location> = [
  {
    name: LocationName.MADRID,
    airportCode: "MAD",
    imageUrl:
      "https://images.pexels.com/photos/3757144/pexels-photo-3757144.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altImageUrl:
      "https://images.pexels.com/photos/17658/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Madrid, the capital of Spain, is a cosmopolitan city that combines the most modern infrastructures and the status as an economic, financial, administrative and service centre, with a large cultural and artistic heritage, a legacy of centuries of exciting history.",
    travelDescription:
      "Madrid Airport opened in 1928, and has grown to be one of Europe's most important aviation centres. Located within the city limits of Madrid, it is just 9 km (6 mi) from the city's financial district and 13 km (8 mi) northeast of the Puerta del Sol or Plaza Mayor de Madrid, Madrid's historic centre.",
    climateDescription:
      "Madrid will surprise you with its intense, enveloping blue sky. With a dry climate and little rainfall, the city has hot summers and cold winters. No matter what time of the year you choose to come, you’re very likely to see with your own eyes the deep blue sky Velázquez loved to paint.",
    latitude: 40.4168,
    longitude: 3.7038,
    avgAnnualTemp: 13.7,
    avgRainfall: 450,
    avgSunshineHours: 2769,
  },
  {
    name: LocationName.AMSTERDAM,
    airportCode: "AMS",
    imageUrl:
      "https://images.pexels.com/photos/1796705/pexels-photo-1796705.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altImageUrl:
      "https://images.pexels.com/photos/208733/pexels-photo-208733.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "Amsterdam is an unusual city in that it has all the advantages of a big city – culture, history, food, entertainment, good transport – with relatively few of the disadvantages: it is physically small, beautiful, relatively quiet, and largely thanks to the canals, has relatively little traffic.",
    travelDescription:
      "Officially known by the name Amsterdam Airport Schiphol, this airport is of great importance in Europe. It is an international airport found in the Netherlands and is located twenty minutes from Amsterdam city and approximately nine miles south-west of the center of Amsterdam in Haarlemmermeer municipality. This is an international airport connecting to many notable European airports. It is the home base for many intercontinental airlines such as KLM, Arkefly, Transavia, Amsterdam Airlines and Martinir.",
    climateDescription:
      "In Amsterdam, the capital of the Netherlands, the climate is sub-oceanic, humid and rainy, being influenced by the North Sea, but also by the Atlantic Ocean which is not far, so it has cold (but not freezing) winters and quite cool summers.\n" +
      "The wind blows frequently, and can be intense, especially from November to March.",
    latitude: 52.3667,
    longitude: 4.8945,
    avgAnnualTemp: 9.2,
    avgRainfall: 838.2,
    avgSunshineHours: 1662,
  },
  {
    name: LocationName.BUDAPEST,
    airportCode: "BUD",
    imageUrl:
      "https://images.pexels.com/photos/732057/pexels-photo-732057.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    altImageUrl:
      "https://images.pexels.com/photos/37854/budapest-parliament-according-to-hungary-fireworks-37854.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
    description:
      "With a unique, youthful atmosphere, a world-class classical music scene as well as a pulsating night life increasingly appreciated among European youth and, last but not least, an exceptionally rich offering of natural thermal baths, Budapest is one of Europe's most delightful and enjoyable cities.",
    travelDescription:
      "Budapest Ferenc Liszt International Airport (BUD) is the main airport in Hungary and is located 16 km to the southeast of Budapest. With over 10 million passengers annually, it is the busiest airfield in Hungary.",
    climateDescription:
      "Budapest, Hungary is marked by a mild and wet continental-climate with sunny summer and cold winter. In all four seasons, the weather is not easily predictable.",
    latitude: 47.4979,
    longitude: 19.0402,
    avgAnnualTemp: 11,
    avgRainfall: 564,
    avgSunshineHours: 1928,
  },
];

// locations for flight cost comparisons
export const flightDestinationData: Array<FlightDestination> = [
  {
    name: LocationName.LONDON,
    airportCode: "LHR",
  },
  {
    name: LocationName.PARIS,
    airportCode: "CDG",
  },
  {
    name: LocationName.NEW_YORK,
    airportCode: "JFK",
  },
];
