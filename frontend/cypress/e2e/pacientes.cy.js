describe('Página de pacientes', () => {

  it('debe mostrar lista de pacientes', () => {

    cy.intercept('GET', '/api/pacientes', {
      statusCode: 200,
      body: [
        { id: 1, nombre: 'Ana Pérez', edad: 35, diagnostico: 'Asma' }
      ]
    }).as('getPacientes');

    cy.visit('http://localhost:4200/pacientes');

    cy.wait('@getPacientes');

    cy.get('li').should('contain', 'Ana Pérez');
  });

});