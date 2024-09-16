const PostProduct = require("../../support/api-tests/postProduct")

describe ("Post Product", () => {
    it("post to product successfully", () => {
        PostProduct.verifyPostProduct()
    })
        
    it("post to product using only required properties", () => {
        PostProduct.verifyRequiredProperties()
    })

    it("post to product with missing required property 'name'", () => {
        PostProduct.verifyMissingName()
    })

    it("post to product with missing required property 'price'", () => {
        PostProduct.verifyMissingPrice()
    })

    it("post to product with invalid 'name' property", () => {
        PostProduct.verifyInvalidName()
    })

    it("post to product with invalid 'price' property", () => {
        PostProduct.verifyInvalidPrice()
    })
})