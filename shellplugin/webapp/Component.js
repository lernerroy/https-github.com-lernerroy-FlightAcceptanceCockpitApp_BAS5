sap.ui.define([
	"sap/ui/core/UIComponent",
	"sap/ui/Device",
    "com/legstate/fts/app/FlightAcceptanceCockpit/shellplugin/model/models",
    "sap/ushell/ui/shell/ShellHeadItem",
    "sap/ui/core/IconPool",
    "sap/base/util/ObjectPath"
], function (UIComponent, Device, models, ShellHeadItem, IconPool, ObjectPath) {
	"use strict";

	return UIComponent.extend("com.legstate.fts.app.FlightAcceptanceCockpit.shellplugin.Component", {

		metadata: {
			manifest: "json"
		},

		/**
		 * The component is initialized by UI5 automatically during the startup of the app and calls the init method once.
		 * @public
		 * @override
		 */
		init: function () {
			// call the base component's init function
			UIComponent.prototype.init.apply(this, arguments);

			// enable routing
			this.getRouter().initialize();

			// set the device model
            this.setModel(models.createDeviceModel(), "device");    
            
            var oRendererExtensions = jQuery.sap.getObject('sap.ushell.renderers.fiori2.RendererExtensions');
            var oSupportHeaderItem = new sap.ushell.ui.shell.ShellHeadItem('supportChatBtn', {
            icon: "sap-icon://globe",
            tooltip:'LegState',
            showSeparator: true,
            press: onSupportHeaderItemPress
            });
            function onSupportHeaderItemPress(){
                window.open("https://www.legstate.com");
            }
            // add button to the left side of the shellbar
            oRendererExtensions.addHeaderItem(oSupportHeaderItem);
        }
	});
});
