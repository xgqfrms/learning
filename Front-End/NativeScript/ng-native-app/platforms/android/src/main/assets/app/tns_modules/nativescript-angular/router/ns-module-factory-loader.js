var core_1 = require("@angular/core");
var file_system_1 = require("file-system");
var SEPARATOR = "#";
var FACTORY_CLASS_SUFFIX = "NgFactory";
var FACTORY_PATH_SUFFIX = ".ngfactory";
var NSModuleFactoryLoader = (function () {
    function NSModuleFactoryLoader(compiler) {
        this.compiler = compiler;
        this.offlineMode = compiler instanceof core_1.Compiler;
    }
    NSModuleFactoryLoader.prototype.load = function (path) {
        var _a = this.splitPath(path), modulePath = _a.modulePath, exportName = _a.exportName;
        if (this.offlineMode) {
            return this.loadFactory(modulePath, exportName);
        }
        else {
            return this.loadAndCompile(modulePath, exportName);
        }
    };
    NSModuleFactoryLoader.prototype.loadFactory = function (modulePath, exportName) {
        modulePath = factoryModulePath(modulePath);
        exportName = factoryExportName(exportName);
        return System.import(modulePath)
            .then(function (module) { return module[exportName]; })
            .then(function (factory) { return checkNotEmpty(factory, modulePath, exportName); });
    };
    NSModuleFactoryLoader.prototype.loadAndCompile = function (modulePath, exportName) {
        modulePath = getAbsolutePath(modulePath);
        var loadedModule = global.require(modulePath)[exportName];
        checkNotEmpty(loadedModule, modulePath, exportName);
        return Promise.resolve(this.compiler.compileModuleAsync(loadedModule));
    };
    NSModuleFactoryLoader.prototype.splitPath = function (path) {
        var _a = path.split(SEPARATOR), modulePath = _a[0], exportName = _a[1];
        if (typeof exportName === "undefined") {
            exportName = "default";
        }
        return { modulePath: modulePath, exportName: exportName };
    };
    return NSModuleFactoryLoader;
}());
NSModuleFactoryLoader = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [core_1.Compiler])
], NSModuleFactoryLoader);
exports.NSModuleFactoryLoader = NSModuleFactoryLoader;
function getAbsolutePath(relativePath) {
    return file_system_1.path.normalize(file_system_1.path.join(file_system_1.knownFolders.currentApp().path, relativePath));
}
function factoryModulePath(modulePath) {
    return "" + modulePath + FACTORY_PATH_SUFFIX;
}
function factoryExportName(exportName) {
    return exportName === "default" ?
        exportName :
        "" + exportName + FACTORY_CLASS_SUFFIX;
}
function checkNotEmpty(value, modulePath, exportName) {
    if (!value) {
        throw new Error("Cannot find '" + exportName + "' in '" + modulePath + "'");
    }
    return value;
}
//# sourceMappingURL=ns-module-factory-loader.js.map