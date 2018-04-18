/// <reference path="../typings/globals/dashboards/dx-dashboard-designer.d.ts" />
/// <reference path="meta.ts" />

module CustomItems {
    export class webPageItem extends DevExpress.Dashboard.customViewerItem {
        private _iframe: any;

        constructor(model: any, $container, options) {
            super(model, $container, options);
            this._iframe = undefined;
        }

        renderContent($element: JQuery, changeExisting: boolean, afterRenderCallback?) {
            var attribute;
            if(!changeExisting || !this._iframe) {
                this._iframe = $('<iframe>', { 
                    attr: {
                        width: '100%',
                        height: '100%'
                    },
                    style: 'border: none;'
                });
                $element.append(this._iframe);
            }
            this.iterateData(row => {
                if(!attribute) {
                    attribute = row.getDisplayText('Attribute')[0];
                }
            });
            this._iframe.attr('src', this.getPropertyValue('Url').replace('{0}', attribute));
        }
    }
}