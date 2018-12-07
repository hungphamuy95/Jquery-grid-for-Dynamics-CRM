/// <reference path="https://cdn.jsdelivr.net/gh/hungphamuy95/Dynamic-CRM-CRUD/Sample/Scripts/XRM.js" />
Xrm.Page.data.entity.getId();

try {
    
    function validateMark(context) {
        var markOneField = Xrm.Page.getAttribute("new_markone").getValue();
        if (markOneField > 10) {
            alert("this mark must be lower than 10");
            if (context != undefined) {
                context.getEventArgs() && context.getEventArgs().preventDefault();
            }
            Xrm.Page.getControl("new_markone").setFocus();
        }
        var markTwoField = Xrm.Page.getAttribute("new_marktwo").getValue();
        if (markTwoField > 10) {
            alert("this mark must be lower than 10");
            if (context != undefined) {
                context.getEventArgs() && context.getEventArgs().preventDefault();
            }
            Xrm.Page.getControl("new_marktwo").setFocus();
        }
        var markThreeField = Xrm.Page.getAttribute("new_markthree").getValue();
        if (markThreeField > 10) {
            alert("this mark must be lower than 10");
            if (context != undefined) {
                context.getEventArgs() && context.getEventArgs().preventDefault();
            }
            Xrm.Page.getControl("new_markthree").setFocus();
        }
    }
}
catch (err) {
    alert(err.message);
}