import { getProduct } from "../../support/api-tests/getProduct"
import { getProductById } from "../../support/api-tests/getProductById"

it("Get all products and run validations", () => {
    // List all products
    getProduct.verifyGetProduct()

    // List specific product
    getProductById.verifyGetProductById()

    // List non existing product
    getProductById.verifyProductNotFound()
})