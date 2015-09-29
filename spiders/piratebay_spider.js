var casper = require('casper').create();
var x = require('casper').selectXPath;

casper.userAgent('Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)');

casper.start('http://thepiratebeach.eu')

casper.then(function() {
  this.sendKeys('input[name="q"]', 'Daft Punk');
  console.log('Entering data');
});

casper.thenClick(x('//*[@id="subm"]/input[1]'), function() {
  console.log('Searching thepiratebeach.eu');
});

casper.wait(500, function() {
  casper.click(x('//*[@id="searchResult"]/tbody/tr[2]/td[2]/div/a'));
});

casper.wait(500, function() {
  casper.capture('testImage.png')
});

casper.run();
