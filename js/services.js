angular.module('starter.services', [])

/**
 * A simple example service that returns some data.
 */
.factory('Cafes', function() {
  // Might use a resource here that returns a JSON array

  var cafes = [
    {
      "name": "ASSEMBLY COFFEE",
      "addressLine1": "26 Evans Lodge",
      "addressLine2": "",
      "telephone": "6735 5647",
      "openingHours": [
        "Tue to Sun: 8am – 7pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "26",
      "streetName": "Evans Road",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.318608,
      "longitude": 103.819974
    },
    {
      "name": "AFTERGLOW BY ANGLOW",
      "addressLine1": "24 Keong Saik Road",
      "addressLine2": "",
      "telephone": "6224 8921",
      "openingHours": [
        "Mon to Sat: 11.30am – 11pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "24",
      "streetName": "Keong Saik Road",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.280105,
      "longitude": 103.8416714
    },
    {
      "name": "BACKSTAGE",
      "addressLine1": "158 Kallang Way",
      "addressLine2": "",
      "telephone": "6743 6893",
      "openingHours": [
        "Mon to Sat: 10am – 9pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "158",
      "streetName": "Kallang Way",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.3231209,
      "longitude": 103.8766262
    },
    {
      "name": "ANTHESIS CAFE",
      "addressLine1": "#01-01, Robertson Blue, 86 Robertson Quay",
      "addressLine2": "",
      "telephone": "6737 9873",
      "openingHours": [
        "Tue to Sun: 8.30am – 10pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": null,
      "streetName": "Robertson Quay",
      "city": null,
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.291204,
      "longitude": 103.8373836
    },
    {
      "name": "BAKERZIN",
      "addressLine1": "63 Jurong West Central 2",
      "addressLine2": "#03-58/59 Jurong Point",
      "telephone": "",
      "openingHours": [
        "Daily: 11.30am – 11pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "63",
      "streetName": "Jurong West Central 2",
      "city": null,
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.3402226,
      "longitude": 103.7071874
    },
    {
      "name": "BRUNETTI",
      "addressLine1": "163 Tanglin Road",
      "addressLine2": "",
      "telephone": "6736 4922",
      "openingHours": [
        "Daily: 10am – 10pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "163",
      "streetName": "Tanglin Road",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.3047256,
      "longitude": 103.8233153
    },
    {
      "name": "CORNERSTONE",
      "addressLine1": "Bishan Park 2",
      "addressLine2": "1380 Ang Mo Kio Avenue 1",
      "telephone": "6554 7230",
      "openingHours": [
        "Daily: 12pm – 10.30pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": null,
      "streetName": "Ang Mo Kio Avenue 2",
      "city": null,
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.372733,
      "longitude": 103.8331724
    },
    {
      "name": "CLUB STREET SOCIAL",
      "addressLine1": "5 Gemmill Lane, off Club Street",
      "addressLine2": "",
      "telephone": "6225 5043",
      "openingHours": [
        "Mon to Fri: 11am – 10.30pm",
        "Sat: 9am – 10.30pm",
        "Sun: 9am – 9pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": null,
      "streetName": "Club Street",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.2821769,
      "longitude": 103.8460023
    },
    {
      "name": "COZY CORNER COFFEE",
      "addressLine1": "4 Everton Park #01-50",
      "addressLine2": "",
      "telephone": "9383 0485",
      "openingHours": [
        "Daily: 8.30am – 7.30pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "4",
      "streetName": "Everton Park",
      "city": null,
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.27705,
      "longitude": 103.8401606
    },
    {
      "name": "CRAFT BAKERY & CAFE",
      "addressLine1": "24A Lorong Mambong",
      "addressLine2": "",
      "telephone": "6467 7710",
      "openingHours": [
        "Daily: 7am – 11pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "24",
      "streetName": "Lorong Mambong",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.311471,
      "longitude": 103.794855
    },
    {
      "name": "eM BY THE RIVER",
      "addressLine1": "1 Nanson Road",
      "addressLine2": "#01-05 The Gallery Hotel",
      "telephone": "6836 9691",
      "openingHours": [
        "Mon to Fri: 9am – 2am",
        "Sat & Sun: 8am – 3am"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "1",
      "streetName": "Nanson Road",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.2901034,
      "longitude": 103.8385376
    },
    {
      "name": "d’ GOOD CAFE",
      "addressLine1": "273 Holland Avenue",
      "addressLine2": "#02-01/02",
      "telephone": "6219 9807",
      "openingHours": [
        "Sun to Thu: 10am – 9pm",
        "Fri & Sat: 10am – 10pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "273",
      "streetName": "Holland Avenue",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.311832,
      "longitude": 103.795398
    },
    {
      "name": "DRURY LANE CAFE",
      "addressLine1": "94 Tanjong Pagar Road",
      "addressLine2": "",
      "telephone": "6222 6698",
      "openingHours": [
        "Mon to Fri (Except Tue): 9am – 9pm",
        "Sat & Sun: 10am – 6pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "94",
      "streetName": "Tanjong Pagar Road",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.278283,
      "longitude": 103.843762
    },
    {
      "name": "DUTCH COLONY COFFEE CO",
      "addressLine1": "Pasarbella at Grandstand",
      "addressLine2": "200 Turf Club Road",
      "telephone": "6467 0255",
      "openingHours": [],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": null,
      "streetName": null,
      "city": null,
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.352083,
      "longitude": 103.819836
    },
    {
      "name": "GROUP THERAPY CAFE",
      "addressLine1": "49 Duxton Road #02-01",
      "addressLine2": "",
      "telephone": "6222 2554",
      "openingHours": [
        "Tue to Thu: 11am – 6pm",
        "Fri: 11am – 11pm",
        "Sat: 11am – 11pm",
        "Sun: 9am – 6pm"
      ],
      "hasWifi": true,
      "hasPowerpoint": true,
      "hasCoffee": true,
      "hasCakes": false,
      "hasIceCream": false,
      "hasMainCourse": false,
      "streetNumber": "49",
      "streetName": "Duxton Road",
      "city": "Singapore",
      "country": "Singapore",
      "countryCode": "SG",
      "latitude": 1.2783203,
      "longitude": 103.8433122
    }
  ];

  // Set id
  angular.forEach(cafes, function(v, k) {
    cafes[k]['id'] = k;
  });

  return {
    all: function() {
      return cafes;
    },
    get: function(cafeId) {
      // Simple index lookup
      return cafes[cafeId];
    }
  }
});
