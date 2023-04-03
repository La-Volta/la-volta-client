describe ('Fail login', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000/')
    })

    
    it('failed to login', function () {
    let email = 'prueba@gmail.com'
    let password = '01234567'

    cy.visit('http://localhost:3000/login')

    cy.get('.navbar-brand')
    cy.wait(500)
    cy.get('input[name=email]').click({ force: true }).type(email)
    cy.wait(500)
    cy.get("input[name=password]").type(password);
    cy.wait(500);
    cy.get('.swal2-modal').click()
    cy.wait(1000)
    cy.get('.swal2-modal').should('contain','¡Usuario y/o Contraseña incorrectos!')

  })

})