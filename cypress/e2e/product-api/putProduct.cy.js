const PutProduct = require("../../support/api-tests/putProduct")

describe ("Put Product", () => {
    it("update a product successfully", () => {
        PutProduct.verifyPutProduct()
    })

    it("attempt an update without id", () => {
        PutProduct.verifyMissingId()
    })    

    it("attempt an update using an invalid name", () => {
        PutProduct.verifyInvalidName()
    })  
    
    it("attempt an update using an invalid description", () => {
        PutProduct.verifyInvalidDesc()
    })  
    
    it("attempt an update using an invalid price", () => {
        PutProduct.verifyInvalidPrice()
    })  
})