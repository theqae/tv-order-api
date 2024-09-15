import { deleteProduct } from "../../support/api-tests/deleteProduct"

it("Delete specific product and run validations", () => {
    // Find and delete an existing Product by id
    deleteProduct.verifyDeleteProduct

    // Attempt to delete a non-existent product
    deleteProduct.verifyNonExistentProduct
})