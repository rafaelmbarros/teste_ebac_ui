/// <reference types="cypress" />

const faker = require('@faker-js/faker');

describe('Funcionalidade Página de produtos', () => {
  beforeEach(() => {
    cy.visit('http://lojaebac.ebaconline.art.br/produtos/');
  });

  it('Deve selecionar um produto da lista', () => {
    cy.get('.product-block').eq(0).click();
  });

  it('Deve adicionar um produto ao carrinho', () => {
    const quantity = 3;

    cy.get('.product-block').eq(7).click();
    cy.get('.button-variable-item-M').click();
    cy.get('.button-variable-item-Green').click();
    cy.get('.input-text').clear().type(quantity);
    cy.get('.single_add_to_cart_button').click();

    cy.get('.dropdown-toggle > .mini-cart-items').should('contain', quantity);
    cy.get('.woocommerce-message').should(
      'contain',
      `${quantity} × “Ariel Roll Sleeve Sweatshirt” foram adicionados no seu carrinho.`
    );
  });
});
