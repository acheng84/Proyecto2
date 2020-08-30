const Page = require("./page")

class bookNowPage extends Page {
    
    get btnBook () {return $ ('//html/body/div[2]/div[1]/div[1]/section/div/div[2]/div[2]/div/ul/li[1]/div/div[1]/div[2]/form/div[2]/div/button')}
    
    openBookPage (path) {
        browser.maximizeWindow();
        return browser.url(`https://www.phptravels.net/flights/search/SJO/TXL/oneway/economy/2020-10-01/2/1/1${path}`)
    }

    getbtnBook() {
        this.btnBook.click();
     }

}
module.exports = new bookNowPage();