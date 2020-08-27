const Page = require("./page")

class resultsPage extends Page {

    get FlightResultsline () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/div/div[1]/p')}
    get flightResultsMask () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[1]/div[1]')}
    get airFromResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[3]/div[1]/p')}
    get airToResults () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[2]/div/div[2]/div/div/div/div[2]/div/ul/li/div[3]/div[3]/p[1]')}
    
    getFlightResultsline() {
        return this.FlightResultsline;
    }
    
    selectFlightResult(){
        this.flightResultsMask.click();
        browser.pause(3000);
    }

    getairFromResults() {
        return this.airFromResults;
    }

     getairToResults() {
        return this.airToResults;
    }

}

module.exports = new resultsPage();
