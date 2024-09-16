const DeleteProduct = require("../../support/api-tests/deleteProduct")

describe ('Delete Product', () => {
    it("find and delete an existing product by id", () => {
        DeleteProduct.verifyDeleteProduct()
    })

    it("Attempt to delete a non-existent product", () => {
        DeleteProduct.verifyNonExistentProduct()
    })
})