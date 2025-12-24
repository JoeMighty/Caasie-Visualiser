// Sample Data
const SAMPLE_DATA = [
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-21",
    "Board": "Oxford Street, London",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 55.85307741,
    "Longitude": -4.06530584,
    "Total Plays": 175,
    "Total Audience": 796.09,
    "Total Cost (Your Currency)": 34.13,
    "Average CPP (Your Currency)": 0.195,
    "Total Screen Time (secs)": 284
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-14",
    "Board": "Oxford Street, London",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 51.6930259,
    "Longitude": -1.25057781,
    "Total Plays": 161,
    "Total Audience": 739.55,
    "Total Cost (Your Currency)": 13.61,
    "Average CPP (Your Currency)": 0.0845,
    "Total Screen Time (secs)": 796
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-18",
    "Board": "Liverpool ONE, Liverpool",
    "Venue Type": "transport.train_stations",
    "Latitude": 51.4579559,
    "Longitude": -2.38692801,
    "Total Plays": 351,
    "Total Audience": 1687.43,
    "Total Cost (Your Currency)": 73.36,
    "Average CPP (Your Currency)": 0.209,
    "Total Screen Time (secs)": 186
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-09",
    "Board": "Trafford Centre, Manchester",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 52.56373433,
    "Longitude": -3.17739566,
    "Total Plays": 102,
    "Total Audience": 401.46,
    "Total Cost (Your Currency)": 14.38,
    "Average CPP (Your Currency)": 0.141,
    "Total Screen Time (secs)": 279
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-02",
    "Board": "Newcastle Eldon Square",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 54.21111851,
    "Longitude": -0.1914655,
    "Total Plays": 243,
    "Total Audience": 940.5,
    "Total Cost (Your Currency)": 53.7,
    "Average CPP (Your Currency)": 0.221,
    "Total Screen Time (secs)": 480
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-19",
    "Board": "Manchester Arndale, Manchester",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 55.63190633,
    "Longitude": -0.16758167,
    "Total Plays": 388,
    "Total Audience": 1773.6,
    "Total Cost (Your Currency)": 96.03,
    "Average CPP (Your Currency)": 0.2475,
    "Total Screen Time (secs)": 476
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-13",
    "Board": "Victoria Station, London",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 54.71092188,
    "Longitude": -1.08226167,
    "Total Plays": 133,
    "Total Audience": 696.9,
    "Total Cost (Your Currency)": 25.79,
    "Average CPP (Your Currency)": 0.1939,
    "Total Screen Time (secs)": 394
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-03",
    "Board": "Newcastle Eldon Square",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 54.33999856,
    "Longitude": -1.71525128,
    "Total Plays": 133,
    "Total Audience": 754.46,
    "Total Cost (Your Currency)": 33.01,
    "Average CPP (Your Currency)": 0.2482,
    "Total Screen Time (secs)": 456
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-22",
    "Board": "Piccadilly Circus, London",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 50.89713163,
    "Longitude": 0.06568062,
    "Total Plays": 470,
    "Total Audience": 1715.91,
    "Total Cost (Your Currency)": 69.65,
    "Average CPP (Your Currency)": 0.1482,
    "Total Screen Time (secs)": 503
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-19",
    "Board": "Trafford Centre, Manchester",
    "Venue Type": "transport.train_stations",
    "Latitude": 52.089281,
    "Longitude": -3.26686246,
    "Total Plays": 252,
    "Total Audience": 1929.82,
    "Total Cost (Your Currency)": 39.82,
    "Average CPP (Your Currency)": 0.158,
    "Total Screen Time (secs)": 838
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-18",
    "Board": "Sheffield Meadowhall",
    "Venue Type": "transport.train_stations",
    "Latitude": 51.32999047,
    "Longitude": -2.03242083,
    "Total Plays": 348,
    "Total Audience": 1871.26,
    "Total Cost (Your Currency)": 86.84,
    "Average CPP (Your Currency)": 0.2495,
    "Total Screen Time (secs)": 404
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-25",
    "Board": "Bull Ring Shopping Centre, Birmingham",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 50.88116624,
    "Longitude": -2.59190357,
    "Total Plays": 371,
    "Total Audience": 1577.46,
    "Total Cost (Your Currency)": 56.31,
    "Average CPP (Your Currency)": 0.1518,
    "Total Screen Time (secs)": 876
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-15",
    "Board": "Newcastle Eldon Square",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 55.0052668,
    "Longitude": -0.65700634,
    "Total Plays": 398,
    "Total Audience": 2741.18,
    "Total Cost (Your Currency)": 91.7,
    "Average CPP (Your Currency)": 0.2304,
    "Total Screen Time (secs)": 878
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-11",
    "Board": "Canary Wharf, London",
    "Venue Type": "transport.train_stations",
    "Latitude": 55.07177319,
    "Longitude": -1.96159163,
    "Total Plays": 130,
    "Total Audience": 732.23,
    "Total Cost (Your Currency)": 31.88,
    "Average CPP (Your Currency)": 0.2452,
    "Total Screen Time (secs)": 449
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-04",
    "Board": "Bristol Cabot Circus",
    "Venue Type": "transport.airports",
    "Latitude": 55.17175887,
    "Longitude": -1.84823164,
    "Total Plays": 151,
    "Total Audience": 636.97,
    "Total Cost (Your Currency)": 25.93,
    "Average CPP (Your Currency)": 0.1717,
    "Total Screen Time (secs)": 345
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-01",
    "Board": "Leeds City Centre",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 51.94522955,
    "Longitude": -1.66321528,
    "Total Plays": 107,
    "Total Audience": 841.74,
    "Total Cost (Your Currency)": 12.92,
    "Average CPP (Your Currency)": 0.1207,
    "Total Screen Time (secs)": 494
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-03",
    "Board": "Leeds City Centre",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 53.35169427,
    "Longitude": -1.75098203,
    "Total Plays": 439,
    "Total Audience": 2635.63,
    "Total Cost (Your Currency)": 44.7,
    "Average CPP (Your Currency)": 0.1018,
    "Total Screen Time (secs)": 308
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-09",
    "Board": "Trafford Centre, Manchester",
    "Venue Type": "transport.airports",
    "Latitude": 52.8939538,
    "Longitude": -1.1415652,
    "Total Plays": 436,
    "Total Audience": 3021.77,
    "Total Cost (Your Currency)": 87.72,
    "Average CPP (Your Currency)": 0.2012,
    "Total Screen Time (secs)": 385
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-12",
    "Board": "Bristol Cabot Circus",
    "Venue Type": "transport.train_stations",
    "Latitude": 54.02985231,
    "Longitude": -3.34942634,
    "Total Plays": 111,
    "Total Audience": 517.83,
    "Total Cost (Your Currency)": 15.26,
    "Average CPP (Your Currency)": 0.1375,
    "Total Screen Time (secs)": 245
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-08",
    "Board": "Manchester Arndale, Manchester",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 50.9251441,
    "Longitude": -3.30997683,
    "Total Plays": 167,
    "Total Audience": 637.4,
    "Total Cost (Your Currency)": 37.77,
    "Average CPP (Your Currency)": 0.2261,
    "Total Screen Time (secs)": 212
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-22",
    "Board": "Trafford Centre, Manchester",
    "Venue Type": "transport.airports",
    "Latitude": 51.95798345,
    "Longitude": -2.13513529,
    "Total Plays": 117,
    "Total Audience": 807.27,
    "Total Cost (Your Currency)": 20.82,
    "Average CPP (Your Currency)": 0.178,
    "Total Screen Time (secs)": 764
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-14",
    "Board": "Bull Ring Shopping Centre, Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 55.68302049,
    "Longitude": -4.22914406,
    "Total Plays": 387,
    "Total Audience": 2138.54,
    "Total Cost (Your Currency)": 58.01,
    "Average CPP (Your Currency)": 0.1499,
    "Total Screen Time (secs)": 613
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-21",
    "Board": "Piccadilly Circus, London",
    "Venue Type": "transport.train_stations",
    "Latitude": 51.64125345,
    "Longitude": -2.25693226,
    "Total Plays": 422,
    "Total Audience": 2149.97,
    "Total Cost (Your Currency)": 51.6,
    "Average CPP (Your Currency)": 0.1223,
    "Total Screen Time (secs)": 291
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-14",
    "Board": "Westfield Stratford, London",
    "Venue Type": "transport.train_stations",
    "Latitude": 55.66809463,
    "Longitude": -1.74837344,
    "Total Plays": 177,
    "Total Audience": 1346.98,
    "Total Cost (Your Currency)": 27.49,
    "Average CPP (Your Currency)": 0.1553,
    "Total Screen Time (secs)": 257
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-02",
    "Board": "Manchester Arndale, Manchester",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.90624176,
    "Longitude": -4.206823,
    "Total Plays": 135,
    "Total Audience": 730.37,
    "Total Cost (Your Currency)": 15.71,
    "Average CPP (Your Currency)": 0.1163,
    "Total Screen Time (secs)": 672
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-13",
    "Board": "Edinburgh Waverley Station",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 56.24390585,
    "Longitude": 0.47711345,
    "Total Plays": 451,
    "Total Audience": 3242.74,
    "Total Cost (Your Currency)": 68.51,
    "Average CPP (Your Currency)": 0.1519,
    "Total Screen Time (secs)": 472
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-18",
    "Board": "Buchanan Street, Glasgow",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 53.75317121,
    "Longitude": -0.7601222,
    "Total Plays": 201,
    "Total Audience": 909.16,
    "Total Cost (Your Currency)": 35.87,
    "Average CPP (Your Currency)": 0.1785,
    "Total Screen Time (secs)": 239
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-02",
    "Board": "Sheffield Meadowhall",
    "Venue Type": "transport.train_stations",
    "Latitude": 56.26467342,
    "Longitude": -4.09944267,
    "Total Plays": 307,
    "Total Audience": 2401.08,
    "Total Cost (Your Currency)": 32.78,
    "Average CPP (Your Currency)": 0.1068,
    "Total Screen Time (secs)": 723
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-06",
    "Board": "Nottingham Victoria Centre",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 55.84172388,
    "Longitude": -3.26892326,
    "Total Plays": 395,
    "Total Audience": 2982.47,
    "Total Cost (Your Currency)": 39.65,
    "Average CPP (Your Currency)": 0.1004,
    "Total Screen Time (secs)": 593
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-20",
    "Board": "Nottingham Victoria Centre",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 56.10823755,
    "Longitude": -3.478704,
    "Total Plays": 264,
    "Total Audience": 1739.67,
    "Total Cost (Your Currency)": 44.58,
    "Average CPP (Your Currency)": 0.1689,
    "Total Screen Time (secs)": 758
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-23",
    "Board": "Liverpool ONE, Liverpool",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 52.39706318,
    "Longitude": -0.74067754,
    "Total Plays": 252,
    "Total Audience": 1037.01,
    "Total Cost (Your Currency)": 33.01,
    "Average CPP (Your Currency)": 0.131,
    "Total Screen Time (secs)": 840
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-03",
    "Board": "Victoria Station, London",
    "Venue Type": "transport.airports",
    "Latitude": 53.53530816,
    "Longitude": -3.83771715,
    "Total Plays": 338,
    "Total Audience": 2765.4,
    "Total Cost (Your Currency)": 57.93,
    "Average CPP (Your Currency)": 0.1714,
    "Total Screen Time (secs)": 255
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-12",
    "Board": "Liverpool ONE, Liverpool",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 54.17006659,
    "Longitude": 0.43616532,
    "Total Plays": 195,
    "Total Audience": 827.07,
    "Total Cost (Your Currency)": 38.92,
    "Average CPP (Your Currency)": 0.1996,
    "Total Screen Time (secs)": 736
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-21",
    "Board": "Newcastle Eldon Square",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 55.83827624,
    "Longitude": -0.78791658,
    "Total Plays": 389,
    "Total Audience": 1550.89,
    "Total Cost (Your Currency)": 48.61,
    "Average CPP (Your Currency)": 0.125,
    "Total Screen Time (secs)": 317
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-05",
    "Board": "Canary Wharf, London",
    "Venue Type": "transport.airports",
    "Latitude": 55.61747689,
    "Longitude": -1.97295471,
    "Total Plays": 157,
    "Total Audience": 1079.03,
    "Total Cost (Your Currency)": 30.91,
    "Average CPP (Your Currency)": 0.1969,
    "Total Screen Time (secs)": 388
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-09",
    "Board": "Manchester Arndale, Manchester",
    "Venue Type": "transport.train_stations",
    "Latitude": 51.28491796,
    "Longitude": 0.39898977,
    "Total Plays": 474,
    "Total Audience": 2275.39,
    "Total Cost (Your Currency)": 64.8,
    "Average CPP (Your Currency)": 0.1367,
    "Total Screen Time (secs)": 183
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-06",
    "Board": "Newcastle Eldon Square",
    "Venue Type": "transport.train_stations",
    "Latitude": 54.64611774,
    "Longitude": -3.75472857,
    "Total Plays": 337,
    "Total Audience": 1194.82,
    "Total Cost (Your Currency)": 81.1,
    "Average CPP (Your Currency)": 0.2407,
    "Total Screen Time (secs)": 257
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-02",
    "Board": "Sheffield Meadowhall",
    "Venue Type": "transport.airports",
    "Latitude": 55.89388893,
    "Longitude": -0.51938848,
    "Total Plays": 125,
    "Total Audience": 690.0,
    "Total Cost (Your Currency)": 16.55,
    "Average CPP (Your Currency)": 0.1324,
    "Total Screen Time (secs)": 222
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-28",
    "Board": "Manchester Piccadilly Station",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 53.85930111,
    "Longitude": -0.12643638,
    "Total Plays": 399,
    "Total Audience": 1864.44,
    "Total Cost (Your Currency)": 55.91,
    "Average CPP (Your Currency)": 0.1401,
    "Total Screen Time (secs)": 285
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-20",
    "Board": "Liverpool ONE, Liverpool",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 54.91938683,
    "Longitude": -2.83907266,
    "Total Plays": 459,
    "Total Audience": 3355.58,
    "Total Cost (Your Currency)": 38.65,
    "Average CPP (Your Currency)": 0.0842,
    "Total Screen Time (secs)": 602
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-30",
    "Board": "Liverpool ONE, Liverpool",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 50.73234765,
    "Longitude": -2.14654989,
    "Total Plays": 131,
    "Total Audience": 943.29,
    "Total Cost (Your Currency)": 19.0,
    "Average CPP (Your Currency)": 0.145,
    "Total Screen Time (secs)": 290
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-07",
    "Board": "Manchester Piccadilly Station",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 54.4601991,
    "Longitude": -2.50767011,
    "Total Plays": 470,
    "Total Audience": 3401.92,
    "Total Cost (Your Currency)": 55.41,
    "Average CPP (Your Currency)": 0.1179,
    "Total Screen Time (secs)": 413
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-09",
    "Board": "Westfield Stratford, London",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 53.71729439,
    "Longitude": 0.1961857,
    "Total Plays": 378,
    "Total Audience": 2228.01,
    "Total Cost (Your Currency)": 93.29,
    "Average CPP (Your Currency)": 0.2468,
    "Total Screen Time (secs)": 875
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-04",
    "Board": "St Enoch Square, Glasgow",
    "Venue Type": "transport.airports",
    "Latitude": 54.87127036,
    "Longitude": -2.93161343,
    "Total Plays": 185,
    "Total Audience": 680.76,
    "Total Cost (Your Currency)": 28.47,
    "Average CPP (Your Currency)": 0.1539,
    "Total Screen Time (secs)": 790
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-20",
    "Board": "Edinburgh Waverley Station",
    "Venue Type": "transport.airports",
    "Latitude": 56.05345099,
    "Longitude": -1.80774001,
    "Total Plays": 147,
    "Total Audience": 690.49,
    "Total Cost (Your Currency)": 11.8,
    "Average CPP (Your Currency)": 0.0803,
    "Total Screen Time (secs)": 626
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-24",
    "Board": "Manchester Piccadilly Station",
    "Venue Type": "transport.train_stations",
    "Latitude": 54.48032486,
    "Longitude": -3.87687342,
    "Total Plays": 85,
    "Total Audience": 676.58,
    "Total Cost (Your Currency)": 15.8,
    "Average CPP (Your Currency)": 0.1859,
    "Total Screen Time (secs)": 518
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-29",
    "Board": "Bristol Cabot Circus",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 53.82647487,
    "Longitude": -3.54079954,
    "Total Plays": 391,
    "Total Audience": 2119.0,
    "Total Cost (Your Currency)": 77.62,
    "Average CPP (Your Currency)": 0.1985,
    "Total Screen Time (secs)": 592
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-22",
    "Board": "St Enoch Square, Glasgow",
    "Venue Type": "transport.airports",
    "Latitude": 52.3232497,
    "Longitude": -3.44908658,
    "Total Plays": 341,
    "Total Audience": 1675.83,
    "Total Cost (Your Currency)": 75.61,
    "Average CPP (Your Currency)": 0.2217,
    "Total Screen Time (secs)": 741
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-26",
    "Board": "Victoria Station, London",
    "Venue Type": "transport.train_stations",
    "Latitude": 55.90708495,
    "Longitude": -0.5198762,
    "Total Plays": 276,
    "Total Audience": 1842.42,
    "Total Cost (Your Currency)": 44.28,
    "Average CPP (Your Currency)": 0.1604,
    "Total Screen Time (secs)": 703
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-06",
    "Board": "Canary Wharf, London",
    "Venue Type": "transport.airports",
    "Latitude": 56.21199797,
    "Longitude": -3.32565701,
    "Total Plays": 389,
    "Total Audience": 2518.71,
    "Total Cost (Your Currency)": 37.3,
    "Average CPP (Your Currency)": 0.0959,
    "Total Screen Time (secs)": 523
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-10",
    "Board": "Trafford Centre, Manchester",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 55.11093603,
    "Longitude": -2.22291916,
    "Total Plays": 62,
    "Total Audience": 230.47,
    "Total Cost (Your Currency)": 11.4,
    "Average CPP (Your Currency)": 0.1839,
    "Total Screen Time (secs)": 666
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-29",
    "Board": "Edinburgh Waverley Station",
    "Venue Type": "transport.train_stations",
    "Latitude": 55.85595896,
    "Longitude": -0.19779717,
    "Total Plays": 254,
    "Total Audience": 1180.27,
    "Total Cost (Your Currency)": 50.01,
    "Average CPP (Your Currency)": 0.1969,
    "Total Screen Time (secs)": 851
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-29",
    "Board": "King's Cross Station, London",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 50.80131031,
    "Longitude": -3.2540086,
    "Total Plays": 140,
    "Total Audience": 1019.1,
    "Total Cost (Your Currency)": 23.53,
    "Average CPP (Your Currency)": 0.1681,
    "Total Screen Time (secs)": 892
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-28",
    "Board": "Victoria Station, London",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 54.07271391,
    "Longitude": 0.25019804,
    "Total Plays": 460,
    "Total Audience": 2614.56,
    "Total Cost (Your Currency)": 114.05,
    "Average CPP (Your Currency)": 0.2479,
    "Total Screen Time (secs)": 723
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-29",
    "Board": "Nottingham Victoria Centre",
    "Venue Type": "transport.airports",
    "Latitude": 51.45494745,
    "Longitude": -0.19252545,
    "Total Plays": 268,
    "Total Audience": 1984.18,
    "Total Cost (Your Currency)": 41.76,
    "Average CPP (Your Currency)": 0.1558,
    "Total Screen Time (secs)": 741
  },
  {
    "Campaign": "Summer Festival",
    "Date (UTC)": "2025-01-15",
    "Board": "Liverpool ONE, Liverpool",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 52.14758468,
    "Longitude": -4.11258323,
    "Total Plays": 442,
    "Total Audience": 3162.54,
    "Total Cost (Your Currency)": 82.45,
    "Average CPP (Your Currency)": 0.1865,
    "Total Screen Time (secs)": 676
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-10",
    "Board": "Westfield Stratford, London",
    "Venue Type": "indoor.shopping_malls",
    "Latitude": 51.88756888,
    "Longitude": -1.03025094,
    "Total Plays": 213,
    "Total Audience": 1639.51,
    "Total Cost (Your Currency)": 22.05,
    "Average CPP (Your Currency)": 0.1035,
    "Total Screen Time (secs)": 262
  },
  {
    "Campaign": "Tech Launch Q1",
    "Date (UTC)": "2025-01-23",
    "Board": "Manchester Arndale, Manchester",
    "Venue Type": "transport.train_stations",
    "Latitude": 51.74100634,
    "Longitude": -2.39928241,
    "Total Plays": 258,
    "Total Audience": 1304.23,
    "Total Cost (Your Currency)": 38.88,
    "Average CPP (Your Currency)": 0.1507,
    "Total Screen Time (secs)": 657
  },
  {
    "Campaign": "Spring Fashion 2025",
    "Date (UTC)": "2025-01-29",
    "Board": "Sheffield Meadowhall",
    "Venue Type": "transport.train_stations",
    "Latitude": 52.83991989,
    "Longitude": -0.04179229,
    "Total Plays": 294,
    "Total Audience": 1037.15,
    "Total Cost (Your Currency)": 38.44,
    "Average CPP (Your Currency)": 0.1308,
    "Total Screen Time (secs)": 540
  },
  {
    "Campaign": "Brand Awareness Campaign",
    "Date (UTC)": "2025-01-27",
    "Board": "Newcastle Eldon Square",
    "Venue Type": "transport.airports",
    "Latitude": 52.13761187,
    "Longitude": -2.07179003,
    "Total Plays": 459,
    "Total Audience": 2907.9,
    "Total Cost (Your Currency)": 74.82,
    "Average CPP (Your Currency)": 0.163,
    "Total Screen Time (secs)": 405
  }
];

