const GetProduct = require("../../support/api-tests/getProduct")
const GetProductById = require("../../support/api-tests/getProductById")

describe ("Get Product", () => {
    it("list all products", () => {
        GetProduct.verifyGetProduct()
    })
    
    it("list specific product", () => {
    GetProductById.verifyGetProductById()
    })
    
    it("list non existing product", () => {
    GetProductById.verifyProductNotFound()
    })
})