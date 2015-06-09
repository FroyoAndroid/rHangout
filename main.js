var app = require('var');
var BrowserWindow = require('browser-window');

// Report crashes to our server.
require('crash-reporter').start();

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the javascript object is GCed.
var mainWindow = null;

// Quit when all windows are closed.
app.on('window-all-closed',function(){
	if(process.platform != 'darwin'){
		app.quit();
	}
});

// This method will be called when Electron has done everything
// initialization and ready for creating browser windows.
app.on('ready',function(){
	// Create the browser window.
	mainWindow = new BrowserWindow({width: 400, height: 600});

	// and load the index.html of the app.

});