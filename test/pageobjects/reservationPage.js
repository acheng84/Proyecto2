const Page = require('./page');

class reservationPage extends Page {
                                 
    get btnFlights () {return $ ('//*[@id="search"]/div/div/div/div/div/nav/ul/li[2]/a') }
    get maskFlyFrom () {return $ ('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[1]/div/div[1]/div/div[2]/div/a')}
    get inputFlyFrom () {return $ ('//html/body/div[6]/div/input')}
    get autoFrom1 () {return $ ('//html/body/div[6]/ul/li[1]/div')}
    
    get maskFlyTo () {return $ ('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[1]/div/div[2]/div/div[2]/div')}
    get inputFlyTo () {return $ ('//html/body/div[7]/div/input')} 
    get autoTo () {return $('//html/body/div[7]/ul/li/div')} 
    
    get inputDepart () {return $ ('//*[@id="FlightsDateStart"]')}
    get btntNextMonth () {return $ ('//html/body/div[3]/div[9]/nav/div[3]')}    
    get btnDay () {return $('//html/body/div[3]/div[9]/div/div/div[2]/div[19]')}
                           
                                     
    get btnAdults () {return $ ('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[1]/div/div[2]/div/span/button[1]')}
    get btnChilds () {return $ ('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[2]/div/div[2]/div/span/button[1]')}
    get btnInfants() {return $ ('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[3]/div/div/div[3]/div/div[2]/div/span/button[1]')}
    get btnSearchFly () {return $ ('//html/body/div[2]/div[1]/div[1]/div[3]/div/div/div/div/div/div/div[2]/div/div/form/div/div/div[3]/div[4]/button')} 

    getbtnFlights () {return this.btnFlights}
    getmaskFlyFrom () {return this.maskFlyFrom}
    getinputFlyFrom () {return this.inputFlyFrom}
    getautoFrom1 () {return this.autoFrom1}
    
    getmaskFlyTo () {return this.maskFlyTo}
    getinputFlyTo () {return this.inputFlyTo}
    getautoTo () {return this.autoTo}

    getinputDepart () {return this.inputDepart}
    getbtnNextMonth () {return this.btntNextMonth}
    getbtnDay () {return this.btnDay}
    getbtnAdults () {return this.btnAdults}
    getbtnChilds () {return this.btnChilds}
    getbtnInfants () {return this.btnInfants}
    getbtnSearchFly () {return this.btnSearchFly} 
    
    open () {
        return super.open(' ');
    }

}

module.exports = new reservationPage ()

