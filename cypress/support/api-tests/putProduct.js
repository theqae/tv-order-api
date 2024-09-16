class PutProduct {
     verifyPutProduct() { 
        cy.request({
            method: 'PUT',
            url: '/product/1', // Assuming there is at least 1 product
            body: {
                // Maybe implement something like Faker in the future to ensure modified data
                name: "SCARF", // Modified 'name'
                description: "Modified Product description", // Modified 'description'
                price: 30 // Modified 'price'
              }
            })
        .then((response) =>{
            // Response validation
            expect(response.status).to.eq(200) // Checking for the expected 201 response code
            expect(response.body).to.have.property('message', 'Successfully updated product') // We expect the message "Successfully updated product"
            // Validating the product matches our input
            expect(response.body).to.have.property('name', 'SCARF') // Verify 'name' matches
            expect(response.body).to.have.property('description', 'Modified Product description') // Verify 'description' matches
            expect(response.body).to.have.property('price', 30) // Verify 'price' matches
            expect(response.body).to.have.property('id', 1) // Verify 'id' was returned and matches the Id we updated
            // Schema validation
            expect(response.body).to.be.an('object') // Shema check for object
        })  
    }

     verifyMissingId() {
        cy.request({
            method: 'PUT',
            url: '/product',
            body: {
                // Maybe implement something like Faker in the future to ensure modified data
                name: "BELT", // Modified 'name'
                description: "Modified Product desc", // Modified 'description'
                price: 10 // Modified 'price'
              }
            })
        .then((response) =>{
            // Response validation
            // We know id is required. However, there is no documented message here
            expect(response.status).to.eq(400) // Checking for the expected 400 response code
        })  
    }
     verifyInvalidName() {
        cy.request({
            method: 'PUT',
            url: '/product/v1',
            body: {
                // Maybe implement something like Faker in the future to ensure modified data
                name: "Watch", // Invalid name
                description: "Modified Product desc",
                price: 20
              }
            })
        .then((response) =>{
            // Response validation
            // We know id is required. However, there is no documented message here
            expect(response.status).to.eq(400) // Checking for the expected 400 response code
        })  
    }

     verifyInvalidDesc() {
        cy.request({
            method: 'PUT',
            url: '/product/v1',
            body: {
                // Maybe implement something like Faker in the future to ensure modified data
                name: "Watch", // Invalid name
                description: "More than 30 charactersssssssss",
                price: 20
              }
            })
        .then((response) =>{
            // Response validation
            // We know id is required. However, there is no documented message here
            expect(response.status).to.eq(400) // Checking for the expected 400 response code
        })  
    }    

     verifyInvalidPrice() {
        cy.request({
            method: 'PUT',
            url: '/product',
            body: {
                // Maybe implement something like Faker in the future to ensure modified data
                name: "BELT",
                description: "Modified Product desc",
                price: -1 // Modified 'price'
              }
            })
        .then((response) =>{
            // Response validation
            // We know id is required. However, there is no documented message here
            expect(response.status).to.eq(400) // Checking for the expected 400 response code
        })  
    }
}

module.exports = new PutProduct();