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

        public createViewerItem = (model: DevExpress.Dashboard.ICustomItemModel, $element: JQuery, content: any, args: { viewerItem: DevExpress.Dashboard.customViewerItem }) => {
            if(model.customItemType() === this.name) {
                args.viewerItem = new CustomItems.webPageItem(model, $element, content);
            }
        };
    }
}