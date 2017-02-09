var appModule = require("application");
var common = require("./connectivity-common");
var utils = require("utils/utils");
global.moduleMerge(common, exports);
var wifi = "wifi";
var mobile = "mobile";
function getConnectivityManager() {
    return utils.ad.getApplicationContext().getSystemService(android.content.Context.CONNECTIVITY_SERVICE);
}
function getActiveNetworkInfo() {
    var connectivityManager = getConnectivityManager();
    if (!connectivityManager) {
        return null;
    }
    return connectivityManager.getActiveNetworkInfo();
}
function getConnectionType() {
    var activeNetworkInfo = getActiveNetworkInfo();
    if (!activeNetworkInfo || !activeNetworkInfo.isConnected()) {
        return common.connectionType.none;
    }
    var connectionType = activeNetworkInfo.getTypeName().toLowerCase();
    if (connectionType.indexOf(wifi) !== -1) {
        return common.connectionType.wifi;
    }
    if (connectionType.indexOf(mobile) !== -1) {
        return common.connectionType.mobile;
    }
    return common.connectionType.none;
}
exports.getConnectionType = getConnectionType;
function startMonitoring(connectionTypeChangedCallback) {
    var onReceiveCallback = function onReceiveCallback(context, intent) {
        var newConnectionType = getConnectionType();
        connectionTypeChangedCallback(newConnectionType);
    };
    appModule.android.registerBroadcastReceiver(android.net.ConnectivityManager.CONNECTIVITY_ACTION, onReceiveCallback);
}
exports.startMonitoring = startMonitoring;
function stopMonitoring() {
    appModule.android.unregisterBroadcastReceiver(android.net.ConnectivityManager.CONNECTIVITY_ACTION);
}
exports.stopMonitoring = stopMonitoring;
//# sourceMappingURL=connectivity.js.map