// Global State
let currentData = SAMPLE_DATA;
let filteredData = SAMPLE_DATA;
let charts = {};
let visibleCharts = {
    dailyPerformance: true,
    venueDistribution: true,
    costAnalysis: true,
    screenTime: true,
    topBoards: true
};
let filters = {
    startDate: null,
    endDate: null,
    venueType: 'all',
    campaign: 'all'
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupFileUpload();
    setupSettings();
    setupChartToggles();
    setupFilters();
    loadSettings();
    updateDashboard(currentData);
});

// ===== FILE UPLOAD =====

function setupFileUpload() {
    const uploadZone = document.getElementById('uploadZone');
    const fileInput = document.getElementById('fileInput');
    const fileName = document.getElementById('fileName');

    uploadZone.addEventListener('click', () => fileInput.click());

    uploadZone.addEventListener('dragover', (e) => {
        e.preventDefault();
        uploadZone.classList.add('drag-over');
    });

    uploadZone.addEventListener('dragleave', () => {
        uploadZone.classList.remove('drag-over');
    });

    uploadZone.addEventListener('drop', (e) => {
        e.preventDefault();
        uploadZone.classList.remove('drag-over');
        const file = e.dataTransfer.files[0];
        if (file) processFile(file);
    });

    fileInput.addEventListener('change', (e) => {
        const file = e.target.files[0];
        if (file) processFile(file);
    });
}

