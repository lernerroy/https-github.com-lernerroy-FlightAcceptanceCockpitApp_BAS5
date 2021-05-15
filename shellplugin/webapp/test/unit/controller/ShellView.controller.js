/*global QUnit*/

sap.ui.define([
	"comlegstate.fts.app.FlightAcceptanceCockpit./shellplugin/controller/ShellView.controller"
], function (Controller) {
	"use strict";

	QUnit.module("ShellView Controller");

	QUnit.test("I should test the ShellView controller", function (assert) {
		var oAppController = new Controller();
		oAppController.onInit();
		assert.ok(oAppController);
	});

});
