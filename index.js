const webshot = require('webshot');

// webshot('http://www.penta-code.com', 'pentacode.png', function(err) {
//     if (!err) {
//     console.log('Screenshot taken!');
//     }
// });

// Mobile screenshot
const optionsMobile = {
    screenSize: {
      width: 414,
      height: 736
    },
    shotSize: {
      width: 500,
      height: 'all'
    }
    //userAgent: 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 3_2 like Mac OS X; en-us) AppleWebKit/531.21.20 (KHTML, like Gecko) Mobile/7B298g'
  };
  
  webshot('http://www.google.com', 'pentacode-mobile.png', optionsMobile, function(err) {
    if (!err) {
      console.log('Screenshot taken!');
    }
  });