/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"comlegstate.fts.app.FlightAcceptanceCockpit./flightacceptancecockpit/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
