/*
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservationPage');
const resultsPage = require('../pageobjects/resultsPage');
const filtersPage = require('../pageobjects/filtersPage');

describe('Validate Flight Filters', () => { filtersPage.openFilters();
    browser.setTimeout({ 'pageLoad': 10000 });

    it('Go to Page', () => {
        browser.setTimeout({ 'implicit': 10000 });
        expect(filtersPage.getlisting()).toHaveTextContaining('20 Total listings found');
    });

    it('Select Filters', () => { filtersPage.getlisting(); });

    //Me toma solo la primera aerolinea del checkbox
    it('Filters are reduced', () => { reservationFilters.getfirstAirlinebox();
        browser.pause(5000);
    });

    it('Flights from this Airline', () => {
        filtersPage.allFlightResults();
        expect(filtersPage.getAirline()).toHaveText('Air Arabia Maroc');
        browser.pause(3000);
    });
    
});

*/
