// all Dr. Seuss quotes sourced from https://www.goodreads.com/author/quotes/61105.Dr_Seuss
$(document).ready(function() {
  var quotes = [ //21
    { 
      quote:"You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You're on your own. And you know what you know. And YOU are the one who'll decide where to go...",
      source: "Oh, The Places You'll Go!"
    },
    {
      quote: "Today you are You, that is truer than true. There is no one alive who is Youer than You.",
      source: "Happy Birthday to You!"
    },
    {
      quote: "The more that you read, the more things you will know. The more that you learn, the more places you'll go.",
      source: "I Can Read with My Eyes Shut!"
    },
    {
      quote: "A person's a person, no matter how small.",
      source: "Horton Hears a Who!"
    },
    {
      quote: "Unless someone like you cares a whole awful lot, Nothing is going to get better. It's not.",
      source: "The Lorax"
    },
    {
      quote: "You're off to Great Places! Today is your day! Your mountain is waiting, So... get on your way!",
      source: "Oh, The Places You'll Go!"
    },
    {
      quote: "From there to here, from here to there, funny things are everywhere!",
      source: "One Fish, Two Fish, Red Fish, Blue Fish"
    },
    {
      quote: "All alone! Whether you like it or not, alone is something you'll be quite a lot!",
      source: "Oh, The Places You'll Go! and The Lorax"
    },
    {
      quote: "Adults are just obsolete children and the hell with them.",
      source: "source unknown"
    },
    {
      quote: "You miss the best things if you keep your eyes shut.",
      source: "I Can Read With My Eyes Shut!"
    },
    {
      quote: "Christmas doesn't come from a store, maybe Christmas perhaps means a little bit more...",
      source: "How the Grinch Stole Christmas!"
    },
    {
      quote: "It's not about what it is, it's about what it can become.",
      source: "The Lorax"
    },
    {
      quote: "So the writer who breeds more words than he needs, is making a chore for the reader who reads.",
      source: "source unknown"
    },
    {
      quote: "And the turtles, of course... all the turtles are free, as turtles and, maybe, all creatures should be.",
      source: "Yertle the Turtle and Other Stories"
    },
    {
      quote: "I know it is wet and the sun is not sunny, but we can have lots of good fun that is funny.",
      source: "The Cat in the Hat"
    },
    {
      quote: "Sometimes you will never know the value of something, until it becomes a memory.",
      source: "source unknown"
    },
    {
      quote: "You have brains in your head. You have feet in your shoes. You can steer yourself in any direction you choose.",
      source: "Oh, The Places You'll Go!"
    },
    {
      quote: "And when you're alone there's a very good chance you'll meet things that scare you right out of your pants. There are some, down the road between hither and yon, that can scare you so much you won't want to go on.",
      source: "Oh, The Places You'll Go!"
    },
    {
      quote: "I meant what I said and I said what I meant.",
      source: "Horton Hatches the Egg"
    },
    {
      quote: "Everything stinks till it's finished.",
      source: "source unknown"
    }
]

  // Random function
  var random = function(min,max){
      return Math.floor(Math.random()* (max - min)) + min;
    };
  // Fetch random quote
  var getQuote = function() {
    var index = random(0,21);
    var randQuote = quotes[index].quote;
    var attribution = quotes[index].source;
    return $("#theQuote").text("\"" + randQuote + "\"").html("\"" + randQuote + "\"" + "<br><span>&ndash;Dr. Seuss, <br>" + attribution + "</span>");
  }
  
  // Display a quote on page load
  window.onload = getQuote();
  //$("#fish").attr("src", fish[0]);
  // Display a quote on click
  $("#showQuote").click(getQuote);  

  // Image loop ref: http://trendmedia.com/news/infinite-rotating-images-using-jquery-javascript/
  var imageLoop = function(){
    // fade-in time
    var initialFadeIn = 500;
    // fade-out time
    var fadeOutTime = 500;
    // interval between items
    var itemInterval = 3500;
    // Cross-fade time
    var fadeTime = 2000;
    // Count number of items
    var numItems = $('.img-loop-item').length;
    // set current item
    var currentItem = 0;
    // hide all items
    $('.img-loop-item').hide();
    // show first item
    $('.img-loop-item').eq(currentItem).fadeIn(initialFadeIn);
    // loop through the items
    var infiniteLoop = setInterval(function() {
      $('.img-loop-item').eq(currentItem).fadeOut(fadeOutTime);
      if(currentItem == numItems -1){
        currentItem = 0;
      } else {
        currentItem++;
      }
      $('.img-loop-item').eq(currentItem).fadeIn(fadeTime);
    }, itemInterval);
};
  window.onload = imageLoop();
  
});
