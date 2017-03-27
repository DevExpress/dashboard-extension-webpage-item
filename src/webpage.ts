/// <reference path="meta.ts" />
/// <reference path="icon.ts" />
/// <reference path="webpage-viewer.ts" />

module CustomItems {

    export class WebPageItemExtension implements DevExpress.Dashboard.ICustomItemExtension {
        name = WEBPAGE_EXTENSION_NAME;
        metaData = webPageMeta;

        constructor(dashboardControl: any) {
            dashboardControl.registerIcon(WEBPAGE_ICON);
        }

        public createViewerItem = (model: any, $element: JQuery, content: any) => {
            return new CustomItems.webPageItem(model, $element, content);
        };
    }
}