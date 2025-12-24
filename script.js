// Sample Data
const SAMPLE_DATA = [
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-18",
    "Board": "Hagey Road Hagley Road, Opp Gillott Road Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47266006,
    "Longitude": -1.951403141,
    "Total Plays": 29,
    "Total Audience": 116.51,
    "Total Cost (Your Currency)": 3.9,
    "Average CPP (Your Currency)": 0.14,
    "Total Screen Time (secs)": 290
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "1234855509",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475925,
    "Longitude": -1.893709,
    "Total Plays": 42,
    "Total Audience": 21.2,
    "Total Cost (Your Currency)": 2.38,
    "Average CPP (Your Currency)": 0.06,
    "Total Screen Time (secs)": 420
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "1234847606",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.47866,
    "Longitude": -1.892118,
    "Total Plays": 50,
    "Total Audience": 462.92,
    "Total Cost (Your Currency)": 12.91,
    "Average CPP (Your Currency)": 0.26,
    "Total Screen Time (secs)": 500
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-20",
    "Board": "1234853698",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.472545,
    "Longitude": -1.916788,
    "Total Plays": 35,
    "Total Audience": 164.72,
    "Total Cost (Your Currency)": 3.71,
    "Average CPP (Your Currency)": 0.11,
    "Total Screen Time (secs)": 350
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-18",
    "Board": "Hagley Road West Bearwood Road Sandwell",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.4713974,
    "Longitude": -1.969364762,
    "Total Plays": 87,
    "Total Audience": 497.81,
    "Total Cost (Your Currency)": 16.16,
    "Average CPP (Your Currency)": 0.19,
    "Total Screen Time (secs)": 870
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-19",
    "Board": "Cape Hill Outside Roshini Fashions Sandwell",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.48657608,
    "Longitude": -1.958986759,
    "Total Plays": 7,
    "Total Audience": 24.24,
    "Total Cost (Your Currency)": 0.83,
    "Average CPP (Your Currency)": 0.12,
    "Total Screen Time (secs)": 70
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "Pershore Street Near Upper Dean Street Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.4761734,
    "Longitude": -1.896629214,
    "Total Plays": 3,
    "Total Audience": 2.27,
    "Total Cost (Your Currency)": 0.17,
    "Average CPP (Your Currency)": 0.06,
    "Total Screen Time (secs)": 30
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "Bristol Road Outside Birmingham Uni Opp Bournbrook",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.44656754,
    "Longitude": -1.927949548,
    "Total Plays": 17,
    "Total Audience": 55.28,
    "Total Cost (Your Currency)": 1.86,
    "Average CPP (Your Currency)": 0.11,
    "Total Screen Time (secs)": 170
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "James Watt Queensway James Watt Queensway, O/s Mary Sturge Residences Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.48596954,
    "Longitude": -1.891422629,
    "Total Plays": 2,
    "Total Audience": 2.94,
    "Total Cost (Your Currency)": 0.15,
    "Average CPP (Your Currency)": 0.08,
    "Total Screen Time (secs)": 20
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "1234855509",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475925,
    "Longitude": -1.893709,
    "Total Plays": 20,
    "Total Audience": 2.9,
    "Total Cost (Your Currency)": 0.9,
    "Average CPP (Your Currency)": 0.04,
    "Total Screen Time (secs)": 200
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "Smallbrook Queensway Opp Boots 5074101 Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47757339,
    "Longitude": -1.894888639,
    "Total Plays": 7,
    "Total Audience": 41.58,
    "Total Cost (Your Currency)": 1.3,
    "Average CPP (Your Currency)": 0.2,
    "Total Screen Time (secs)": 70
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "Bristol Road Before Lodge Hill Road Selly Oak Birm",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.43740463,
    "Longitude": -1.943763256,
    "Total Plays": 3,
    "Total Audience": 8.69,
    "Total Cost (Your Currency)": 0.32,
    "Average CPP (Your Currency)": 0.11,
    "Total Screen Time (secs)": 30
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-18",
    "Board": "Hagley Road Five Ways Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47314453,
    "Longitude": -1.919588089,
    "Total Plays": 12,
    "Total Audience": 61.25,
    "Total Cost (Your Currency)": 1.9,
    "Average CPP (Your Currency)": 0.16,
    "Total Screen Time (secs)": 120
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "1234855123",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.47922,
    "Longitude": -1.893231,
    "Total Plays": 6,
    "Total Audience": 11.34,
    "Total Cost (Your Currency)": 0.87,
    "Average CPP (Your Currency)": 0.14,
    "Total Screen Time (secs)": 60
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "Ladywood Middleway Approaching Five Ways Opp Broad",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47367477,
    "Longitude": -1.920470476,
    "Total Plays": 11,
    "Total Audience": 23.56,
    "Total Cost (Your Currency)": 1.01,
    "Average CPP (Your Currency)": 0.09,
    "Total Screen Time (secs)": 110
  },
  {
    "Campaign": "Focused selly oak",
    "Date (UTC)": "2025-12-24",
    "Board": "BRUM15",
    "Venue Type": "education.colleges",
    "Latitude": 52.44623,
    "Longitude": -1.9322,
    "Total Plays": 37,
    "Total Audience": 115.91,
    "Total Cost (Your Currency)": 3.28,
    "Average CPP (Your Currency)": 0.09,
    "Total Screen Time (secs)": 370
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-20",
    "Board": "James Watt Queensway James Watt Queensway, O/s Mary Sturge Residences Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.48596954,
    "Longitude": -1.891422629,
    "Total Plays": 32,
    "Total Audience": 103.6,
    "Total Cost (Your Currency)": 3.89,
    "Average CPP (Your Currency)": 0.12,
    "Total Screen Time (secs)": 320
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "Harborne Lane 2nd Shelter Selly Oak Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.44017029,
    "Longitude": -1.941214681,
    "Total Plays": 2,
    "Total Audience": 12.96,
    "Total Cost (Your Currency)": 0.4,
    "Average CPP (Your Currency)": 0.2,
    "Total Screen Time (secs)": 20
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "Moor Street Queensway Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47866058,
    "Longitude": -1.892117858,
    "Total Plays": 4,
    "Total Audience": 65.23,
    "Total Cost (Your Currency)": 1.44,
    "Average CPP (Your Currency)": 0.36,
    "Total Screen Time (secs)": 40
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-20",
    "Board": "1234855749",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475924,
    "Longitude": -1.893697,
    "Total Plays": 49,
    "Total Audience": 15.33,
    "Total Cost (Your Currency)": 2.35,
    "Average CPP (Your Currency)": 0.05,
    "Total Screen Time (secs)": 490
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-20",
    "Board": "Smallbrook Queensway Opp Boots 5074101 Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47757339,
    "Longitude": -1.894888639,
    "Total Plays": 3,
    "Total Audience": 11.43,
    "Total Cost (Your Currency)": 0.42,
    "Average CPP (Your Currency)": 0.14,
    "Total Screen Time (secs)": 30
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "Smallbrook Queensway Adj Bull Ring Steps 0098090 B",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47757339,
    "Longitude": -1.894888639,
    "Total Plays": 7,
    "Total Audience": 8.88,
    "Total Cost (Your Currency)": 0.65,
    "Average CPP (Your Currency)": 0.09,
    "Total Screen Time (secs)": 70
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "Smallbrook Queensway Opp Boots 5074101 Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47757339,
    "Longitude": -1.894888639,
    "Total Plays": 15,
    "Total Audience": 71.55,
    "Total Cost (Your Currency)": 2.63,
    "Average CPP (Your Currency)": 0.17,
    "Total Screen Time (secs)": 150
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-19",
    "Board": "Hagley Road After Monument Outside 157 Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.4720993,
    "Longitude": -1.930734396,
    "Total Plays": 6,
    "Total Audience": 28.54,
    "Total Cost (Your Currency)": 1.04,
    "Average CPP (Your Currency)": 0.17,
    "Total Screen Time (secs)": 60
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "1234855512",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.476253,
    "Longitude": -1.896864,
    "Total Plays": 7,
    "Total Audience": 20.9,
    "Total Cost (Your Currency)": 0.72,
    "Average CPP (Your Currency)": 0.1,
    "Total Screen Time (secs)": 70
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "1234855120",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.476129,
    "Longitude": -1.897006,
    "Total Plays": 13,
    "Total Audience": 54.68,
    "Total Cost (Your Currency)": 1.78,
    "Average CPP (Your Currency)": 0.14,
    "Total Screen Time (secs)": 130
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "1234855510",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475925,
    "Longitude": -1.893699,
    "Total Plays": 19,
    "Total Audience": 31.62,
    "Total Cost (Your Currency)": 1.51,
    "Average CPP (Your Currency)": 0.08,
    "Total Screen Time (secs)": 190
  },
  {
    "Campaign": "Focused ads - Northfield",
    "Date (UTC)": "2025-12-23",
    "Board": "Bristol Road South Outside Leisure Centre Northfie",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.41242218,
    "Longitude": -1.9719491,
    "Total Plays": 13,
    "Total Audience": 56.37,
    "Total Cost (Your Currency)": 1.74,
    "Average CPP (Your Currency)": 0.13,
    "Total Screen Time (secs)": 130
  },
  {
    "Campaign": "Focused selly oak",
    "Date (UTC)": "2025-12-24",
    "Board": "Bristol Road 1st Shelter Outside Sainsburys Selly",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.44217682,
    "Longitude": -1.939078808,
    "Total Plays": 4,
    "Total Audience": 18.47,
    "Total Cost (Your Currency)": 0.72,
    "Average CPP (Your Currency)": 0.18,
    "Total Screen Time (secs)": 40
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-18",
    "Board": "Cape Hill Outside Roshini Fashions Sandwell",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.48657608,
    "Longitude": -1.958986759,
    "Total Plays": 15,
    "Total Audience": 54.06,
    "Total Cost (Your Currency)": 1.87,
    "Average CPP (Your Currency)": 0.13,
    "Total Screen Time (secs)": 150
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-21",
    "Board": "Bristol Road Before Lodge Hill Road Selly Oak Birm",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.43740463,
    "Longitude": -1.943763256,
    "Total Plays": 1,
    "Total Audience": 2.12,
    "Total Cost (Your Currency)": 0.08,
    "Average CPP (Your Currency)": 0.08,
    "Total Screen Time (secs)": 10
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-21",
    "Board": "Hagley Road Five Ways Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47314453,
    "Longitude": -1.919588089,
    "Total Plays": 12,
    "Total Audience": 15.7,
    "Total Cost (Your Currency)": 1.41,
    "Average CPP (Your Currency)": 0.12,
    "Total Screen Time (secs)": 120
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "Hagley Road West Bearwood Road Sandwell",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.4713974,
    "Longitude": -1.969364762,
    "Total Plays": 13,
    "Total Audience": 70.27,
    "Total Cost (Your Currency)": 2.28,
    "Average CPP (Your Currency)": 0.18,
    "Total Screen Time (secs)": 130
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-24",
    "Board": "1234855120",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.476129,
    "Longitude": -1.897006,
    "Total Plays": 13,
    "Total Audience": 47.5,
    "Total Cost (Your Currency)": 1.63,
    "Average CPP (Your Currency)": 0.13,
    "Total Screen Time (secs)": 130
  },
  {
    "Campaign": "Focused ads - Northfield",
    "Date (UTC)": "2025-12-24",
    "Board": "Bristol Road South Bell Lane Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.41553116,
    "Longitude": -1.970182776,
    "Total Plays": 11,
    "Total Audience": 51.22,
    "Total Cost (Your Currency)": 1.57,
    "Average CPP (Your Currency)": 0.14,
    "Total Screen Time (secs)": 110
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "Hagley Road After Monument Outside 157 Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.4720993,
    "Longitude": -1.930734396,
    "Total Plays": 14,
    "Total Audience": 43.34,
    "Total Cost (Your Currency)": 1.89,
    "Average CPP (Your Currency)": 0.13,
    "Total Screen Time (secs)": 140
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-20",
    "Board": "Upper Dean Street Upper Dean Street Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47544479,
    "Longitude": -1.894113302,
    "Total Plays": 15,
    "Total Audience": 12.14,
    "Total Cost (Your Currency)": 0.9,
    "Average CPP (Your Currency)": 0.06,
    "Total Screen Time (secs)": 150
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-18",
    "Board": "1234855512",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.476253,
    "Longitude": -1.896864,
    "Total Plays": 6,
    "Total Audience": 27.3,
    "Total Cost (Your Currency)": 0.91,
    "Average CPP (Your Currency)": 0.15,
    "Total Screen Time (secs)": 60
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "1234854026",
    "Venue Type": "retail.grocery",
    "Latitude": 52.4882,
    "Longitude": -1.96114,
    "Total Plays": 6,
    "Total Audience": 14.25,
    "Total Cost (Your Currency)": 0.43,
    "Average CPP (Your Currency)": 0.07,
    "Total Screen Time (secs)": 60
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-21",
    "Board": "Birchfield Lane At Borough Crescent Oldbury",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.49167252,
    "Longitude": -2.024815321,
    "Total Plays": 32,
    "Total Audience": 26.09,
    "Total Cost (Your Currency)": 1.92,
    "Average CPP (Your Currency)": 0.06,
    "Total Screen Time (secs)": 320
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-19",
    "Board": "Bristol Road Outside Birmingham Uni Opp Bournbrook",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.44656754,
    "Longitude": -1.927949548,
    "Total Plays": 8,
    "Total Audience": 20.21,
    "Total Cost (Your Currency)": 0.81,
    "Average CPP (Your Currency)": 0.1,
    "Total Screen Time (secs)": 80
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "1234847611",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.479138,
    "Longitude": -1.893245,
    "Total Plays": 26,
    "Total Audience": 165.15,
    "Total Cost (Your Currency)": 6.3,
    "Average CPP (Your Currency)": 0.24,
    "Total Screen Time (secs)": 260
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-19",
    "Board": "1234855241",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475922,
    "Longitude": -1.893705,
    "Total Plays": 26,
    "Total Audience": 43.18,
    "Total Cost (Your Currency)": 2.02,
    "Average CPP (Your Currency)": 0.08,
    "Total Screen Time (secs)": 260
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-19",
    "Board": "Birchfield Lane At Borough Crescent Oldbury",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.49167252,
    "Longitude": -2.024815321,
    "Total Plays": 41,
    "Total Audience": 62.47,
    "Total Cost (Your Currency)": 3.12,
    "Average CPP (Your Currency)": 0.08,
    "Total Screen Time (secs)": 410
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "1234855510",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475925,
    "Longitude": -1.893699,
    "Total Plays": 50,
    "Total Audience": 26.22,
    "Total Cost (Your Currency)": 2.63,
    "Average CPP (Your Currency)": 0.05,
    "Total Screen Time (secs)": 500
  },
  {
    "Campaign": "Focused harbone",
    "Date (UTC)": "2025-12-24",
    "Board": "Hagley Road Outside Nightclub Birmingham",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47019196,
    "Longitude": -1.94407475,
    "Total Plays": 4,
    "Total Audience": 42.66,
    "Total Cost (Your Currency)": 1.12,
    "Average CPP (Your Currency)": 0.28,
    "Total Screen Time (secs)": 40
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-18",
    "Board": "Ladywood Middleway Approaching Five Ways Opp Broad",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.47367477,
    "Longitude": -1.920470476,
    "Total Plays": 38,
    "Total Audience": 205.66,
    "Total Cost (Your Currency)": 6.32,
    "Average CPP (Your Currency)": 0.17,
    "Total Screen Time (secs)": 380
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-23",
    "Board": "Bristol Road Before Lodge Hill Road Selly Oak Birm",
    "Venue Type": "outdoor.urban_panels",
    "Latitude": 52.43740463,
    "Longitude": -1.943763256,
    "Total Plays": 3,
    "Total Audience": 13.2,
    "Total Cost (Your Currency)": 0.47,
    "Average CPP (Your Currency)": 0.16,
    "Total Screen Time (secs)": 30
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-22",
    "Board": "1234855241",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475922,
    "Longitude": -1.893705,
    "Total Plays": 12,
    "Total Audience": 9.51,
    "Total Cost (Your Currency)": 0.7,
    "Average CPP (Your Currency)": 0.06,
    "Total Screen Time (secs)": 120
  },
  {
    "Campaign": "TC Christmas 2025",
    "Date (UTC)": "2025-12-19",
    "Board": "1234855749",
    "Venue Type": "outdoor.bus_shelters",
    "Latitude": 52.475924,
    "Longitude": -1.893697,
    "Total Plays": 33,
    "Total Audience": 8.74,
    "Total Cost (Your Currency)": 1.52,
    "Average CPP (Your Currency)": 0.05,
    "Total Screen Time (secs)": 330
  }
];

// Global State
let currentData = SAMPLE_DATA;
let charts = {};
let visibleCharts = {
    dailyPerformance: true,
    venueDistribution: true,
    costAnalysis: true,
    screenTime: true,
    topBoards: true
};

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    setupFileUpload();
    setupSettings();
    setupChartToggles();
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
                updateDashboard(currentData);
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
                updateDashboard(currentData);
            } catch (error) {
                alert(`Error parsing Excel: ${error.message}`);
            }
        };
        reader.readAsArrayBuffer(file);
    } else {
        alert('Please upload a CSV or Excel file (.csv, .xlsx, .xls)');
    }
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
    document.getElementById('colorPrimary').value = '#3bd62b';
    document.getElementById('colorPrimaryLight').value = '#d6ffd2';
    document.getElementById('colorDark').value = '#001a23';
    document.getElementById('colorYellow').value = '#fece00';
    document.getElementById('colorBlue').value = '#18265e';
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
