
const el = require('./elements').ELEMENTS;

class TestPage {
    acessUrl() {
        cy.visit(Cypress.config('baseUrl'))
        // cy.screenshot('tela acessada')
    }
    acessGuidePage() {
        cy.get(el.guideMenu).click()
    }
    acessGuideoption() {
        cy.get(el.optionMenu).should('be.visible')
        cy.get(el.optionMenu).click()
        // cy.screenshot('Json visualizado')
    }

    captureCurrentUrl() {
        cy.url().then((url) => {
        })
    }

    captureData() {
        cy.url().then((url) => {
            cy.request('GET', url)
                .then(response => {
                    expect(response.status).to.equal(200);
                    cy.writeFile('cypress/fixtures/file.json', response.body)
                })

        })
    }
    validateData(id, albumId, title, url, thumbnailUrl) {
        cy.readFile('cypress/fixtures/file.json').then((jsonData) => {
            const itemId = jsonData.find(item => item.id === 6);

            expect(itemId).to.exist;

            expect(itemId.albumId).to.eq(parseInt(albumId))
            expect(itemId.title).to.eq(title)
            expect(itemId.url).to.eq(url)
            expect(itemId.thumbnailUrl).to.eq(thumbnailUrl)
        })
    }

    getCommentRequest(name) {
        cy.request('GET', 'https://jsonplaceholder.typicode.com/comments?name=' + name).as('commentRequest')
    }

    validateStatusGet(statusCode) {
        cy.get('@commentRequest').its('status').should('eq', parseInt(statusCode))
    }

    validateEmail(email) {
        cy.get('@commentRequest').then((response) => {
            const emailReq = response.body[0].email;
            expect(emailReq).to.equal(email);
        })
    }

    postNewUserEnpoint(name, username, emailPost, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) {
        const newUser = {
            name: name,
            username: username,
            email: emailPost,
            address: {
                street: street,
                suite: suite,
                city: city,
                zipcode: zipcode,
                geo: {
                    lat: lat,
                    lng: lng
                }
            },
            phone: phone,
            website: website,
            company: {
                name: nameCompany,
                catchPhrase: catchPhrase,
                bs: bs
            }
        };
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/users',
            body: newUser
        }).as('userPost')
    }

    validateStatusPost(statusCodePost) {
        cy.get('@userPost').its('status').should('eq', parseInt(statusCodePost))
    }

    validateIdPost() {
        cy.get('@userPost').then((response) => {
            const userId = response.body.id;
            expect(userId).to.exist;
            expect(userId).to.be.greaterThan(0);
        })
    }
    putChangeUser(emailPut, lat, lgn, id) {
        const updateUserData = {
            email: emailPut,
            address: {
                geo: {
                    lat: lat,
                    lng: lgn
                }
            }
        };
        cy.request('PUT', 'https://jsonplaceholder.typicode.com/users/' + id, updateUserData).as('userPut')
    }

    validateStatusPut(statusCodePut) {
        cy.get('@userPut').its('status').should('eq', parseInt(statusCodePut))
    }

    validateUpdateData(emailPut, lat, lgn) {
        cy.get('@userPut').then((response) => {
            expect(response.body.email).to.equal(emailPut)
            expect(response.body.address.geo.lat).to.equal(lat)
            expect(response.body.address.geo.lng).to.equal(lgn)
        })
    }
}

export default new TestPage();