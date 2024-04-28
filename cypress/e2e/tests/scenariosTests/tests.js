/// <reference types="cypress" />

import { Given, When, Then } from '@badeball/cypress-cucumber-preprocessor';
import TestPage from '../../../support/pages/Test/test_page'

////////e2e////////////

Given(/^the user to access the url with all the records$/, () => {
	TestPage.acessUrl()
	TestPage.acessGuidePage()
	TestPage.acessGuideoption()
});

When(/^save objects in a JSON array$/, () => {
	TestPage.captureCurrentUrl()
	TestPage.captureData();
});


Then(/^the user validate the data object "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)" must be as expected$/, (id, albumId, title, url, thumbnailUrl) => {
	TestPage.validateData(id, albumId, title, url, thumbnailUrl)
});


//////////////GET/////////////////////////////


Given(/^I make a request to the endpoint searching for name "([^"]*)"$/, (name) => {
	TestPage.getCommentRequest(name)
});


Then(/^the response status code should be "([^"]*)"$/, (statusCode) => {
	TestPage.validateStatusGet(statusCode)
});

Then(/^the email of the returned object should be "([^"]*)"$/, (email) => {
	TestPage.validateEmail(email)
});


////////POST//////////


Given(/^I make a POST to the endpoint users including the user with the values "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)", "([^"]*)" e "([^"]*)"$/, (name, username, emailPost, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs) => {
	TestPage.postNewUserEnpoint(name, username, emailPost, street, suite, city, zipcode, lat, lng, phone, website, nameCompany, catchPhrase, bs)
});

Then(/^the response status code for POST should be "([^"]*)"$/, (statusCodePost) => {
	TestPage.validateStatusPost(statusCodePost)
});

Then(/^the id of the response should be returned$/, () => {
	TestPage.validateIdPost()
});


///////////PUT/////////


Given(/^I make a PUT to the endpoint users change "([^"]*)", "([^"]*)" e "([^"]*)" from user "([^"]*)"$/, (emailPut, lat, lgn, id) => {
	TestPage.putChangeUser(emailPut, lat, lgn, id)
});

Then(/^the response status code for PUT should be "([^"]*)"$/, (statusCodePut) => {
	TestPage.validateStatusPut(statusCodePut)
});

Then(/^the data must be changed successfully "([^"]*)", "([^"]*)" e "([^"]*)" for user "([^"]*)"$/, (emailPut, lat, lgn, id) => {
	TestPage.validateUpdateData(emailPut, lat, lgn, id)

});
