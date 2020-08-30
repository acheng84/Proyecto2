const Page = require("./page")

class paymentPage extends Page {

    get pedingPayment () {return $ ('//html/body/div/div[1]/div[1]/div/div/div[4]/div[2]/h4')}

    getpendingPayment () {return this.pedingPayment;}
}

module.exports = new paymentPage();