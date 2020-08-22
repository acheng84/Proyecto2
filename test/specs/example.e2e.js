const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservationPage');

describe('My Login application', () => {
    it('Searching flights', () => {
        reservationPage.open();
        browser.setTimeout({ 'pageLoad': 10000 });

     reservationPage.getbtnFlights().click();
     browser.pause(5000);

     reservationPage.getmaskFlyFrom().click();
     reservationPage.getinputFlyFrom().setValue('SJO');
     browser.pause(5000);
     reservationPage.getautoFrom1().click();

     reservationPage.getmaskFlyTo().click();
     reservationPage.getinputFlyTo().setValue('TXL');
     browser.pause(5000);
     reservationPage.getautoTo().click();
    
     reservationPage.getinputDepart().click();
     browser.pause(5000);
     reservationPage.getbtnNextMonth().click();
     browser.pause(5000);
     reservationPage.getbtnDay().click();
     browser.pause(5000);

    for ( i = 0; i < 1; i++) {
        reservationPage.getbtnAdults().click();}
    browser.pause(3000);

    for ( j = 0; j < 1; j++ ) {
        reservationPage.getbtnChilds().click();}
    browser.pause(3000)

    reservationPage.getbtnInfants().click();
    browser.pause(5000);

    reservationPage.getbtnSearchFly().click();
    browser.setTimeout({'pageLoad': 10000});

    });   

});


