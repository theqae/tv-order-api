class PostProduct {
     verifyPostProduct() { 
        cy.request({
            method: 'POST',
            url: '/product',
            body: {
                name: "HAT",
                description: "Product description",
                price: 20
              }
            })
        .then((response) =>{
            // Response validation
            expect(response.status).to.eq(201) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Created') // We expect the message "Created"
            // Validating the product matches our input
            expect(response.body).to.have.property('name', 'HAT') // Verify 'name' matches
            expect(response.body).to.have.property('description', 'Product Description') // Verify 'description' matches
            expect(response.body).to.have.property('price', 20) // Verify 'price' matches
            expect(response.body).to.have.property('id') // Verify 'id' was generated and returned
            // Schema validation
            expect(response.body).to.be.an('object') // Shema check for object
        })  
    }

     verifyRequiredProperties() { 
        cy.request({
            method: 'POST',
            url: '/product',
            body: {
                name: "HAT",
               // description: "Product description",
                price: 20
              }
            })
        .then((response) =>{
            expect(response.status).to.eq(201) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Created') // We expect the message "Created"

            // Schema validation
            expect(response.body).to.be.an('object') // Shema check for object
        })  
    }

     verifyMissingName() { 
        cy.request({
            method: 'POST',
            url: '/product',
            form: true, // Expected by the endpoint to read to contents of the body
            body: {
                // name: "HAT",
                description: "Product description",
                price: 20
              }
            })
        .then((response) =>{
            expect(response.status).to.eq(400) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Invalid Input') // We expect the message "Invalid Input"
        })  
    }

     verifyMissingPrice() { 
        cy.request({
            method: 'POST',
            url: '/product',
            body: {
                name: "HAT",
                description: "Product description"
                // price: 20
              }
            })
        .then((response) =>{
            expect(response.status).to.eq(400) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Invalid Input') // We expect the message "Invalid Input"
        })  
    }

     verifyInvalidName() { 
        cy.request({
            method: 'POST',
            url: '/product',
            body: {
                name: "Hat", // Should not allow lower case characters
                description: "Product description",
                price: 20
              }
            })
        .then((response) =>{
            expect(response.status).to.eq(400) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Invalid Input') // We expect the message "Invalid Input"
        })  
    }

     verifyInvalidPrice() { 
        cy.request({
            method: 'POST',
            url: '/product',
            body: {
                name: "HAT", // Should not allow lower case characters
                description: "Product description",
                price: -20
              }
            })
        .then((response) =>{
            expect(response.status).to.eq(400) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Invalid Input') // We expect the message "Invalid Input"
        })  
    }
}

module.exports = new PostProduct();