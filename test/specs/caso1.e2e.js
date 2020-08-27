/*
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservationPage');
const resultsPage = require('../pageobjects/resultsPage');

describe('My Login application', () => {
    it('Searching flights', () => {
        reservationPage.open();
        browser.setTimeout({ 'pageLoad': 10000 });

        browser.pause(5000);

        reservationPage.getbtnFlights().click();
        browser.pause(5000);
        //reservationPage.flightsbuttonWait().click();

     reservationPage.getmaskFlyFrom().click();
     reservationPage.getinputFlyFrom().setValue('SJO');
     browser.pause(1000);
     reservationPage.getautoFrom1().click();

     reservationPage.getmaskFlyTo().click();
     reservationPage.getinputFlyTo().setValue('TXL');
     browser.pause(1000);
     reservationPage.getautoTo().click();
    
     reservationPage.getinputDepart().click();
     browser.pause(1000);
     reservationPage.getbtnNextMonth().click();
     browser.pause(1000);
     reservationPage.getbtnDay().click();
     browser.pause(1000);


//Por default ya tiene un Adulto, agrego solo uno para que se vean dos
    reservationPage.AddAdults(1);
  //  browser.pause(3000);
    reservationPage.AddChilds(3);
 //   browser.pause(3000);
    reservationPage.AddInfant(1);
 //   browser.pause(5000);
   
    reservationPage.getbtnSearchFly().click();
    browser.setTimeout({'pageLoad': 5000});

    });   

    it('Validate the URL', () => {
        browser.setTimeout({ 'implicit': 10000 });
        expect(browser).toHaveUrl('https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/2020-09-17/2/3/1');
    });

    it('These are the flights available', () => {
        
        browser.setTimeout({ 'implicit': 10000 });
        expect(resultsPage.getFlightResultsline()).toHaveTextContaining('20 Total listings found')
    });

    it('Validate flight (From-To)', () => {
        browser.setTimeout({ 'implicit': 10000 });
        resultsPage.selectFlightResult();
        expect(resultsPage.getairFromResults()).toHaveText('SJO');
        expect(resultsPage.getairToResults()).toHaveText('TXL');

    });    


});

*/