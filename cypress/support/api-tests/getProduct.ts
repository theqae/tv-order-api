export class getProduct {
   static verifyGetProduct() { // Must be declared a static method to be called in e2e file
        // Request
        cy.request("GET", "/product").then((response) => {
        
            // Response validation
            expect(response.status).to.eq(200) // Checking for the expected 200 response code
        
            // Schema validations
            expect(response.body).to.be.an('array') // Shema check for array
        
            response.body.forEach((product) => {
                expect(product).to.have.all.keys('id', 'name', 'description', 'price') // Ensure each object contains the required keys
                
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
        })
    }
}