function processFile(file) {
    const fileName = document.getElementById('fileName');
    fileName.textContent = `✓ ${file.name}`;

    const extension = file.name.split('.').pop().toLowerCase();

    if (extension === 'csv') {
        Papa.parse(file, {
            header: true,
            dynamicTyping: true,
            skipEmptyLines: true,
            complete: (results) => {
                currentData = results.data.filter(row => row['Total Plays']); // Filter out empty rows
                filteredData = currentData;
                populateFilterOptions();
                resetFilters();
                updateDashboard(filteredData);
            },
            error: (error) => {
                alert(`Error parsing CSV: ${error.message}`);
            }
        });
    } else if (extension === 'xlsx' || extension === 'xls') {
        const reader = new FileReader();
        reader.onload = (e) => {
            try {
                const data = new Uint8Array(e.target.result);
                const workbook = XLSX.read(data, { type: 'array' });
                const worksheet = workbook.Sheets[workbook.SheetNames[0]];
                const jsonData = XLSX.utils.sheet_to_json(worksheet);
                currentData = jsonData;
                filteredData = currentData;
                populateFilterOptions();
                resetFilters();
                updateDashboard(filteredData);
            } catch (error) {
                alert(`Error parsing Excel: ${error.message}`);
            }
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('Please upload a CSV or Excel file (.csv, .xlsx, .xls)');
    }
}

// ===== FILTERS =====

function setupFilters() {
    const startDateInput = document.getElementById('startDate');
    const endDateInput = document.getElementById('endDate');
    const venueTypeSelect = document.getElementById('venueTypeFilter');
    const campaignSelect = document.getElementById('campaignFilter');
    const resetButton = document.getElementById('resetFilters');

    // Set up event listeners
    startDateInput.addEventListener('change', () => {
        filters.startDate = startDateInput.value;
        applyFilters();
    });

    endDateInput.addEventListener('change', () => {
        filters.endDate = endDateInput.value;
        applyFilters();
    });

    venueTypeSelect.addEventListener('change', () => {
        filters.venueType = venueTypeSelect.value;
        applyFilters();
    });

    campaignSelect.addEventListener('change', () => {
        filters.campaign = campaignSelect.value;
        applyFilters();
    });

    resetButton.addEventListener('click', resetFilters);

    // Initialize filter options
    populateFilterOptions();
}

function populateFilterOptions() {
    const venueTypeSelect = document.getElementById('venueTypeFilter');
    const campaignSelect = document.getElementById('campaignFilter');

    // Get unique venue types
    const venueTypes = [...new Set(currentData.map(d => d['Venue Type']))].filter(Boolean).sort();
    venueTypeSelect.innerHTML = '<option value="all">All Venues</option>';
    venueTypes.forEach(type => {
        const option = document.createElement('option');
        option.value = type;
        option.textContent = type.replace(/_/g, ' ').replace(/\./g, ' - ');
        venueTypeSelect.appendChild(option);
    });

    // Get unique campaigns
    const campaigns = [...new Set(currentData.map(d => d.Campaign))].filter(Boolean).sort();
    campaignSelect.innerHTML = '<option value="all">All Campaigns</option>';
    campaigns.forEach(campaign => {
        const option = document.createElement('option');
        option.value = campaign;
        option.textContent = campaign;
        campaignSelect.appendChild(option);
    });

    // Set date range based on data
    if (currentData.length > 0) {
        const dates = currentData.map(d => d['Date (UTC)']).filter(Boolean).sort();
        if (dates.length > 0) {
            document.getElementById('startDate').value = dates[0];
            document.getElementById('endDate').value = dates[dates.length - 1];
            filters.startDate = dates[0];
            filters.endDate = dates[dates.length - 1];
        }
    }
}

function applyFilters() {
    filteredData = currentData.filter(row => {
        // Date filter
        if (filters.startDate && row['Date (UTC)'] < filters.startDate) return false;
        if (filters.endDate && row['Date (UTC)'] > filters.endDate) return false;

        // Venue type filter
        if (filters.venueType !== 'all' && row['Venue Type'] !== filters.venueType) return false;

        // Campaign filter
        if (filters.campaign !== 'all' && row.Campaign !== filters.campaign) return false;

        return true;
    });

    updateDashboard(filteredData);
}

function resetFilters() {
    // Reset filter values
    filters = {
        startDate: null,
        endDate: null,
        venueType: 'all',
        campaign: 'all'
    };

    // Reset UI
    document.getElementById('venueTypeFilter').value = 'all';
    document.getElementById('campaignFilter').value = 'all';

    // Reset dates to data range
    if (currentData.length > 0) {
        const dates = currentData.map(d => d['Date (UTC)']).filter(Boolean).sort();
        if (dates.length > 0) {
            document.getElementById('startDate').value = dates[0];
            document.getElementById('endDate').value = dates[dates.length - 1];
            filters.startDate = dates[0];
            filters.endDate = dates[dates.length - 1];
        }
    }

    // Apply filters (which will show all data)
    filteredData = currentData;
    updateDashboard(filteredData);
}

// ===== SETTINGS =====

function setupSettings() {
    document.getElementById('toggleSettings').addEventListener('click', () => {
        const panel = document.getElementById('settingsPanel');
        panel.classList.toggle('hidden');
    });

    // Color pickers
    const colorIds = ['colorPrimary', 'colorPrimaryLight', 'colorDark', 'colorYellow', 'colorBlue'];
    colorIds.forEach(id => {
        document.getElementById(id).addEventListener('change', () => {
            applyColors();
            saveSettings();
            updateCharts(currentData);
        });
    });

    // Font selector
    document.getElementById('fontFamily').addEventListener('change', () => {
        applyFont();
        saveSettings();
    });
}

function setupChartToggles() {
    const toggleIds = ['toggleDailyPerformance', 'toggleVenueDistribution', 'toggleCostAnalysis', 'toggleScreenTime', 'toggleTopBoards'];
    const sectionIds = ['dailyPerformanceSection', 'venueDistributionSection', 'costAnalysisSection', 'screenTimeSection', 'topBoardsSection'];
    const chartKeys = Object.keys(visibleCharts);

    toggleIds.forEach((id, index) => {
        document.getElementById(id).addEventListener('change', (e) => {
            const isVisible = e.target.checked;
            visibleCharts[chartKeys[index]] = isVisible;
            
            // Toggle section visibility
            const section = document.getElementById(sectionIds[index]);
            if (section) {
                if (isVisible) {
                    section.style.display = '';
                } else {
                    section.style.display = 'none';
                }
            }
            
            // Also toggle table section for topBoards
            if (index === 4) {
                const tableSection = document.getElementById('topBoardsTableSection');
                if (tableSection) {
                    if (isVisible) {
                        tableSection.style.display = '';
                    } else {
                        tableSection.style.display = 'none';
                    }
                }
            }
            
            saveSettings();
        });
    });
}

function showTab(tab) {
    const tabs = ['colorsTab', 'fontsTab', 'chartsTab'];
    const buttons = document.querySelectorAll('.settings-tabs .btn');
    
    tabs.forEach(t => {
        const element = document.getElementById(t);
        if (element) {
            element.classList.toggle('hidden', t !== tab + 'Tab');
        }
    });

    buttons.forEach((btn, i) => {
        if (i < 3) { // Only first 3 buttons are tabs
            if ((tab === 'colors' && i === 0) || (tab === 'fonts' && i === 1) || (tab === 'charts' && i === 2)) {
                btn.classList.replace('btn-secondary', 'btn-primary');
            } else {
                btn.classList.replace('btn-primary', 'btn-secondary');
            }
        }
    });
}

function applyColors() {
    const root = document.documentElement;
    root.style.setProperty('--primary', document.getElementById('colorPrimary').value);
    root.style.setProperty('--primary-light', document.getElementById('colorPrimaryLight').value);
    root.style.setProperty('--dark', document.getElementById('colorDark').value);
    root.style.setProperty('--accent-yellow', document.getElementById('colorYellow').value);
    root.style.setProperty('--accent-blue', document.getElementById('colorBlue').value);
    root.style.setProperty('--bg-primary', document.getElementById('colorDark').value);
    root.style.setProperty('--text-secondary', document.getElementById('colorPrimaryLight').value);
}

function applyFont() {
    const font = document.getElementById('fontFamily').value;
    document.documentElement.style.setProperty('--font-family', `'${font}', sans-serif`);
    
    // Load font dynamically
    const link = document.createElement('link');
    link.href = `https://fonts.googleapis.com/css2?family=${font.replace(/ /g, '+')}:wght@300;400;500;600;700;800;900&display=swap`;
    link.rel = 'stylesheet';
    document.head.appendChild(link);
}

function saveSettings() {
    const settings = {
        primary: document.getElementById('colorPrimary').value,
        primaryLight: document.getElementById('colorPrimaryLight').value,
        dark: document.getElementById('colorDark').value,
        yellow: document.getElementById('colorYellow').value,
        blue: document.getElementById('colorBlue').value,
        font: document.getElementById('fontFamily').value,
        visibleCharts: visibleCharts
    };
    localStorage.setItem('caasieSettings', JSON.stringify(settings));
}

function loadSettings() {
    const saved = localStorage.getItem('caasieSettings');
    if (saved) {
        const settings = JSON.parse(saved);
        document.getElementById('colorPrimary').value = settings.primary;
        document.getElementById('colorPrimaryLight').value = settings.primaryLight;
        document.getElementById('colorDark').value = settings.dark;
        document.getElementById('colorYellow').value = settings.yellow;
        document.getElementById('colorBlue').value = settings.blue;
        document.getElementById('fontFamily').value = settings.font;
        
        if (settings.visibleCharts) {
            visibleCharts = settings.visibleCharts;
            // Update checkboxes
            document.getElementById('toggleDailyPerformance').checked = visibleCharts.dailyPerformance;
            document.getElementById('toggleVenueDistribution').checked = visibleCharts.venueDistribution;
            document.getElementById('toggleCostAnalysis').checked = visibleCharts.costAnalysis;
            document.getElementById('toggleScreenTime').checked = visibleCharts.screenTime;
            document.getElementById('toggleTopBoards').checked = visibleCharts.topBoards;
            
            // Apply visibility
            applyChartVisibility();
        }
        
        applyColors();
        applyFont();
    }
}

function applyChartVisibility() {
    const sections = [
        { id: 'dailyPerformanceSection', visible: visibleCharts.dailyPerformance },
        { id: 'venueDistributionSection', visible: visibleCharts.venueDistribution },
        { id: 'costAnalysisSection', visible: visibleCharts.costAnalysis },
        { id: 'screenTimeSection', visible: visibleCharts.screenTime },
        { id: 'topBoardsSection', visible: visibleCharts.topBoards },
        { id: 'topBoardsTableSection', visible: visibleCharts.topBoards }
    ];
    
    sections.forEach(section => {
        const element = document.getElementById(section.id);
        if (element) {
            element.style.display = section.visible ? '' : 'none';
        }
    });
}

function resetSettings() {
    localStorage.removeItem('caasieSettings');
    document.getElementById('colorPrimary').value = '#00ff88';
    document.getElementById('colorPrimaryLight').value = '#a8ffdb';
    document.getElementById('colorDark').value = '#0a1f1f';
    document.getElementById('colorYellow').value = '#ffd700';
    document.getElementById('colorBlue').value = '#00d4ff';
    document.getElementById('fontFamily').value = 'Poppins';
    
    // Reset chart visibility
    visibleCharts = {
        dailyPerformance: true,
        venueDistribution: true,
        costAnalysis: true,
        screenTime: true,
        topBoards: true
    };
    
    document.getElementById('toggleDailyPerformance').checked = true;
    document.getElementById('toggleVenueDistribution').checked = true;
    document.getElementById('toggleCostAnalysis').checked = true;
    document.getElementById('toggleScreenTime').checked = true;
    document.getElementById('toggleTopBoards').checked = true;
    
    applyColors();
    applyFont();
    applyChartVisibility();
    updateCharts(currentData);
}

// ===== DASHBOARD UPDATE =====

function updateDashboard(data) {
    if (!data || data.length === 0) return;

    updateMetrics(data);
    updateCharts(data);
    updateTopBoards(data);
}

function updateMetrics(data) {
    const totalPlays = data.reduce((sum, d) => sum + (d['Total Plays'] || 0), 0);
    const totalAudience = data.reduce((sum, d) => sum + (d['Total Audience'] || 0), 0);
    const totalCost = data.reduce((sum, d) => sum + (d['Total Cost (Your Currency)'] || 0), 0);
    const avgCPP = totalPlays > 0 ? totalCost / totalPlays : 0;
    const uniqueBoards = new Set(data.map(d => d.Board)).size;
    const uniqueVenues = new Set(data.map(d => d['Venue Type'])).size;
    const avgScreenTime = data.reduce((sum, d) => sum + (d['Total Screen Time (secs)'] || 0), 0) / data.length;
    const uniqueDates = new Set(data.map(d => d['Date (UTC)'])).size;

    const metrics = [
        { label: 'Total Plays', value: totalPlays.toLocaleString() },
        { label: 'Total Audience', value: totalAudience.toLocaleString(undefined, {maximumFractionDigits: 0}) },
        { label: 'Total Cost', value: `£${totalCost.toFixed(2)}` },
        { label: 'Avg CPP', value: `£${avgCPP.toFixed(4)}` },
        { label: 'Unique Boards', value: uniqueBoards },
        { label: 'Venue Types', value: uniqueVenues },
        { label: 'Avg Screen Time', value: `${Math.round(avgScreenTime)}s` },
        { label: 'Campaign Days', value: uniqueDates }
    ];

    const metricsGrid = document.getElementById('metricsGrid');
    metricsGrid.innerHTML = metrics.map(m => `
        <div class="metric-card">
            <div class="metric-label">${m.label}</div>
            <div class="metric-value">${m.value}</div>
        </div>
    `).join('');
}

function updateCharts(data) {
    // Destroy existing charts
    Object.values(charts).forEach(chart => {
        if (chart && typeof chart.destroy === 'function') {
            chart.destroy();
        }
    });
    charts = {};

    // Get current colors
    const primary = getComputedStyle(document.documentElement).getPropertyValue('--primary').trim();
    const yellow = getComputedStyle(document.documentElement).getPropertyValue('--accent-yellow').trim();
    const blue = getComputedStyle(document.documentElement).getPropertyValue('--accent-blue').trim();

    // Daily Performance Chart
    if (visibleCharts.dailyPerformance) {
        createDailyChart(data, primary, yellow);
    }

    // Venue Distribution Chart
    if (visibleCharts.venueDistribution) {
        createVenueChart(data, primary, yellow, blue);
    }

    // Cost Analysis Chart
    if (visibleCharts.costAnalysis) {
        createCostChart(data, primary);
    }

    // Screen Time Chart
    if (visibleCharts.screenTime) {
        createScreenTimeChart(data, yellow);
    }

    // Top Boards Audience Chart
    if (visibleCharts.topBoards) {
        createAudienceChart(data, primary);
    }
}

function createDailyChart(data, primary, yellow) {
    const dailyData = {};
    data.forEach(d => {
        const date = d['Date (UTC)'];
        if (!dailyData[date]) {
            dailyData[date] = { plays: 0, audience: 0 };
        }
        dailyData[date].plays += d['Total Plays'] || 0;
        dailyData[date].audience += d['Total Audience'] || 0;
    });

    const dates = Object.keys(dailyData).sort();

    const ctx = document.getElementById('dailyChart').getContext('2d');
    charts.daily = new Chart(ctx, {
        type: 'line',
        data: {
            labels: dates.map(d => new Date(d).toLocaleDateString('en-GB', {month: 'short', day: 'numeric'})),
            datasets: [
                {
                    label: 'Total Plays',
                    data: dates.map(d => dailyData[d].plays),
                    borderColor: primary,
                    backgroundColor: primary + '33',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 6,
                    pointHoverRadius: 8
                },
                {
                    label: 'Total Audience',
                    data: dates.map(d => dailyData[d].audience),
                    borderColor: yellow,
                    backgroundColor: yellow + '33',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true,
                    pointRadius: 6,
                    pointHoverRadius: 8,
                    yAxisID: 'y1'
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            interaction: { mode: 'index', intersect: false },
            plugins: {
                legend: { labels: { color: '#ffffff', font: { size: 12 } } }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#d6ffd2' }
                },
                y: {
                    type: 'linear',
                    position: 'left',
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#d6ffd2' }
                },
                y1: {
                    type: 'linear',
                    position: 'right',
                    grid: { display: false },
                    ticks: { color: '#d6ffd2' }
                }
            }
        }
    });
}

function createVenueChart(data, primary, yellow, blue) {
    const venueData = {};
    data.forEach(d => {
        const venue = d['Venue Type'];
        venueData[venue] = (venueData[venue] || 0) + (d['Total Plays'] || 0);
    });

    const ctx = document.getElementById('venueChart').getContext('2d');
    charts.venue = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: Object.keys(venueData),
            datasets: [{
                data: Object.values(venueData),
                backgroundColor: [
                    primary + 'CC',
                    yellow + 'CC',
                    blue + 'CC',
                    primary + '80',
                    yellow + '80'
                ],
                borderColor: '#ffffff',
                borderWidth: 2
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: {
                    position: 'bottom',
                    labels: { color: '#ffffff', font: { size: 11 }, padding: 15 }
                }
            }
        }
    });
}

