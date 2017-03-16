The **Web Page** custom item allows you to display a single web page or a set of pages. You can use the Web Page as a detail item along with the [Master-Filtering](https://documentation.devexpress.com/#Dashboard/CustomDocument117060) feature.


## Installation

To add the Wep Page dashboard item to the Web Dashboard, register the custom item extension on the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.getDesigner();
  dashboardControl.registerExtension(new CustomItems.WebPageItemExtension(dashboardControl));
}
```


## Settings
The **Web Page** dashboard item supports the following settings that you can configure in the Wed Dashboard UI:
* **URL** - Specifies a web page URL. You can set a single page as well as a set of pages (e.g., https://en.wikipedia.org/wiki/{0}). If you add a dimension and specify a placeholder, the data source field returns strings that will be inserted to the position of the {0} placeholder. Thus, the Web Page item join the specified URL with the current dimension value and display the page located by this address.
