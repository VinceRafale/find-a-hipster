angular.module('starter.services', [])

.factory('Loader', function($rootScope, $ionicLoading) {

  return {
    show : function(message) { //code from the ionic framework doc
      // Show the loading overlay and text
      $rootScope.loading = $ionicLoading.show({

        // The text to display in the loading indicator
        content: message,

        // The animation to use
        // animation: 'fade-in',

        // Will a dark overlay or backdrop cover the entire view
        showBackdrop: false
      });
    },
    hide : function(){
      $rootScope.loading.hide();
    }
  }

})

/**
 * A simple example service that returns some data.
 */
.factory('Cafes', function($q) {
  // Might use a resource here that returns a JSON array

  var cafes = [
    {
      "addressLine1": "24 Keong Saik Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 0,
      "latitude": 1.280105,
      "longitude": 103.8416714,
      "name": "AFTERGLOW BY ANGLOW",
      "openinghours": "Mon to Sat: 11.30am - 11pm",
      "telephone": "6224 8921"
    },
    {
      "addressLine1": "86 Robertson Quay",
      "addressLine2": "#01-01, Robertson Blue",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 1,
      "latitude": 1.2902499,
      "longitude": 103.8371559,
      "name": "ANTHESIS CAFE",
      "openinghours": "Tue to Sun: 8.30am - 10pm",
      "telephone": "6737 9873"
    },
    {
      "addressLine1": "26 Evans Lodge",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 2,
      "latitude": 1.318608,
      "longitude": 103.819974,
      "name": "ASSEMBLY COFFEE",
      "openinghours": "Tue to Sun: 8am - 7pm",
      "telephone": "6735 5647"
    },
    {
      "addressLine1": "158 Kallang Way",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 3,
      "latitude": 1.3231209,
      "longitude": 103.8766262,
      "name": "BACKSTAGE",
      "openinghours": "Mon to Sat: 10am - 9pm",
      "telephone": "6743 6893"
    },
    {
      "addressLine1": "163 Tanglin Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 4,
      "latitude": 1.3047256,
      "longitude": 103.8233153,
      "name": "BRUNETTI",
      "openinghours": "Daily: 10am - 10pm",
      "telephone": "6736 4922"
    },
    {
      "addressLine1": "5 Gemmill Lane",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 5,
      "latitude": 1.2823873,
      "longitude": 103.8471004,
      "name": "CLUB STREET SOCIAL",
      "openinghours": "Mon to Fri: 11am - 10.30pm, Sat: 9am - 10.30pm, Sun: 9am - 9pm",
      "telephone": "6225 5043"
    },
    {
      "addressLine1": "1380 Ang Mo Kio Avenue 1",
      "addressLine2": "Bishan Park 2",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 6,
      "latitude": 1.36257,
      "longitude": 103.847097,
      "name": "CORNERSTONE",
      "openinghours": "Daily: 12pm - 10.30pm",
      "telephone": "6554 7230"
    },
    {
      "addressLine1": "4 Everton Park",
      "addressLine2": "#01-50",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 7,
      "latitude": 1.27705,
      "longitude": 103.8401606,
      "name": "COZY CORNER COFFEE",
      "openinghours": "Daily: 8.30am - 7.30pm",
      "telephone": "9383 0485"
    },
    {
      "addressLine1": "24A Lorong Mambong",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 8,
      "latitude": 1.311471,
      "longitude": 103.794855,
      "name": "CRAFT BAKERY & CAFE",
      "openinghours": "Daily: 7am - 11pm",
      "telephone": "6467 7710"
    },
    {
      "addressLine1": "273 Holland Avenue",
      "addressLine2": "#02-01/02",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 9,
      "latitude": 1.311832,
      "longitude": 103.795398,
      "name": "d' GOOD CAFE",
      "openinghours": "Sun to Thu: 10am - 9pm, Fri & Sat: 10am - 10pm",
      "telephone": "6219 9807"
    },
    {
      "addressLine1": "94 Tanjong Pagar Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 10,
      "latitude": 1.278283,
      "longitude": 103.843762,
      "name": "DRURY LANE CAFE",
      "openinghours": "Mon to Fri (Except Tue): 9am - 9pm, Sat & Sun: 10am - 6pm",
      "telephone": "6222 6698"
    },
    {
      "addressLine1": "200 Turf Club Road",
      "addressLine2": "Pasarbella at Grandstand",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 11,
      "latitude": 1.3391158,
      "longitude": 103.7927985,
      "name": "DUTCH COLONY COFFEE CO",
      "openinghours": "",
      "telephone": "6467 0255"
    },
    {
      "addressLine1": "1 Nanson Road",
      "addressLine2": "#01-05 The Gallery Hotel",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 12,
      "latitude": 1.2901034,
      "longitude": 103.8385376,
      "name": "eM BY THE RIVER",
      "openinghours": "Mon to Fri: 9am - 2am, Sat & Sun: 8am - 3am",
      "telephone": "6836 9691"
    },
    {
      "addressLine1": "49 Duxton Road",
      "addressLine2": "#02-01",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 13,
      "latitude": 1.2783203,
      "longitude": 103.8433122,
      "name": "GROUP THERAPY CAFE",
      "openinghours": "Tue to Thu: 11am - 6pm, Fri: 11am - 11pm, Sat: 11am - 11pm, Sun: 9am - 6pm",
      "telephone": "6222 2554"
    },
    {
      "addressLine1": "233 Upper Thomson Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 14,
      "latitude": 1.3526188,
      "longitude": 103.8346847,
      "name": "HABITAT COFFEE",
      "openinghours": "Tue to Fri: 11am - 10.30pm, Sat & Sun: 10.30am - 10.30pm",
      "telephone": "6456 2567"
    },
    {
      "addressLine1": "267 Holland Avenue",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 15,
      "latitude": 1.311699,
      "longitude": 103.795527,
      "name": "HATCHED",
      "openinghours": "Tue to Sun: 9am - 11pm",
      "telephone": "6463 0012"
    },
    {
      "addressLine1": "212 Hougang Street 21",
      "addressLine2": "#01-333",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 16,
      "latitude": 1.3595093,
      "longitude": 103.8884279,
      "name": "HATTER STREET",
      "openinghours": "Tue to Sun: 1:00 pm - 10:00 pm",
      "telephone": "6988 4591"
    },
    {
      "addressLine1": "8D Dempsey Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 17,
      "latitude": 1.3033091,
      "longitude": 103.8098532,
      "name": "HOUSE DEMPSEY",
      "openinghours": "Mon to Fri: 12pm - 6pm, 6pm - 10.30pm, Sat & Sun: 11am - 4pm, 6pm - 10.30pm",
      "telephone": "6475 7787"
    },
    {
      "addressLine1": "129 Rangoon Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 18,
      "latitude": 1.315448,
      "longitude": 103.853546,
      "name": "JEWEL CAFE & BAR",
      "openinghours": "Tue to Thu: 9am - 10pm, Fri & Sat: 9am - 12 Midnight, Sun: 9am - 10pm",
      "telephone": "6298 9216"
    },
    {
      "addressLine1": "1 Shenton Way",
      "addressLine2": "#01-07",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 19,
      "latitude": 1.2793201,
      "longitude": 103.8504867,
      "name": "JEWEL COFFEE",
      "openinghours": "Mon to Fri: 7am - 9pm, Sat: 8am - 5pm",
      "telephone": "6636 9452"
    },
    {
      "addressLine1": "9 One-North Gateway",
      "addressLine2": "#01-51 One-North Residences",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 20,
      "latitude": 1.3021862,
      "longitude": 103.7902665,
      "name": "JIMMY MONKEY",
      "openinghours": "Sun to Thu: 8.30am - 8.30pm, Fri & Sat: 8.30am - 10.30pm",
      "telephone": "6777 8470"
    },
    {
      "addressLine1": "9 Dempsey Road",
      "addressLine2": "#01-12",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 21,
      "latitude": 1.3036447,
      "longitude": 103.8098267,
      "name": "JONES THE GROCER",
      "openinghours": "Daily: 9am - 11pm",
      "telephone": "6476 1512"
    },
    {
      "addressLine1": "1 Everton Park",
      "addressLine2": "#01-27",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 22,
      "latitude": 1.277421,
      "longitude": 103.8400039,
      "name": "JUST WANT COFFEE",
      "openinghours": "",
      "telephone": "6225 8115"
    },
    {
      "addressLine1": "9 Penang Road",
      "addressLine2": "#01-01E Park Mall",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 23,
      "latitude": 1.298048,
      "longitude": 103.844577,
      "name": "KITH CAFE",
      "openinghours": "Daily: 8am - 10pm",
      "telephone": "6338 8611"
    },
    {
      "addressLine1": "160 Owen Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 24,
      "latitude": 1.3146333,
      "longitude": 103.8523389,
      "name": "L'ETOILE",
      "openinghours": "Tue to Sun: 9am - 8pm",
      "telephone": "6298 2872"
    },
    {
      "addressLine1": "50 Jurong Gateway Road",
      "addressLine2": "#01-16 JEM",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 25,
      "latitude": 1.3330657,
      "longitude": 103.743657,
      "name": "LENA'S",
      "openinghours": "Daily: 10am - 10pm",
      "telephone": "6338 7368"
    },
    {
      "addressLine1": "5 Simon Rd",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 26,
      "latitude": 1.361641,
      "longitude": 103.885948,
      "name": "LOLA'S CAFE",
      "openinghours": "Tue: 3pm - 11.30pm, Wed & Thu: 10am - 11.30pm, Fri to Sun: 10am - 12 Midnight",
      "telephone": "6343 1808"
    },
    {
      "addressLine1": "20 Kandahar Street",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 27,
      "latitude": 1.302327,
      "longitude": 103.859627,
      "name": "MAISON IKKOKU",
      "openinghours": "Mon to Thu: 9am - 7pm, Fri & Sat: 9am - 10pm, Sun: 9am - 6pm",
      "telephone": "6294 0078"
    },
    {
      "addressLine1": "21 Eng Kong Terrace",
      "addressLine2": "Eng Kong Park",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 28,
      "latitude": 1.3364561,
      "longitude": 103.7679912,
      "name": "NECESSARY PROVISIONS",
      "openinghours": "Tue - Thu: 10am - 10pm, Fri & Sat: 10am - 12 Midnight, Sun: 10am - 6pm",
      "telephone": "9231 7920"
    },
    {
      "addressLine1": "48A Lorong Mambong",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 29,
      "latitude": 1.3123687,
      "longitude": 103.7942127,
      "name": "O'COFFEE CLUB",
      "openinghours": "Mon to Thu: 11am - 12 Midnight, Fri, Sat & eve of PH: 11am - 1am, Sun & PH: 10am - 12 Midnight",
      "telephone": "6466 0296"
    },
    {
      "addressLine1": "215R Upper Thomson Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 30,
      "latitude": 1.352201,
      "longitude": 103.8350762,
      "name": "ONE MAN COFFEE",
      "openinghours": "Daily (except Tue): 9am - 5pm",
      "telephone": ""
    },
    {
      "addressLine1": "281 Holland Avenue",
      "addressLine2": "#01-01",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 31,
      "latitude": 1.3117114,
      "longitude": 103.7958914,
      "name": "PARK",
      "openinghours": "Mon to Fri: 10am - 2am, Sat & Sun: 8.30am - 2am",
      "telephone": ""
    },
    {
      "addressLine1": "402 East Coast Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 32,
      "latitude": 1.308838,
      "longitude": 103.912036,
      "name": "PENNY UNIVERSITY",
      "openinghours": "Tue to Thu: 8.30am - 8pm, Fri: 8.30am - 12 midnight, Sat: 8.30am - 12 midnight, Sun: 8.30am - 10.30pm",
      "telephone": "9008 9314"
    },
    {
      "addressLine1": "200 Turf Club Road",
      "addressLine2": "#01-10 Grandstand",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 33,
      "latitude": 1.3391158,
      "longitude": 103.7927985,
      "name": "PIES & COFFEE",
      "openinghours": "Daily: 11am - 9pm",
      "telephone": "6463 5573"
    },
    {
      "addressLine1": "1 Maju Avenue",
      "addressLine2": "#02-07/09 myVillage at Serangoon Garden",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 34,
      "latitude": 1.3652169,
      "longitude": 103.865262,
      "name": "RELISH",
      "openinghours": "",
      "telephone": "6634 3422"
    },
    {
      "addressLine1": "21 Media Circle",
      "addressLine2": "#01-03A",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 35,
      "latitude": 1.2922438,
      "longitude": 103.794564,
      "name": "REVOLUTION COFFEE",
      "openinghours": "Mon to Fri: 8am - 5pm, Sat & Sun: 10am - 6pm",
      "telephone": "6777 2110"
    },
    {
      "addressLine1": "100 Turf Club Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 36,
      "latitude": 1.335398,
      "longitude": 103.795463,
      "name": "ROUNDHOUSE",
      "openinghours": "Mon to Fri: 5pm - 12 midnight, Sat & Sun: 9am - 12 midnight",
      "telephone": "6466 0966"
    },
    {
      "addressLine1": "40 Craig Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 37,
      "latitude": 1.278237,
      "longitude": 103.84203,
      "name": "SELFISH GENE CAFE",
      "openinghours": "Daily except Tuesday: 10am - 6pm",
      "telephone": "6423 1324"
    },
    {
      "addressLine1": "60 Robertson Quay",
      "addressLine2": "#01-11 The Quayside",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 38,
      "latitude": 1.290086,
      "longitude": 103.839168,
      "name": "SMITTEN COFFEE AND TEA BAR",
      "openinghours": "Mon-Thu: 10am - 10pm, Fri: 10am - 11pm, Sat: 9am - 11pm, Sun: 9am - 9pm",
      "telephone": "9876 2347"
    },
    {
      "addressLine1": "36 Armenian Street",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 39,
      "latitude": 1.294125,
      "longitude": 103.8493869,
      "name": "SOHO COFFEE",
      "openinghours": "Mon: 9am - 6pm, Tue to Fri: 9am - 8pm, Sat: 10am - 8pm, Sun: 8am - 5pm",
      "telephone": "6634 7977"
    },
    {
      "addressLine1": "10 Bayfront Avenue",
      "addressLine2": "#01-85, Marina Bay Sands",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 40,
      "latitude": 1.2862989,
      "longitude": 103.8592169,
      "name": "SOUTH COAST",
      "openinghours": "Daily: 8am - 12midnight",
      "telephone": "6688 7600"
    },
    {
      "addressLine1": "9 Jalan Kubor",
      "addressLine2": "#01-01",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 41,
      "latitude": 1.303882,
      "longitude": 103.8593379,
      "name": "SYMMETRY",
      "openinghours": "Tue to Thu: 11am - 11pm, Fri & Sat: 11am - 12 midnight, Sun: 11am - 7pm",
      "telephone": "62919 901"
    },
    {
      "addressLine1": "20 Martin Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 42,
      "latitude": 1.2912669,
      "longitude": 103.838715,
      "name": "THE BOOK CAFE",
      "openinghours": "Sun to Thu: 8.30am - 10.30pm, Fri & Sat: 8.30am - 12 midnight",
      "telephone": "6887 5430"
    },
    {
      "addressLine1": "6 Horne Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 43,
      "latitude": 1.3080281,
      "longitude": 103.8628531,
      "name": "THE BRAVERY CAFE",
      "openinghours": "Daily (except Tue): 8am - 8pm",
      "telephone": ""
    },
    {
      "addressLine1": "75 Brighton Crescent",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 44,
      "latitude": 1.36303,
      "longitude": 103.871132,
      "name": "THE COFFEE DAILY",
      "openinghours": "Mon to Thu: 12pm - 10.30pm, Fri: 12pm - 11.30pm, Sat: 9.30am - 11.30pm, Sun: 9.30am - 10.30pm",
      "telephone": "6284 8894"
    },
    {
      "addressLine1": "268A South Bridge Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 45,
      "latitude": 1.2818008,
      "longitude": 103.8448962,
      "name": "THE LOFT CAFE",
      "openinghours": "",
      "telephone": "6221 2103"
    },
    {
      "addressLine1": "333A Orchard Road",
      "addressLine2": "#02-05, Mandarin Gallery",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 46,
      "latitude": 1.3023411,
      "longitude": 103.8364705,
      "name": "THE PROVIDORE",
      "openinghours": "Daily: 09:00 - 23:00",
      "telephone": "6732 1565"
    },
    {
      "addressLine1": "79 Anson Road",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 47,
      "latitude": 1.2742309,
      "longitude": 103.845569,
      "name": "THE SALAD SHOP",
      "openinghours": "Mon to Thu: 8am - 6pm, Fri: 8am - 5pm",
      "telephone": " 65348068"
    },
    {
      "addressLine1": "8 Rodyk Street",
      "addressLine2": "#01-03/04 Singapore",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 48,
      "latitude": 1.2905897,
      "longitude": 103.8379777,
      "name": "TOBY'S ESTATE",
      "openinghours": "Daily: 7.30am - 6pm",
      "telephone": "6636 7629"
    },
    {
      "addressLine1": "Lobby Carlton Hotel Singapore",
      "addressLine2": "76 Bras Basah Road",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 49,
      "latitude": 1.2906944,
      "longitude": 103.8597778,
      "name": "TUXEDO CAFE & PATISSERIE",
      "openinghours": "Sun to Thu: 7am - 11pm, Fri & Sat: 7am - 12 midnight",
      "telephone": "6415 7887"
    },
    {
      "addressLine1": "39 Jalan Mas Puteh",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 50,
      "latitude": 1.308596,
      "longitude": 103.7623629,
      "name": "W39 BISTRO & BAKERY",
      "openinghours": "Tue to Fri: 11am - 10pm, Sat, Sun & PH: 9am - 10.30pm",
      "telephone": "9646 5372"
    },
    {
      "addressLine1": "28 Lor Ampas",
      "addressLine2": "",
      "city": "Singapore",
      "country": "Singapore",
      "countrycode": "SG",
      "hasAlcohol": true,
      "hasCakes": false,
      "hasCoffee": true,
      "hasIceCream": false,
      "hasMainCourse": false,
      "hasPowerpoint": true,
      "hasWifi": true,
      "id": 51,
      "latitude": 1.326623,
      "longitude": 103.852831,
      "name": "WHEELER'S YARD",
      "openinghours": "Mon: 11am - 8pm, Wed to Sat: 11am - 8pm, Sun: 9am - 8pm",
      "telephone": "6254 9128"
    }
  ];

  // Set id
  angular.forEach(cafes, function(v, k) {
    cafes[k]['id'] = k;
  });

  var remoteCafes = [];

  return {
    all: function() {
      return cafes;
    },
    get: function(cafeId) {
      // Simple index lookup
      return cafes[cafeId];
    },
    refreshFromRemote: function() {
      var deferred = $q.defer();

      var cafesUrl = 'https://docs.google.com/spreadsheet/pub?hl=en&hl=en&key=0AsNz63BMymZodFBtZUxKYkZQcFdabGFpNHNVcXdGYkE&gid=0&output=html';
      Tabletop.init({
        key: cafesUrl,
        callback: function(data, tabletop) {
          remoteCafes = tabletop.sheets('Hip').elements;
          deferred.resolve();
        },
        simpleSheet: false
      });

      return deferred.promise;
    },
    remoteAll: function() {
      return remoteCafes;
    }

  }
});
