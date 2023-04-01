module.exports = {
  testEnvironment: "jest-environment-jsdom",
  transform: {
    "\\.tsx?$": "ts-jest",
    "\\.jsx?$": "babel-jest",
    "\\.svg$": "<rootDir>/svgTransform.js",
  },
};
