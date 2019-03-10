var opts = {
  angle: 0.10, // The span of the gauge arc
  lineWidth: 0.33, // The line thickness
  radiusScale: 1, // Relative radius
  radius: 70,
  pointer: {
    length: 0.6, // // Relative to gauge radius
    strokeWidth: 0.030, // The thickness
    color: '#000000' // Fill color
  },
  minValue: 0,
  maxValue: 100,
  limitMax: true,     // If false, max value increases automatically if value > maxValue
  limitMin: true,     // If true, the min value of the gauge will be fixed
  colorStart: '#dad3f2',   // Colors
  colorStop: '#bcb1f9',    // just experiment with them
  strokeColor: '#E0E0E0',  // to see which ones work best for you
  generateGradient: true,
  highDpiSupport: true,     // High resolution support
  fontSize:80,
  generateGradient: true,
  renderTicks: {
    divisions: 8,
    divWidth: 1.1,
    divLength: 0.5,
    divColor: '#663656',
    subDivisions: 4,
    subLength: 0.5,
    subWidth: 0.6,
    subColor: '#666666'
  }
};
// http://bernii.github.io/gauge.js/#?currval=3000&animationSpeed=69&angle=6&lineWidth=45&radiusScale=100&pointer.length=60&pointer.color=000000&pointer.strokeWidth=40&fontSize=69&colorStart=3EC1CF&colorStop=DA0000&strokeColor=E0E0E0&
var target = document.getElementById('foo'); // your canvas element
var gauge = new Gauge(target).setOptions(opts); // create sexy gauge!
gauge.maxValue = 100;
gauge.setMinValue(0);  // Prefer setter over gauge.minValue = 0
gauge.animationSpeed = 64; // set animation speed (32 is default value)
gauge.set(0); // set actual value
