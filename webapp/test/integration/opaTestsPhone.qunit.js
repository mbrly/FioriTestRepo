/* global QUnit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function() {
	"use strict";

	sap.ui.require([
		"ZTEST/MASTER_DETAIL/test/integration/PhoneJourneys"
	], function() {
		QUnit.start();
	});
});