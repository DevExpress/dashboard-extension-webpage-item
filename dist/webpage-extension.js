var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
var CustomItems;
(function (CustomItems) {
    CustomItems.WEBPAGE_EXTENSION_NAME = 'WebPage';
    CustomItems.webPageMeta = {
        bindings: [{
                propertyName: 'Attribute',
                dataItemType: 'Dimension',
                array: false,
                displayName: "Attribute",
                emptyPlaceholder: 'Set Attribute',
                selectedPlaceholder: "Configure Attribute"
            }],
        properties: [{
                propertyName: 'Url',
                editor: DevExpress.Dashboard.Metadata.editorTemplates.text,
                displayName: "Url",
                sectionName: "Custom Options",
                defaultVal: 'https://en.wikipedia.org/wiki/{0}'
            }],
        icon: CustomItems.WEBPAGE_EXTENSION_NAME,
        title: "Web Page",
        index: 2
    };
})(CustomItems || (CustomItems = {}));
/// <reference path="meta.ts" />
var CustomItems;
(function (CustomItems) {
    CustomItems.WEBPAGE_ICON = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n<!-- Generator: Adobe Illustrator 21.0.2, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->\n<!DOCTYPE svg PUBLIC \"-//W3C//DTD SVG 1.1//EN\" \"http://www.w3.org/Graphics/SVG/1.1/DTD/svg11.dtd\">\n<svg version=\"1.1\" id=\"" + CustomItems.webPageMeta.icon + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n\t viewBox=\"0 0 24 24\" style=\"enable-background:new 0 0 24 24;\" xml:space=\"preserve\">\n<style type=\"text/css\">\n\t.dx_blue{fill:#579ADD;}\n\t.dx_white{fill:#FFFFFF;}\n\t.dx_darkgray{fill:#414141;}\n</style>\n<path class=\"dx_darkgray\" d=\"M20,23H4c-0.6,0-1-0.4-1-1V2c0-0.6,0.4-1,1-1h12.6c0.3,0,0.5,0.1,0.7,0.3l3.4,3.4\n\tC20.9,4.9,21,5.1,21,5.4V22C21,22.6,20.6,23,20,23z\"/>\n<path class=\"dx_white\" d=\"M19,21H5V3h11v2c0,0.6,0.4,1,1,1h2V21z\"/>\n<path class=\"dx_blue\" d=\"M13.7,17.5c-0.2-0.4-1.6-1.8-1.4-2.2s0.2-1.1-0.1-1.3c-0.3-0.1-0.7,0.1-0.7-0.2c-0.1-0.3-1.1-0.2-1.2-1.6\n\tc-0.1-1.5-0.6-2-1.2-2s-1.6,0.6-1.5,0c0-0.1,0-0.2,0-0.3C6.6,10.9,6,12.4,6,14c0,3.3,2.7,6,6,6c0.6,0,1.1-0.1,1.6-0.2\n\tC13.7,19.1,13.9,17.8,13.7,17.5z\"/>\n<path class=\"dx_blue\" d=\"M12,8c-1.1,0-2.2,0.3-3.1,0.9c0,0,0.1,0,0.1,0c1,0.2,3.1,0.7,3.1,0.3c0-0.4-0.1-0.9,0.1-0.8\n\tc0.2,0.2,0.8,0.7,0.6,1c-0.2,0.3-0.8,0.6-0.6,0.9c0.2,0.2,0.8,0.6,1,0.4s-0.1-0.9,0.2-0.8c0.3,0,1.8,0.8,1.3,1.1\n\tc-0.5,0.3-1.4,1.9-1.9,2c-0.5,0.1-0.9,0.2-0.8,0.6c0.2,0.5,0.5,0.2,0.7,0.3c0.1,0.1,0.1,0.4,0.3,0.6s0.4,0.1,0.7,0.1\n\tc0.3-0.1,2.5,0.9,2.3,1.4c-0.2,0.5-0.2,1.2-1,2.1c-0.5,0.5-0.7,1.1-0.9,1.5c2.3-0.8,4-3,4-5.6C18,10.7,15.3,8,12,8z\"/>\n</svg>";
})(CustomItems || (CustomItems = {}));
/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
/// <reference path="meta.ts" />
var CustomItems;
(function (CustomItems) {
    var webPageItem = (function (_super) {
        __extends(webPageItem, _super);
        function webPageItem(model, $container, options) {
            var _this = _super.call(this, model, $container, options) || this;
            _this._iframe = undefined;
            return _this;
        }
        webPageItem.prototype.renderContent = function ($element, changeExisting, afterRenderCallback) {
            var attribute;
            if (!changeExisting || !this._iframe) {
                this._iframe = $('<iframe>');
                this._iframe.attr('width', '100%');
                this._iframe.attr('height', '100%');
                $element.append(this._iframe);
            }
            this.iterateData(function (row) {
                if (!attribute) {
                    attribute = row.getDisplayText('Attribute')[0];
                }
            });
            this._iframe.attr('src', this.getPropertyValue('Url').replace('{0}', attribute));
        };
        return webPageItem;
    }(DevExpress.Dashboard.customViewerItem));
    CustomItems.webPageItem = webPageItem;
})(CustomItems || (CustomItems = {}));
/// <reference path="meta.ts" />
/// <reference path="icon.ts" />
/// <reference path="webpage-viewer.ts" />
var CustomItems;
(function (CustomItems) {
    var WebPageItemExtension = (function () {
        function WebPageItemExtension(dashboardControl) {
            this.name = CustomItems.WEBPAGE_EXTENSION_NAME;
            this.metaData = CustomItems.webPageMeta;
            this.createViewerItem = function (model, $element, content) {
                return new CustomItems.webPageItem(model, $element, content);
            };
            dashboardControl.registerIcon(CustomItems.WEBPAGE_ICON);
        }
        return WebPageItemExtension;
    }());
    CustomItems.WebPageItemExtension = WebPageItemExtension;
})(CustomItems || (CustomItems = {}));
