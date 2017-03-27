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
    CustomItems.WEBPAGE_ICON = "<?xml version=\"1.0\" encoding=\"utf-8\"?>\n         <svg version=\"1.1\" id=\"" + CustomItems.webPageMeta.icon + "\" xmlns=\"http://www.w3.org/2000/svg\" xmlns:xlink=\"http://www.w3.org/1999/xlink\" x=\"0px\" y=\"0px\"\n         \t viewBox=\"4 -4 24 24\" style=\"enable-background:new 4 -4 24 24;\" xml:space=\"preserve\">\n             <style type=\"text/css\">\n             \t.dx_ruby{fill:#FA7864;}\n             </style>\n             <path class=\"dx_ruby\" d=\"M27-2c0-0.6-0.4-1-1-1H6C5.4-3,5-2.6,5-2v20c0,0.6,0.4,1,1,1h20c0.6,0,1-0.4,1-1V-2z M25,17H7V-1h18V17z\"/>\n             <polyline points=\"12,4 14,10 16,6 18,10 20,4\" style=\"fill:none;stroke:#FA7864;stroke-width:2\" />\n         </svg>";
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
                    attribute = row.getDisplayText('Attribute');
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
