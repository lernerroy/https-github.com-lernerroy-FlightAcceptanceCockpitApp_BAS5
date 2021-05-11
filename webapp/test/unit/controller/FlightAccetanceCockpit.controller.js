/*global QUnit*/

sap.ui.define([
	"comlegstate.fts.app.FlightAcceptanceCockpit./flightacceptancecockpit/controller/FlightAccetanceCockpit.controller"
], function (Controller) {
	"use strict";

	QUnit.module("FlightAccetanceCockpit Controller");

	QUnit.test("I should test the FlightAccetanceCockpit controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
