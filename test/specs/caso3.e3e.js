/*
const bookingPage = require('../pageobjects/bookingPage');
const bookNowPage = require('../pageobjects/bookNowPage');
const paymentPage = require('../pageobjects/paymentPage');

describe('Book a Flight', () => { 

    bookNowPage.openBookPage();
    browser.setTimeout({'pageLoad': 3000});

    it('Click Book button', () => {
      browser.setTimeout({'implicit': 5000 });
      bookNowPage.getbtnBook();
      browser.pause(5000);
    });

    it('Book a Flight', () => {
      browser.setTimeout({'implicit': 5000 });
      bookingPage.BookingData();
      bookingPage.confirmThisBooking();
      browser.pause(5000);
    });

    it('Passengers payment is pending', () => {
      browser.pause(5000);
      expected(paymentPage.getpendingPayment()).toHaveTextContaining('Your booking status is Unpaid');
    });

    //El URL hay que cambiarlo porque cada vez tira diferente confirmacion
    it('URL is the correct', () => {
      expect(browser).toHaveUrlContaining('https://www.phptravels.net/invoice?id=5')
      browser.pause(5000);
    })


});

*/