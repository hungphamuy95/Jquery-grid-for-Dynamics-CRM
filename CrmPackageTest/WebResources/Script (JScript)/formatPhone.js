/// <reference path="https://rawgit.com/hungphamuy95/Dynamic-CRM-CRUD/master/Sample/Scripts/XRM.js" />

/**********************************************************************
  
Procedure Name :  [leadpotentialdeal.js]
Creation Date :   29/08/2017
Author:           Hung Pham
Functionality :   Main JavaScript Code file for Lead

**********************************************************************/


if (typeof (CrmJS) == "undefined") {
    CrmJS = { __namespace: true };
}


CrmJS.LeadPotentialDealFunctions = {

    //--------------------------------------------------------------------------------------------------------------------------
    // CrmJS.LeadPotentialDealFunctions.refreshForm(); 
    //--------------------------------------------------------------------------------------------------------------------------
    refreshForm: function () {
        CrmJS.UtilFunctions.refreshForm();
    },

    //--------------------------------------------------------------------------------------------------------------------------
    // CrmJS.LeadPotentialDealFunctions.onLoad();
    //--------------------------------------------------------------------------------------------------------------------------
    onLoad: function () {

        CrmJS.LeadPotentialDealFunctions.initialize();
        if (Xrm.Page.ui.getFormType() == CrmJS.Constant.CRM_FORM_TYPE_DISABLED) return;
        CrmJS.LeadPotentialDealFunctions.process();

    },

    //--------------------------------------------------------------------------------------------------------------------------
    // CrmJS.LeadPotentialDealFunctions.initialize();
    //--------------------------------------------------------------------------------------------------------------------------
    initialize: function () {
        CrmJS.UtilFunctions.shared();
    },


    //--------------------------------------------------------------------------------------------------------------------------
    // CrmJS.LeadPotentialDealFunctions.process();
    //--------------------------------------------------------------------------------------------------------------------------
    process: function () {
        CrmJS.LeadPotentialDealFunctions.hidePotentialDealSection();
        CrmJS.LeadPotentialDealFunctions.checkEloquaId();
    },
    //--------------------------------------------------------------------------------------------------------------------------
    // CrmJS.LeadPotentialDealFunctions.hidePotentialDealSection(); 
    //--------------------------------------------------------------------------------------------------------------------------
    hidePotentialDealSection: function () {
        CrmJS.UtilFunctions.setVisibleTabSection("Potential Deal Details", "", false, true);
        Xrm.Page.getAttribute("hsbc_leadtype").addOnChange(function () {
            var sw = Xrm.Page.getAttribute("hsbc_leadtype").getValue();
            if (sw == 190000001) {
                CrmJS.UtilFunctions.setVisibleTabSection("Potential Deal Details", "", true, true);
            }
            else if (sw = 190000000) {
                CrmJS.UtilFunctions.setVisibleTabSection("Potential Deal Details", "", false, true);
            }
        });
    },
    //--------------------------------------------------------------------------------------------------------------------------
    // CrmJS.LeadPotentialDealFunctions.checkEloquaId(); 
    //--------------------------------------------------------------------------------------------------------------------------
    checkEloquaId: function(){
        Xrm.Page.getAttribute("hsbc_eloqualeadid").addOnChange(function () {
            var ss = Xrm.Page.getAttribute("hsbc_eloqualeadid").getValue();
            if (ss != null) {
                CrmJS.UtilFunctions.disableFieldBoolean("campaignid", true);
            } else {
                CrmJS.UtilFunctions.disableFieldBoolean("campaignid", false);
            }
        });
    },
    __namespace: true
}

//--------------------------------------------------------------------------------------------------------------------------
// **** leadpotentialdeal.JS ****
//--------------------------------------------------------------------------------------------------------------------------