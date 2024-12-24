/// <reference types="cypress"/>

describe('Login Feature',() => {
    it('User Login dengan username dan password benar',() => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login')
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('have.text','Login');
        cy.get('[name="username"]').type('Admin');
        cy.get('[name="password"]').type('admin123');
        cy.intercept("GET","**/employees/action-summary").as("actionSummary");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@actionSummary').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(200)}
        );
        cy.get('[class="oxd-text oxd-text--h6 oxd-topbar-header-breadcrumb-module"]').should('have.text','Dashboard')
    })
      it('User Login dengan Username and Password yang salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]').type('AdminB');  // Username yang salah
        cy.get('[name="password"]').type('admin113');  // Password yang salah
        cy.intercept("GET","**/i18n/messages").as("messages");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@messages').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(304)}
          );
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      })
      it('User Login dengan Password yang salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]').type('Admin');  // Username yang benar
        cy.get('[name="password"]').type('admin113');  // Password yang salah
        cy.intercept("GET","**/i18n/messages").as("messages");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@messages').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(304)}
          );
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      })
      it('User Login dengan Username yang salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]').type('AdminB');  // Username yang salah
        cy.get('[name="password"]').type('admin123');  // Password yang benar
        cy.intercept("GET","**/i18n/messages").as("messages");
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.wait('@messages').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(304)}
          );
        cy.get('[class="oxd-text oxd-text--p oxd-alert-content-text"]').should('have.text','Invalid credentials');  // Memastikan pesan error tampil
      })
      it('User Login tanpa memasukkan username and password', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        cy.get('[name="password"]'); // Biarkan kolom password kosong
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','RequiredRequired');  // Memastikan pesan error tampil
      })
      it('User Login dengan username kosong dan password benar', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        cy.get('[name="password"]').type('admin123');  // password yang benar
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      it('User Login dengan username benar dan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]').type('Admin');  // Username yang benar
        cy.get('[name="password"]'); // Biarkan kolom password kosong
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      it('User Login dengan username salah dan password kosong', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]').type('AdminB');  // Username yang salah
        cy.get('[name="password"]'); // Biarkan kolom password kosong
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      it('User Login dengan username kosong dan password salah', () => {
        cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        cy.get('[class="oxd-text oxd-text--h5 orangehrm-login-title"]').should('be.visible');
        cy.get('[name="username"]'); // Biarkan kolom username kosong
        cy.get('[name="password"]').type('admin113');  // password yang salah
        cy.get('[class="oxd-button oxd-button--medium oxd-button--main orangehrm-login-button"]').click();
        cy.get('[class="oxd-text oxd-text--span oxd-input-field-error-message oxd-input-group__message"]').should('have.text','Required');  // Memastikan pesan error tampil
      })
      describe('Forgot Your Password Feature', () => {
        beforeEach(() => {
          cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
        });
        it('User berhasil reset password dengan username benar', () => {
          cy.contains('Forgot your password?').should('be.visible');
          cy.contains('Forgot your password?').click();
          cy.url().should('include', '/requestPasswordResetCode'); 
          cy.get('h6').should('contain.text', 'Reset Password');
          cy.get('input[name="username"]').type('Admin');
          cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
          cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
          cy.wait('@requestResetPassword').then((intercept)=>{
            expect(intercept.response.statusCode).to.equal(302)}
    );
          cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
        });
        it('User berhasil reset password dengan username berbeda', () => {
            cy.contains('Forgot your password?').should('be.visible');
            cy.contains('Forgot your password?').click();
            cy.url().should('include', '/requestPasswordResetCode'); 
            cy.get('h6').should('contain.text', 'Reset Password'); 
            cy.get('input[name="username"]').type('AdminB');
            cy.intercept("POST","**/auth/requestResetPassword").as("requestResetPassword");
            cy.get('[class="oxd-button oxd-button--large oxd-button--secondary orangehrm-forgot-password-button orangehrm-forgot-password-button--reset"]').click();
            cy.wait('@requestResetPassword').then((intercept)=>{
                expect(intercept.response.statusCode).to.equal(302)}
        );
            cy.get('[class="oxd-text oxd-text--h6 orangehrm-forgot-password-title"]').should('have.text','Reset Password link sent successfully')
        });
      });
})