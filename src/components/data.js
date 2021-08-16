const data = {
  statewide: {
    adultBeds: [
      { hospital: 'Providence St. Patrick Hospital', beds: 31 },
      { hospital: 'Logan Health', beds: 26 },
      { hospital: 'Benefis Community Care', beds: 32 },
      { hospital: 'Billings Clinic Hospital', beds: 45 },
      { hospital: 'Montana State Hospital', beds: 42 },
      { hospital: "St. Peter's Health", beds: 24 },
      { hospital: 'Glendive Medical Center', beds: 50 }
    ],
    childBeds: [
      { hospital: "Shodair Children's Hospital", beds: 9 },
      { hospital: 'Billings Clinic Hospital', beds: 30 },
      { hospital: 'Providence Hospital', beds: 29 }
    ],
    adultEmPATH: [
      { hospital: 'Billings Clinic Hospital', beds: 35 },
      { hospital: 'Glendive Medical Center', beds: 6 },
      { hospital: 'Holy Rosary Hospital', beds: 22 },
      { hospital: 'Sidney Health Center', beds: 9 },
      { hospital: "Shodair Children's Hospital", beds: 22 }
    ],
    childEmPATH: [
      { hospital: 'Billings Clinic Hospital', beds: 8 },
      { hospital: "Shodair Children's Hospital", beds: 12 }
    ],
    scdData: [
      { date: new Date('2020-09'), rate: 13.66 },
      { date: new Date('2020-10'), rate: 21.11 },
      { date: new Date('2020-11'), rate: 18.54 },
      { date: new Date('2020-12'), rate: 19.06 },
      { date: new Date('2021-01'), rate: 12.10 },
      { date: new Date('2021-02'), rate: 16.36 },
      { date: new Date('2021-03'), rate: 14.68 },
      { date: new Date('2021-04'), rate: 16.08 },
      { date: new Date('2021-05'), rate: 11.95 },
      { date: new Date('2021-06'), rate: 11.00 },
      { date: new Date('2021-07'), rate: 13.54 },
      { date: new Date('2021-08'), rate: 12.92 }
    ],
    smiData: [
      { date: new Date('2020-09'), rate: 17.3 },
      { date: new Date('2020-10'), rate: 24.13 },
      { date: new Date('2020-11'), rate: 20.13 },
      { date: new Date('2020-12'), rate: 18.4 },
      { date: new Date('2021-01'), rate: 17.8 },
      { date: new Date('2021-02'), rate: 20.93 },
      { date: new Date('2021-03'), rate: 19.63 },
      { date: new Date('2021-04'), rate: 21.37 },
      { date: new Date('2021-05'), rate: 15.73 },
      { date: new Date('2021-06'), rate: 20.42 },
      { date: new Date('2021-07'), rate: 21.9 },
      { date: new Date('2021-08'), rate: 19.88 }
    ],
    sudData: [
      { date: new Date('2020-09'), rate: 26.99 },
      { date: new Date('2020-10'), rate: 37.56 },
      { date: new Date('2020-11'), rate: 30.96 },
      { date: new Date('2020-12'), rate: 30.9 },
      { date: new Date('2021-01'), rate: 26.37 },
      { date: new Date('2021-02'), rate: 26.51 },
      { date: new Date('2021-03'), rate: 32.18 },
      { date: new Date('2021-04'), rate: 29.3 },
      { date: new Date('2021-05'), rate: 30.69 },
      { date: new Date('2021-06'), rate: 33.21 },
      { date: new Date('2021-07'), rate: 33.13 },
      { date: new Date('2021-08'), rate: 31.23 }
    ],
    readmissions: [
      { date: new Date('2020-09'), rate: 17.19 },
      { date: new Date('2020-10'), rate: 22.63 },
      { date: new Date('2020-11'), rate: 15.03 },
      { date: new Date('2020-12'), rate: 23.06 },
      { date: new Date('2021-01'), rate: 26.96 },
      { date: new Date('2021-02'), rate: 11.4 },
      { date: new Date('2021-03'), rate: 15.46 },
      { date: new Date('2021-04'), rate: 22.94 },
      { date: new Date('2021-05'), rate: 19.84 },
      { date: new Date('2021-06'), rate: 20.27 },
      { date: new Date('2021-07'), rate: 18.57 },
      { date: new Date('2021-08'), rate: 19.72 }
    ],
    timeToReadmission: [
      { date: new Date('2020-09'), rate: 461 },
      { date: new Date('2020-10'), rate: 52 },
      { date: new Date('2020-11'), rate: 498 },
      { date: new Date('2020-12'), rate: 321 },
      { date: new Date('2021-01'), rate: 270 },
      { date: new Date('2021-02'), rate: 452 },
      { date: new Date('2021-03'), rate: 197 },
      { date: new Date('2021-04'), rate: 275 },
      { date: new Date('2021-05'), rate: 61 },
      { date: new Date('2021-06'), rate: 285 },
      { date: new Date('2021-07'), rate: 60 },
      { date: new Date('2021-08'), rate: 70 }
    ],
    followupRates: [
      { date: new Date('2020-09'), rate: 50.92 },
      { date: new Date('2020-10'), rate: 52.44 },
      { date: new Date('2020-11'), rate: 53.67 },
      { date: new Date('2020-12'), rate: 52.27 },
      { date: new Date('2021-01'), rate: 37.29 },
      { date: new Date('2021-02'), rate: 44.05 },
      { date: new Date('2021-03'), rate: 54.03 },
      { date: new Date('2021-04'), rate: 57.37 },
      { date: new Date('2021-05'), rate: 49.75 },
      { date: new Date('2021-06'), rate: 42.52 },
      { date: new Date('2021-07'), rate: 56.16 },
      { date: new Date('2021-08'), rate: 53.41 }
    ],
    stayData: [
      { date: new Date('2020-09'), rate: 9 },
      { date: new Date('2020-10'), rate: 9 },
      { date: new Date('2020-11'), rate: 4 },
      { date: new Date('2020-12'), rate: 3 },
      { date: new Date('2021-01'), rate: 3 },
      { date: new Date('2021-02'), rate: 7 },
      { date: new Date('2021-03'), rate: 4 },
      { date: new Date('2021-04'), rate: 7 },
      { date: new Date('2021-05'), rate: 9 },
      { date: new Date('2021-06'), rate: 6 },
      { date: new Date('2021-07'), rate: 10 },
      { date: new Date('2021-08'), rate: 7 }
    ],
    edLocations: [
      {
        name: 'Glendive Medical Center',
        city: 'Glendive',
        number: '738-555-3160',
        coordinates: [47.11792650055652, -104.70395611627464]
      },
      {
        name: 'Frances Mahon Deaconess Hospital',
        city: 'Glasgow',
        number: '359-555-7621',
        coordinates: [48.18981204076515, -106.63537154631985]
      },
      {
        name: 'Barrett Hospital & Healthcare',
        city: 'Dillon',
        number: '155-814-5327',
        coordinates: [45.20219723945498, -112.64728273273796]
      },
      {
        name: 'Holy Rosary Healthcare',
        city: 'Miles City',
        number: '868-784-6670',
        coordinates: [46.395851529810614, -105.8282375780751]
      },
      {
        name: 'Roosevelt Medical Center',
        city: 'Culbertson',
        number: '250-281-1727',
        coordinates: [48.15189390927604, -104.5147349003122]
      },
      {
        name: 'Livingston HealthCare',
        city: 'Livingston',
        number: '553-345-7334',
        coordinates: [45.67583250052617, -110.52708275521294]
      },
      {
        name: 'St. Luke Community Healthcare',
        city: 'Ronan',
        number: '932-393-3863',
        coordinates: [47.52994452935552, -114.10704674671666]
      },
      {
        name: 'Big Horn County Memorial Hospital',
        city: 'Hardin',
        number: '995-707-3046',
        coordinates: [45.72950822276518, -107.61654354777687]
      }
    ],
    mentalHealthHospitals: [
      {
        name: 'Providence Hospital',
        city: 'Missoula',
        number: '406-543-7271',
        coordinates: [46.87577554264733, -113.9994216911055]
      },
      {
        name: 'Logan Health',
        city: 'Kalispell',
        number: '406-752-5111',
        coordinates: [48.21513891885364, -114.32372034630467]
      },
      {
        name: 'Benefis Community Care',
        city: 'Kalispell',
        number: '406-752-0580',
        coordinates: [48.22682230319765, -114.30257078705924]
      },
      {
        name: 'Billings Clinic Hospital',
        city: 'Billings',
        number: '406-238-2500',
        coordinates: [45.78986201223207, -108.51278637102406]
      },
      {
        name: 'Montana State Hospital',
        city: 'Warm Springs',
        number: '406-693-7000',
        coordinates: [46.181160158654244, -112.79057523957525]
      },
      {
        name: "St. Peter's Health",
        city: 'Helena',
        number: '406-442-2480',
        coordinates: [46.58370091445607, -111.99672560865174]
      },
      {
        name: "Glendive Medical Center",
        city: 'Glendive',
        number: '406-345-3306',
        coordinates: [47.11804331455797, -104.70382737024401]
      }
    ]
  },
  frontier: {
    encounters: [
      { date: new Date('2020-09'), rate: 233 },
      { date: new Date('2020-10'), rate: 322 },
      { date: new Date('2020-11'), rate: 325 },
      { date: new Date('2020-12'), rate: 385 },
      { date: new Date('2021-01'), rate: 413 },
      { date: new Date('2021-02'), rate: 497 },
      { date: new Date('2021-03'), rate: 516 },
      { date: new Date('2021-04'), rate: 553 },
      { date: new Date('2021-05'), rate: 553 },
      { date: new Date('2021-06'), rate: 659 },
      { date: new Date('2021-07'), rate: 668 },
      { date: new Date('2021-08'), rate: 714 }
    ],
    encountersByProvider: [
      { name: 'Ackerman', value: 145 },
      { name: 'Truesdell', value: 112 },
      { name: 'Ghomi', value: 87 },
      { name: 'Sise', value: 82 },
      { name: 'Lehman', value: 78 },
      { name: 'Arzubi', value: 51 },
      { name: 'Patel', value: 38 },
      { name: 'Arias', value: 37 },
      { name: 'Duong', value: 21 },
      { name: 'Toretta', value: 11 },
      { name: 'Frieder', value: 3 }
    ],
    globalUtilization: [
      { date: new Date('2020-09'), rate: 36 },
      { date: new Date('2020-10'), rate: 40 },
      { date: new Date('2020-11'), rate: 44 },
      { date: new Date('2020-12'), rate: 45 },
      { date: new Date('2021-01'), rate: 45 },
      { date: new Date('2021-02'), rate: 46 },
      { date: new Date('2021-03'), rate: 56 },
      { date: new Date('2021-04'), rate: 63 },
      { date: new Date('2021-05'), rate: 66 },
      { date: new Date('2021-06'), rate: 87 },
      { date: new Date('2021-07'), rate: 88 },
      { date: new Date('2021-08'), rate: 90 }
    ],
    visitTypes: [
      { group: 'Scheduled', percent: 63 },
      { group: 'Unscheduled', percent: 37 }
    ],
    patientAges: [
      { group: '0-17', percent: 24.6 },
      { group: '18-25', percent: 12.5 },
      { group: '26-40', percent: 25.0 },
      { group: '41-55', percent: 14.3 },
      { group: '56-64', percent: 12.0 },
      { group: '65+', percent: 11.6 }
    ],
    patientGenders: [
      { group: 'Female', percent: 54.4 },
      { group: 'Male', percent: 42.9 },
      { group: 'Unknown', percent: 2.7 }
    ],
    patientRaces: [
      { group: 'White', percent: 85.9 },
      { group: 'Black', percent: 0.6 },
      { group: 'Hispanic/Latino', percent: 4.1 },
      { group: 'Asian', percent: 0.9 },
      { group: 'Other', percent: 8.5 }
    ],
    providerUtilization: [
      { name: 'Truesdell', value: 107 },
      { name: 'Ackerman', value: 81 },
      { name: 'Lehman', value: 55.4 },
      { name: 'Toretta', value: 100 },
      { name: 'Patel', value: 79 },
      { name: 'Duong', value: 102 },
      { name: 'Arias', value: 89 }
    ]
  }
};

export default data;