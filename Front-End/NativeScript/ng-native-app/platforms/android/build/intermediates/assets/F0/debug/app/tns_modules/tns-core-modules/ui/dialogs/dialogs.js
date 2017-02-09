var dialogsCommon = require("./dialogs-common");
var appmodule = require("application");
var types = require("utils/types");
global.moduleMerge(dialogsCommon, exports);
function createAlertDialog(options) {
    var alert = new android.app.AlertDialog.Builder(appmodule.android.foregroundActivity);
    alert.setTitle(options && types.isString(options.title) ? options.title : "");
    alert.setMessage(options && types.isString(options.message) ? options.message : "");
    if (options && options.cancelable === false) {
        alert.setCancelable(false);
    }
    return alert;
}
function showDialog(builder) {
    var dlg = builder.show();
    var labelColor = dialogsCommon.getLabelColor();
    if (labelColor) {
        var textViewId = dlg.getContext().getResources().getIdentifier("android:id/alertTitle", null, null);
        if (textViewId) {
            var tv = dlg.findViewById(textViewId);
            if (tv) {
                tv.setTextColor(labelColor.android);
            }
        }
        var messageTextViewId = dlg.getContext().getResources().getIdentifier("android:id/message", null, null);
        if (messageTextViewId) {
            var messageTextView = dlg.findViewById(messageTextViewId);
            if (messageTextView) {
                messageTextView.setTextColor(labelColor.android);
            }
        }
    }
    var buttonColor = dialogsCommon.getButtonColor();
    var buttonBackgroundColor = dialogsCommon.getButtonBackgroundColor();
    if (buttonColor || buttonBackgroundColor) {
        var buttons = [];
        for (var i = 0; i < 3; i++) {
            var id = dlg.getContext().getResources().getIdentifier("android:id/button" + i, null, null);
            buttons[i] = dlg.findViewById(id);
        }
        buttons.forEach(function (button) {
            if (button) {
                if (buttonColor) {
                    button.setTextColor(buttonColor.android);
                }
                if (buttonBackgroundColor) {
                    button.setBackgroundColor(buttonBackgroundColor.android);
                }
            }
        });
    }
}
function addButtonsToAlertDialog(alert, options, callback) {
    if (!options) {
        return;
    }
    if (options.okButtonText) {
        alert.setPositiveButton(options.okButtonText, new android.content.DialogInterface.OnClickListener({
            onClick: function (dialog, id) {
                dialog.cancel();
                callback(true);
            }
        }));
    }
    if (options.cancelButtonText) {
        alert.setNegativeButton(options.cancelButtonText, new android.content.DialogInterface.OnClickListener({
            onClick: function (dialog, id) {
                dialog.cancel();
                callback(false);
            }
        }));
    }
    if (options.neutralButtonText) {
        alert.setNeutralButton(options.neutralButtonText, new android.content.DialogInterface.OnClickListener({
            onClick: function (dialog, id) {
                dialog.cancel();
                callback(undefined);
            }
        }));
    }
    alert.setOnDismissListener(new android.content.DialogInterface.OnDismissListener({
        onDismiss: function () {
            callback(false);
        }
    }));
}
function alert(arg) {
    return new Promise(function (resolve, reject) {
        try {
            var options = !dialogsCommon.isDialogOptions(arg) ? { title: dialogsCommon.ALERT, okButtonText: dialogsCommon.OK, message: arg + "" } : arg;
            var alert_1 = createAlertDialog(options);
            alert_1.setPositiveButton(options.okButtonText, new android.content.DialogInterface.OnClickListener({
                onClick: function (dialog, id) {
                    dialog.cancel();
                    resolve();
                }
            }));
            alert_1.setOnDismissListener(new android.content.DialogInterface.OnDismissListener({
                onDismiss: function () {
                    resolve();
                }
            }));
            showDialog(alert_1);
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.alert = alert;
function confirm(arg) {
    return new Promise(function (resolve, reject) {
        try {
            var options = !dialogsCommon.isDialogOptions(arg) ? { title: dialogsCommon.CONFIRM, okButtonText: dialogsCommon.OK, cancelButtonText: dialogsCommon.CANCEL, message: arg + "" } : arg;
            var alert_2 = createAlertDialog(options);
            addButtonsToAlertDialog(alert_2, options, function (result) { resolve(result); });
            showDialog(alert_2);
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.confirm = confirm;
function prompt(arg) {
    var options;
    var defaultOptions = {
        title: dialogsCommon.PROMPT,
        okButtonText: dialogsCommon.OK,
        cancelButtonText: dialogsCommon.CANCEL,
        inputType: dialogsCommon.inputType.text,
    };
    if (arguments.length === 1) {
        if (types.isString(arg)) {
            options = defaultOptions;
            options.message = arg;
        }
        else {
            options = arg;
        }
    }
    else if (arguments.length === 2) {
        if (types.isString(arguments[0]) && types.isString(arguments[1])) {
            options = defaultOptions;
            options.message = arguments[0];
            options.defaultText = arguments[1];
        }
    }
    return new Promise(function (resolve, reject) {
        try {
            var alert_3 = createAlertDialog(options);
            var input_1 = new android.widget.EditText(appmodule.android.foregroundActivity);
            if (options && options.inputType === dialogsCommon.inputType.password) {
                input_1.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD);
            }
            input_1.setText(options && options.defaultText || "");
            alert_3.setView(input_1);
            var getText_1 = function () { return input_1.getText().toString(); };
            addButtonsToAlertDialog(alert_3, options, function (r) { resolve({ result: r, text: getText_1() }); });
            showDialog(alert_3);
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.prompt = prompt;
function login(arg) {
    var options;
    var defaultOptions = { title: dialogsCommon.LOGIN, okButtonText: dialogsCommon.OK, cancelButtonText: dialogsCommon.CANCEL };
    if (arguments.length === 1) {
        if (types.isString(arguments[0])) {
            options = defaultOptions;
            options.message = arguments[0];
        }
        else {
            options = arguments[0];
        }
    }
    else if (arguments.length === 2) {
        if (types.isString(arguments[0]) && types.isString(arguments[1])) {
            options = defaultOptions;
            options.message = arguments[0];
            options.userName = arguments[1];
        }
    }
    else if (arguments.length === 3) {
        if (types.isString(arguments[0]) && types.isString(arguments[1]) && types.isString(arguments[2])) {
            options = defaultOptions;
            options.message = arguments[0];
            options.userName = arguments[1];
            options.password = arguments[2];
        }
    }
    return new Promise(function (resolve, reject) {
        try {
            var context_1 = appmodule.android.foregroundActivity;
            var alert_4 = createAlertDialog(options);
            var userNameInput_1 = new android.widget.EditText(context_1);
            userNameInput_1.setText(options.userName ? options.userName : "");
            var passwordInput_1 = new android.widget.EditText(context_1);
            passwordInput_1.setInputType(android.text.InputType.TYPE_CLASS_TEXT | android.text.InputType.TYPE_TEXT_VARIATION_PASSWORD);
            passwordInput_1.setText(options.password ? options.password : "");
            var layout = new android.widget.LinearLayout(context_1);
            layout.setOrientation(1);
            layout.addView(userNameInput_1);
            layout.addView(passwordInput_1);
            alert_4.setView(layout);
            addButtonsToAlertDialog(alert_4, options, function (r) {
                resolve({
                    result: r,
                    userName: userNameInput_1.getText().toString(),
                    password: passwordInput_1.getText().toString()
                });
            });
            showDialog(alert_4);
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.login = login;
function action(arg) {
    var options;
    var defaultOptions = { title: null, cancelButtonText: dialogsCommon.CANCEL };
    if (arguments.length === 1) {
        if (types.isString(arguments[0])) {
            options = defaultOptions;
            options.message = arguments[0];
        }
        else {
            options = arguments[0];
        }
    }
    else if (arguments.length === 2) {
        if (types.isString(arguments[0]) && types.isString(arguments[1])) {
            options = defaultOptions;
            options.message = arguments[0];
            options.cancelButtonText = arguments[1];
        }
    }
    else if (arguments.length === 3) {
        if (types.isString(arguments[0]) && types.isString(arguments[1]) && types.isDefined(arguments[2])) {
            options = defaultOptions;
            options.message = arguments[0];
            options.cancelButtonText = arguments[1];
            options.actions = arguments[2];
        }
    }
    return new Promise(function (resolve, reject) {
        try {
            var activity = appmodule.android.foregroundActivity || appmodule.android.startActivity;
            var alert_5 = new android.app.AlertDialog.Builder(activity);
            var message = options && types.isString(options.message) ? options.message : "";
            var title = options && types.isString(options.title) ? options.title : "";
            if (options && options.cancelable === false) {
                alert_5.setCancelable(false);
            }
            if (title) {
                alert_5.setTitle(title);
                if (!options.actions) {
                    alert_5.setMessage(message);
                }
            }
            else {
                alert_5.setTitle(message);
            }
            if (options.actions) {
                alert_5.setItems(options.actions, new android.content.DialogInterface.OnClickListener({
                    onClick: function (dialog, which) {
                        resolve(options.actions[which]);
                    }
                }));
            }
            if (types.isString(options.cancelButtonText)) {
                alert_5.setNegativeButton(options.cancelButtonText, new android.content.DialogInterface.OnClickListener({
                    onClick: function (dialog, id) {
                        dialog.cancel();
                        resolve(options.cancelButtonText);
                    }
                }));
            }
            alert_5.setOnDismissListener(new android.content.DialogInterface.OnDismissListener({
                onDismiss: function () {
                    if (types.isString(options.cancelButtonText)) {
                        resolve(options.cancelButtonText);
                    }
                    else {
                        resolve("");
                    }
                }
            }));
            showDialog(alert_5);
        }
        catch (ex) {
            reject(ex);
        }
    });
}
exports.action = action;
//# sourceMappingURL=dialogs.js.map