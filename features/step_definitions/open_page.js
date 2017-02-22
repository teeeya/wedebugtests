module.exports = function() {
  this.Given(/I open the homepage for WeDebug/, function (done) {
    browser.url('http://wedebug.co.uk');
    
  });
  this.When(/the page is fully loaded/, function(done) {
     var testingTypes = $('.icons');
     isVisible = browser.isVisible('.blackbox');
    
  });
  this.Then(/I should see the name "Fathea Chowdhury"/, function(done){
    browser.getText('.rotating-star*=Fathea Chowdhury')
  });
};