function createCostChart(data, primary) {
    const costData = {};
    data.forEach(d => {
        const date = d['Date (UTC)'];
        costData[date] = (costData[date] || 0) + (d['Total Cost (Your Currency)'] || 0);
    });

    const costDates = Object.keys(costData).sort();
    const ctx = document.getElementById('costChart').getContext('2d');
    charts.cost = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: costDates.map(d => new Date(d).toLocaleDateString('en-GB', {month: 'short', day: 'numeric'})),
            datasets: [{
                label: 'Daily Cost (£)',
                data: costDates.map(d => costData[d]),
                backgroundColor: primary + 'BB',
                borderColor: primary,
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#ffffff', font: { size: 12 } } }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#d6ffd2' }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: {
                        color: '#d6ffd2',
                        callback: (value) => `£${value.toFixed(2)}`
                    }
                }
            }
        }
    });
}

function createScreenTimeChart(data, yellow) {
    const bins = {
        '<1min': 0,
        '1-2min': 0,
        '2-5min': 0,
        '5-10min': 0,
        '10+min': 0
    };

    data.forEach(d => {
        const time = d['Total Screen Time (secs)'] || 0;
        if (time < 60) bins['<1min']++;
        else if (time < 120) bins['1-2min']++;
        else if (time < 300) bins['2-5min']++;
        else if (time < 600) bins['5-10min']++;
        else bins['10+min']++;
    });

    const ctx = document.getElementById('screenTimeChart').getContext('2d');
    charts.screenTime = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: Object.keys(bins),
            datasets: [{
                label: 'Number of Plays',
                data: Object.values(bins),
                backgroundColor: yellow + 'BB',
                borderColor: yellow,
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#ffffff', font: { size: 12 } } }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#d6ffd2' }
                },
                y: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: { color: '#d6ffd2' }
                }
            }
        }
    });
}

