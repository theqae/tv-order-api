import { postProduct } from "../../support/api-tests/postProduct"

it("Post products and run validations", () => {
    // Post to Product successfully
    postProduct.verifyPostProduct()

    // Post to Product using only required properties
    postProduct.verifyRequiredProperties()

    // Post to Product with missing required property 'name'
    postProduct.verifyMissingName()

    // Post to Product with missing required property 'price'
    postProduct.verifyMissingPrice()

    // Post to Product with invalid 'name' property
    postProduct.verifyInvalidName()

    // Post to Product iwth invalid 'price' property
    postProduct.verifyInvalidPrice()
})