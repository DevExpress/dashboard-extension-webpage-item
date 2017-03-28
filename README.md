A  custom **Web Page** item allows you to display a single web page or a set of pages. You can use the Web Page as a detail item along with the [Master-Filtering](https://documentation.devexpress.com/#Dashboard/CustomDocument117060) feature.


## Installation

To add the Web Page dashboard item to the Web Dashboard, register a custom item extension in the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.getDesigner();
  dashboardControl.registerExtension(new CustomItems.WebPageItemExtension(dashboardControl));
}
```


## Settings
The **Web Page** dashboard item supports the following setting that you can configure in the Wed Dashboard UI:
* **URL** - Specifies a web page URL. You can set a single page as well as a set of pages (e.g., https://en.wikipedia.org/wiki/{0}). If you add a dimension and specify a placeholder, the data source field returns strings that will be inserted in the position of the {0} placeholder. Thus, the Web Page item joins the specified URL with the current dimension value and displays the page located by this address.

## License

This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Follow [this guideline](https://isc.devexpress.com/Thread/WorkplaceDetails/T491859) for general information about a custom extension.
* To learn how to create a custom item, see the following [KB article](https://isc.devexpress.com/Thread/WorkplaceDetails/T491984).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
