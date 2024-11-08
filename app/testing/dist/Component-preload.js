//@ui5-bundle testing/Component-preload.js
sap.ui.require.preload({
	"testing/Component.js":function(){
sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("testing.Component",{metadata:{manifest:"json"}})});
},
	"testing/ext/questions/Questions.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller","sap/m/MessageToast"],(e,o)=>{"use strict";return e.extend("ui5.walkthrough.controller.HelloPanel",{onShowHello(){const e=this.getView().getModel("i18n").getResourceBundle();const t=this.getView().getModel().getProperty("/recipient/name");const l=e.getText("helloMsg",[t]);o.show(l)},async onOpenDialog(){this.oDialog??=await this.loadFragment({name:"ui5.walkthrough.view.HelloDialog"});this.oDialog.open()}})});
},
	"testing/i18n/i18n.properties":'# This is the resource bundle for testing\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=TESTING\n\n#YDES: Application description\nappDescription=An SAP Fiori application.',
	"testing/manifest.json":'{"_version":"1.65.0","sap.app":{"id":"testing","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.15.2","toolsId":"a1226922-dfa3-42ef-8078-31c0e56fdec6"},"dataSources":{"mainService":{"uri":"/odata/v4/dev-challenge/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.129.2","libs":{"sap.m":{},"sap.ui.core":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"testing.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"config":{},"routes":[{"pattern":":?query:","name":"TestsList","target":"TestsList"},{"pattern":"Tests({key}):?query:","name":"TestsObjectPage","target":"TestsObjectPage"},{"pattern":"Tests({key})/questions({key2}):?query:","name":"QuestionsObjectPage","target":"QuestionsObjectPage"}],"targets":{"TestsList":{"type":"Component","id":"TestsList","name":"sap.fe.templates.ListReport","options":{"settings":{"contextPath":"/Tests","variantManagement":"Page","navigation":{"Tests":{"detail":{"route":"TestsObjectPage"}}},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"tableSettings":{"type":"ResponsiveTable"}}}}}},"TestsObjectPage":{"type":"Component","id":"TestsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Tests","navigation":{"questions":{"detail":{"route":"QuestionsObjectPage"}}},"content":{"header":{"actions":{"Questions":{"requiresSelection":false}}}}}}},"QuestionsObjectPage":{"type":"Component","id":"QuestionsObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"contextPath":"/Tests/questions"}}}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"}}'
});
//# sourceMappingURL=Component-preload.js.map
