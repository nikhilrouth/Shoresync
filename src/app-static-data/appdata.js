// landUseData.js
const landUseFormData = {
  landUseData: {
    forest: false,
    scrubShrub: false,
    grass: false,
    agriculture: false,
    residential: false,
    commercial: false,
    industrial: false,
    marshIsland: false,
    bareLot: false,
    timberedClearCuts: false,
    pavedAreas: false,
    unknownLandUse: false,
  },
  errorMessage: "Select atleast one option to continue."
};



const overallData = {
  height : {"0 - 5ft": false,
  "5 - 10ft": false,
  "10 - 30ft": false,
  "> 30ft": false,
},

stability : {
  stable: false,
  transitional: false,
  unstable: false,
  undercut: false,
}, 

cover: {
  bare: false,
  partial: false,
  total: false,
}, 

marsh: {
  yes: false,
  no: false,

}, 

beach: {
  yes: false,
  no: false,

}, 

phragmites: {
  yes: false,
  no: false,
}

};

export {landUseFormData, overallData};
