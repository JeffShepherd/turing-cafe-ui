describe('Turing Cafe', () => {
  // Write tests covering what should be displayed on the page when the user first visits
  beforeEach(() => {

    cy.intercept({
      method: 'GET',
      url: 'http://localhost:3001/api/v1/reservations'
    },
      {
        statusCode: 201,
        body: [
          { 'id': 1, 'name': 'Coleslaw', 'date': '8/8', 'time': '7:00', 'number': 3 },
          { 'id': 2, 'name': 'Fridge', 'date': '10/08', 'time': '10:30', 'number': 2 },
          { 'id': 3, 'name': 'Smith', 'date': '03/08', 'time': '12:30', 'number': 1 }
        ]
      });
    cy.visit('http://localhost:3000');
  });

  it('should display the app name on load', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations')
  });

  it('should have a form containing four elements', () => {
    cy.get('form').children().should('have.length', 5)
  })

  it('should have a section contaning all of the reservations', () => {
    cy.get('section').children().should('have.length', 3)
  })

  it('should have cards reflecting four data points', () => {
    cy.get('article[id=1]')
    .contains('Coleslaw' && '8/8' && '7:00' && 3)    
  })

  // Write a test that checks that when data is put into the form, the value is reflected in that form input
  it('should reflect the value that a user types into the form', () => {
    cy.get('input[id=nameField]')
    .type('Jeff')
    .should('have.value', 'Jeff')
  })

  // Write a test to check the user flow of adding a new reservation to the page
  it('should reflect a new reservation card when a user submits one', () => {
    cy.intercept({
      method: 'POST',
      url: 'http://localhost:3001/api/v1/reservations'
    },
      {
        statusCode: 201,
        body:
          { 'id': 99, 'name': 'Jeff', 'date': '6/6', 'time': '7:00', 'number': 2 },
      });

    cy.get('input[id=nameField]')
    .type('Jeff')
    cy.get('input[id=dateField]')
    .type('6/6')
    cy.get('input[id=timeField]')
    .type('6:00')
    cy.get('input[id=numberField]')
    .type(2)
    cy.get('.submit-button').click()
    cy.get('section')
    .contains('Jeff')
  })



it('should remove a reservation when a user clicks the cancel button', () => {

  
  cy.intercept({
    method: 'DELETE',
    url: 'http://localhost:3001/api/v1/reservations/1'
  },
    {
      statusCode: 201,
      body: [
        { 'id': 2, 'name': 'Fridge', 'date': '10/08', 'time': '10:30', 'number': 2 },
        { 'id': 3, 'name': 'Smith', 'date': '03/08', 'time': '12:30', 'number': 1 }
      ]
    });

  cy.get('button[id=1]').click()
  cy.get('section').children().should('have.length', '2')
})

})