function createAudienceChart(data, primary) {
    const boardData = {};
    data.forEach(d => {
        const board = d.Board;
        boardData[board] = (boardData[board] || 0) + (d['Total Audience'] || 0);
    });

    const sortedBoards = Object.entries(boardData)
        .sort((a, b) => b[1] - a[1])
        .slice(0, 10);

    const ctx = document.getElementById('audienceChart').getContext('2d');
    charts.audience = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: sortedBoards.map(b => {
                const name = b[0];
                return name.length > 30 ? name.substring(0, 30) + '...' : name;
            }),
            datasets: [{
                label: 'Total Audience',
                data: sortedBoards.map(b => b[1]),
                backgroundColor: primary + 'BB',
                borderColor: primary,
                borderWidth: 2,
                borderRadius: 8
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { labels: { color: '#ffffff', font: { size: 11 } } }
            },
            scales: {
                x: {
                    grid: { color: 'rgba(255, 255, 255, 0.1)' },
                    ticks: {
                        color: '#d6ffd2',
                        callback: (value) => value.toLocaleString()
                    }
                },
                y: {
                    grid: { display: false },
                    ticks: { color: '#d6ffd2', font: { size: 9 } }
                }
            }
        }
    });
}

function updateTopBoards(data) {
    const boardData = {};
    
    data.forEach(d => {
        const key = `${d.Board}|${d['Venue Type']}`;
        if (!boardData[key]) {
            boardData[key] = {
                board: d.Board,
                venue: d['Venue Type'],
                plays: 0,
                audience: 0,
                cost: 0
            };
        }
        boardData[key].plays += d['Total Plays'] || 0;
        boardData[key].audience += d['Total Audience'] || 0;
        boardData[key].cost += d['Total Cost (Your Currency)'] || 0;
    });

    const topBoards = Object.values(boardData)
        .sort((a, b) => b.audience - a.audience)
        .slice(0, 10);

    const tbody = document.querySelector('#topBoardsTable tbody');
    tbody.innerHTML = topBoards.map(b => `
        <tr>
            <td>${b.board}</td>
            <td>${b.venue}</td>
            <td>${b.plays.toLocaleString()}</td>
            <td>${b.audience.toLocaleString(undefined, {maximumFractionDigits: 0})}</td>
            <td>£${b.cost.toFixed(2)}</td>
        </tr>
    `).join('');
}
