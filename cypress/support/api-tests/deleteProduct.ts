export class deleteProduct {
    static verifyDeleteProduct() { 
         // Using GET to retrieve an existing id
         cy.request("GET", "/product").then((response) => { // Assuming there is at least 1 product
            expect(response.status).to.eq(200) // Checking for the expected 200 response code
            // Storing the existing id to use in DELETE
            const productId = response.body[0].id

            // Verify successful delete on the same product as above
            cy.request("DELETE", "/product/" + productId).then((deleteResponse) => {
                expect(deleteResponse.status).to.eq(200) // Checking for the expected 200 response code
                expect(deleteResponse.body).to.have.property('message', 'successful operation')
            })
                // Calling DELETE on the same product after deletion to verify it no longer exists
                cy.request("DELETE", "/product/" + productId).then((deleteResponse) => {
                    expect(deleteResponse.status).to.eq(404) // Checking for the expected 200 response code
                    expect(deleteResponse.body).to.have.property('message', 'Visitor not found')
                })
        })
    }

    static verifyNonExistentProduct() {
        cy.request("DELETE", "/product/9999").then((response) => { // Assuming there is not product id 9999
            expect(response.status).to.eq(404) // Checking for the expected 200 response code
            expect(response.body).to.have.property('message', 'Visitor not found')
        })
    }
} 