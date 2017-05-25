A  custom **Web Page** item displays a single web page or a set of pages. You can use the Web Page as a detail item along with the [Master-Filtering](https://documentation.devexpress.com/#Dashboard/CustomDocument117060) feature.

## Installation

1. Download the required scripts [here](https://github.com/DevExpress/dashboard-extension-webpage-item/releases) and place them in your project.

2. Attach the download script to the project.
```xml
<script src="/your-path/dashboard-extension-webpage-item/dist/webpage-extension.min.js"></script>
```

3. Handle the Web Dashboard's [BeforeRender](https://documentation.devexpress.com/#Dashboard/DevExpressDashboardWebScriptsASPxClientDashboard_BeforeRendertopic) event to perform client-side customization of the Web Dashboard control before the control and its elements have been rendered.
```xml
<dx:ASPxDashboard ID="ASPxDashboard1" runat="server" DashboardStorageFolder="~/App_Data">
  <ClientSideEvents BeforeRender="onBeforeRender" />
</dx:ASPxDashboard>
```


4. Register the custom item extension to add the Web Page to the Web Dashboard.

```javascript
function onBeforeRender(sender) {
  var dashboardControl = sender.GetDashboardControl();
  dashboardControl.registerExtension(new CustomItems.WebPageItemExtension(dashboardControl));
}
```


## Settings
The **Web Page** dashboard item supports the following setting that you can configure in the Web Dashboard UI:
![image](https://cloud.githubusercontent.com/assets/17986517/25003645/2caf344c-2059-11e7-999d-2d0dc44abb65.png)
* **URL** - Specifies a web page URL. You can set a single page as well as a set of pages (e.g., https://en.wikipedia.org/wiki/{0}). If you add a dimension and specify a placeholder, the data source field returns strings that will be inserted in the position of the {0} placeholder. Thus, the Web Page item joins the specified URL with the current dimension value and displays the page located by this address.

## Development 

You can use this extension code as a base for your own [dashboard item extension](https://documentation.devexpress.com/#Dashboard/CustomDocument117546) development. 

Before you start, we advise you to [fork](https://help.github.com/articles/fork-a-repo/) this repository and work with your own copy.

1. Clone this extension to get a local copy of the repository.
```Batchfile
git clone https://github.com/DevExpress/dashboard-extension-webpage-item.git
cd dashboard-extension-webpage-item
```

2. In this extension we use the [Node.js](https://nodejs.org/en/about/) toolset. Use the command below to install all modules listed as dependencies in the extension's **package.json** file.
```Batchfile
npm install
```

3. Then install [Gulp](http://gulpjs.com) to build the solution. You can install it globally...
```Batchfile
npm install -g gulp
gulp build
```

... or use a local Gulp version.
```Batchfile
./node_modules/.bin/gulp build
```

You can find the resulting files at ```...\dashboard-extension-webpage-item\dist```:
**webpage-extension.js** and **webpage-extension.min.js**.

## License

This extension is distributed under the **MIT** license (free and open-source), but can only be used with a commercial DevExpress Dashboard software product. You can [review the license terms](https://www.devexpress.com/Support/EULAs/NetComponents.xml) or [download a free trial version](https://go.devexpress.com/DevExpressDownload_UniversalTrial.aspx) of the Dashboard suite at [DevExpress.com](https://www.devexpress.com).

## Support & Feedback

* Follow [this guideline](https://www.devexpress.com/Support/Center/Question/Details/T491859) for general information about a custom extension.
* To learn how to create a custom item, see the following [KB article](https://www.devexpress.com/Support/Center/Question/Details/T491984).
* To address questions regarding the Web Dashboard and JavaScript API, use [DevExpress Support Center](https://www.devexpress.com/Support/Center).
