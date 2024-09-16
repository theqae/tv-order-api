import { putProduct } from "../../support/api-tests/putProduct"

it("Update products and run validations", () => {
    // Update a product successfully
    putProduct.verifyPutProduct()

    //Attempt an update without id
    putProduct.verifyMissingId

    //Attempt an update using an invalid name
    putProduct.verifyInvalidName

    //Attempt an update using an invalid desciption
    putProduct.verifyInvalidDesc

    //Attenpt an update using an invalid price
    putProduct.verifyInvalidPrice
})