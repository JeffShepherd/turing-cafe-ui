describe('Turing Cafe', () => {
  // Write tests covering what should be displayed on the page when the user first visits
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  });

  it('should display the app name on load', () => {
    cy.get('h1')
      .contains('Turing Cafe Reservations')
  });

  it('should have a form containing four elements', () => {
    cy.get('form').children().should('have.length', 5)
  })

  it('should have a section contaning all of the reservations', () => {
    cy.get('section').children().should('have.length', 9)
  })

  it('should have cards reflecting four data points', () => {
    cy.get('article[id=1]')
    .contains('Christie' && '12/29' && '7:00' && 12)    
  })

  // Write a test that checks that when data is put into the form, the value is reflected in that form input
  it('should reflect the value that a user types into the form', () => {
    cy.get('input[id=nameField]')
    .type('Jeff')
    .should('have.value', 'Jeff')
  })

  // Write a test to check the user flow of adding a new reservation to the page
  it('should reflect a new reservation card when a user submits one', () => {
    cy.get('input[id=nameField]')
    .type('Jeff')
    cy.get('input[id=dateField]')
    .type('6/6')
    cy.get('input[id=timeField]')
    .type('6:00')
    cy.get('input[id=numberField]')
    .type(2)
    cy.get('button').click()
    cy.get('section')
    .contains('Jeff' && '6/6' && '6:00 pm' && 'Number of guests: 2')

  })

})

