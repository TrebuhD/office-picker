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
      "https://st3.idealista.com/cms/archivos/styles/idcms_social_large_desktop/public/2018-06/news/madrid%20gtres.jpg?fv=reFMJ_Db&itok=OvwtMOLC",
    altImageUrl:
      "https://cdn.indicium.nu/source/lonely-planet/inspiratie/2019_april/madrid.jpg?w=768&h=500&sharp=2&fit=crop",
    description:
      "Madrid, the capital of Spain, is a cosmopolitan city that combines the most modern infrastructures and the status as an economic, financial, administrative and service centre, with a large cultural and artistic heritage, a legacy of centuries of exciting history.",
    travelDescription:
      "Madrid Airport opened in 1928, and has grown to be one of Europe's most important aviation centres. Located within the city limits of Madrid, it is just 9 km (6 mi) from the city's financial district and 13 km (8 mi) northeast of the Puerta del Sol or Plaza Mayor de Madrid, Madrid's historic centre.",
    climateDescription:
      "Madrid will surprise you with its intense, enveloping blue sky. With a dry climate and little rainfall, the city has hot summers and cold winters. No matter what time of the year you choose to come, you’re very likely to see with your own eyes the deep blue sky Velázquez loved to paint.",
    latitude: 40.4168,
    longitude: 3.7038,
  },
  {
    name: LocationName.AMSTERDAM,
    airportCode: "AMS",
    imageUrl:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Amsterdam_Canal_Tour.jpg/2560px-Amsterdam_Canal_Tour.jpg",
    altImageUrl:
      "https://www.holland.com/upload_mm/8/2/7/68467_fullimage_amsterdam_canal2_1360x.jpg",
    description:
      "Amsterdam is an unusual city in that it has all the advantages of a big city – culture, history, food, entertainment, good transport – with relatively few of the disadvantages: it is physically small, beautiful, relatively quiet, and largely thanks to the canals, has relatively little traffic.",
    travelDescription:
      "Officially known by the name Amsterdam Airport Schiphol, this airport is of great importance in Europe. It is an international airport found in the Netherlands and is located twenty minutes from Amsterdam city and approximately nine miles south-west of the center of Amsterdam in Haarlemmermeer municipality. This is an international airport connecting to many notable European airports. It is the home base for many intercontinental airlines such as KLM, Arkefly, Transavia, Amsterdam Airlines and Martinir.",
    climateDescription:
      "In Amsterdam, the capital of the Netherlands, the climate is sub-oceanic, humid and rainy, being influenced by the North Sea, but also by the Atlantic Ocean which is not far, so it has cold (but not freezing) winters and quite cool summers.\n" +
      "The wind blows frequently, and can be intense, especially from November to March.",
    latitude: 52.3667,
    longitude: 4.8945,
  },
  {
    name: LocationName.BUDAPEST,
    airportCode: "BUD",
    imageUrl:
      "https://www.telegraph.co.uk/content/dam/Travel/Destinations/Europe/Hungary/fisherman-bastion-budapest-guide.jpg?imwidth=1400",
    altImageUrl:
      "https://www.thetimes.co.uk/imageserver/image/%2Fmethode%2Ftimes%2Fprod%2Fweb%2Fbin%2Fa42066f2-15c8-11e9-8239-c0a124428b01.jpg?crop=5832%2C3280%2C0%2C304&resize=1180",
    description:
      "With a unique, youthful atmosphere, a world-class classical music scene as well as a pulsating night life increasingly appreciated among European youth and, last but not least, an exceptionally rich offering of natural thermal baths, Budapest is one of Europe's most delightful and enjoyable cities.",
    travelDescription:
      "Budapest Ferenc Liszt International Airport (BUD) is the main airport in Hungary and is located 16 km to the southeast of Budapest. With over 10 million passengers annually, it is the busiest airfield in Hungary.",
    climateDescription:
      "Budapest, Hungary is marked by a mild and wet continental-climate with sunny summer and cold winter. In all four seasons, the weather is not easily predictable.",
    latitude: 47.4979,
    longitude: 19.0402,
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
