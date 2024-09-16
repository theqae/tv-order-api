class GetProductById {
     verifyGetProductById() { // Must be declared a  method to be called in e2e file
         // Request
         cy.request("GET", "/product/1").then((response) => { // Assuming there is at least 1 product
         
            // Response validation
            expect(response.status).to.eq(200) // Checking for the expected 200 response code
         
            // Schema validations
            expect(response.body).to.be.an('array') // Shema check for array
          
            expect(response).to.have.all.keys('id', 'name', 'description', 'price') // Ensure each object contains the required keys
            
            // Assert 'id' is an integer
            expect(product.id).to.be.a('number')
            expect(Number.isInteger(product.id)).to.be.true
    
            // Assert 'name' is a string matching the regrex A-Z
            expect(product.name).to.be.a('string')
            expect(product.name).to.match(/^[A-Z]+$/)
    
            // Assert 'description' is a string with maxLength 30
            expect(product.description).to.be.a('string')
            expect(product.description.length).to.be.at.most(30)
    
            // Assert 'price' is a number 0 or greater
            expect(product.price).to.be.a('number')
            expect(product.price).to.be.at.least(0) 
         })
     }
 
     verifyProductNotFound() {
        // Request
        cy.request("GET", "/product/9999").then((response) => {  // Assuming there aren't 9999 products
            
            // Response validation
            expect(response.status).to.eq(404) // Checking for the expected 200 response code
            expect(response.body).to.have.property('message', 'Product not found') // We expect the message "Product not found"
        })
    }
 }

 module.exports = new GetProductById();