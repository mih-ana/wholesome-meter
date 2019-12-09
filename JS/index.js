window.onload = () => {
  var button = document.getElementById("press-me");
  var messageBox = document.getElementById("messageBox");
  var clicked = false;

  button.onclick = () => {
    if (!clicked) {
      rerender();
    }
  };

  function loadJS() {
    var head = document.getElementsByTagName("head")[0];
    var script = document.createElement("script");
    script.src = "https://platform.twitter.com/widgets.js";
    head.appendChild(script);
  }

  function createAelement(text) {
    var el = document.createElement("a");
    el.setAttribute("href", "https://twitter.com/share?ref_src=twsrc%5Etfw");
    el.setAttribute("class", "twitter-share-button");
    el.setAttribute("data-text", text);
    el.setAttribute("data-hashtags", "wholesome-meter");
    return el;
  }

  function rerender() {
    button.style.display = "none";
    clicked = true;
    messageBox.innerHTML = "<p> Calculating wholesome levels... </p>";
    gauge = new Gauge(target).setOptions(opts); // create gauge!
    var val =
      gauge.maxValue -
      Math.floor(Math.random() * Math.round(0.1 * gauge.maxValue));
    // console.log(gauge.maxValue, val);
    gauge.set(val);
    setTimeout(() => {
      var message = messages[Math.floor(Math.random() * messages.length)];
      messageBox.innerHTML = "<p>" + message + "</p>";
      messageBox.appendChild(createAelement(message));
      loadJS();
    }, 2000);
  }

  var messages = [
    "Faith is taking the first step,<br> even when you don't see the whole staircase.<br> - Martin Luther King, Jr.",
    "You are never too old to set another goal,<br> or to dream a new dream.<br> - C. S. Lewis",
    "People will forget what you said, people will forget what you did,<br> but people will never forget how you made them feel.<br> - Maya Angelou",
    "Don't hurry. Don't worry.<br> And be sure to smell the flowers along the way.<br> - Walter Hagen",
    "Stand often in the company of dreamers.<br> They believe you can achieve impossible things.<br> - Mary Anne Radmacher",
    "Sing like no one's listening, love like you've never been hurt,<br> dance like nobody's watching, and live like its heaven on earth.<br> - Mark Twain.",
    "If you don't know where you're going,<br> any road will take you there.<br> - Lewis Carroll",
    "Every wall is a door.<br> - Ralph Waldo Emerson",
    "The future belongs to those who believe<br> in the beauty of their dreams.<br> - Eleanor Roosevelt",
    "They can because they <em>think</em> they can.<br> - Virgil",
    "When it's darkest, men see the stars.<br> - Ralph Waldo Emerson",
    "I am not afraid of storms,<br> for I am learning how to sail my ship.<br> - Louisa May Alcott",
    "Individually, we are one drop.<br> Together, we are an ocean.<br> - Ryunosuke Satoro",
    "Resolve to keep happy, and your joy and you<br> shall form an invincible host against difficulties.<br> - Helen Keller",
    "A healthy attitude is contagious but don't wait to catch it from others.<br> Be a carrier.<br> - Tom Stoppard",
    "Today is my day to dance lightly with life.<br> - Jonathan Lockwood Huie",
    "A positive attitude can really make dreams come true,<br> it did for me.<br> - David Bailey",
    "My optimism wears heavy boots and is loud.<br> - Henry Rollins",
    "Keep your face always toward the sunshine,<br> and shadows will fall behind you.<br> - Walt Whitman",
    "No matter what people tell you,<br> words and ideas can change the world.<br> - Robin Williams",
    'Nothing is impossible.<br> The word itself says "I\'m possible!"<br> - Audrey Hepburn',
    "It isn't where you came from.<br> It's where you're going that counts.<br> - Ella Fitzgerald"
  ];
};
