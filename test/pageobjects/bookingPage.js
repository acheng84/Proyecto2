const Page = require("./page")

class bookingPage extends Page {

    get maskfirstName () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[1]/div/label/span')}
    get firstName () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[1]/div/label/input')}

    get maskLastName () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[2]/label/span')}
    get lastName () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[1]/div[2]/label/input')}

    get maskEmail () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[1]/label/span')}
    get email () {return $ ('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[1]/label/input')}

    get maskConfirmEmail () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[2]/label/span')}
    get confirmEmail () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[2]/div/div/div[1]/div[1]/form/div[2]/div[2]/label/input')}

    get btnConfirmBooking () {return $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[4]/button')}

    //Datos Obligatorios
    BookingData() {

        this.maskfirstName.click()
        this.firstName.setValue('Alejandro')

        this.maskLastName.click()
        this.lastName.setValue('Cheng')

        this.maskEmail.click()
        this.email.setValue('ale@test.com')

        this.maskConfirmEmail.click()
        this.confirmEmail.setValue('ale@test.com')
        
    }

    //Click en confirmacion del booking y se acepta bookear
    confirmThisBooking() {
        const btnMaskConfirm = $('//html/body/div[2]/div[1]/div/div/div/div[1]/div/div[1]/div[2]/div[4]/button')
        btnMaskConfirm.waitForClickable({timeout:5000})
        this.btnConfirmBooking.click()
    }

}

module.exports = new bookingPage()