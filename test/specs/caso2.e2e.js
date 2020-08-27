
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
const reservationPage = require('../pageobjects/reservationPage');
const resultsPage = require('../pageobjects/resultsPage');
const filtersPage = require('../pageobjects/filtersPage');

describe('Validate Flight Filters', () => {
    filtersPage.openResultsFilter();
    browser.setTimeout({ 'pageLoad': 10000 });

    it('Should Validate Filter Page Results', () => {
        
        browser.setTimeout({ 'implicit': 10000 });
        expect(filtersPage.getlblFilterResults()).toHaveTextContaining('20 Total listings found');
        
    });

    it('Should Change Filters', () => {
        
        filtersPage.getchbxAirlines();

    });

    it('Should validate flight amount changed', () => {
        
     //   reservationFilters.getchbxAirlines();
     //   browser.pause(5000);

    });

    it('Should validate only Flights for the filter selected', () => {
        
        filtersPage.selectFlightResults();
        expect(filtersPage.getlblAirlines()).toHaveText('Star Peru');
        browser.pause(2000);

    });
    
});

