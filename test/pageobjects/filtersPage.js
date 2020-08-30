const Page = require("./page")

class filtersPage extends Page {
    
    get listingfound () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/div/div[1]/p')}
    get firstAirlinebox () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[1]/aside/div[1]/div/div/form/div[3]/div[2]/div[1]/div/label/img')}
    get flightResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[1]/div[1]')}
    get Airlinelabel () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/ul')}
    
    openFilters (path) {
        browser.maximizeWindow();
        return browser.url(`https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/2020-10-01/2/1/1${path}`)}

    getlisting() { return this.listingfound;}

    getfirstAirlinebox() { this.firstAirlinebox.click();
    browser.pause(2000);}
    
    allFlightResults() { this.flightResults.click();
    browser.pause(2000);}

    getAirline() {return this.Airlinelabel;}

}
module.exports = new filtersPage();