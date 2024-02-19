# pi-gdo
A Garage Door Opener program for the Raspberry Pi

This is a web site for a Raspberry Pi that can trigger a GPIO spike.  This spike (an off/on/off change) is meant to trigger an electric relay.  That relay can be connected to a garage door opener's wall button input which can trigger the door to open and close.

## Configuration
You need to specify the Raspberry Pi GPIO por to use for the relay.  Then, you need to specify the video URL to use.  We can try to put this into a configuration file later.

1. Edit `server/start.js` line 7.  Change the number 2 (GPIO pin 2) to the number of the GPIO port that you want to use.
```var GDOOut = new GPIO(2, "out");```
2. Edit the `client/src/pages/IndexPage.vue` line 10.  Change the `url` attribute to the URL of the video feed that you want to use.
```<Video URL="http://192.168.1.50:8080/101/mjpg/stream" />```


## Final setup
The solution requires Node JS for web functionality (with Quasar for the UI) and PM2 for service functionality.  

1. There is a script called `install-tools.sh` that will set up Quasar CLI and PM2.  Node and NPM are required to be installed first.
2. Run `build-client.sh` to install the Quasar and other Node modules in the web client folder.
3. Change to the `server` folder and run `npm install` to set up the web server modules.
4. Then, the script `run.sh` will start the service once.  It should service HTTP on port 8080.

If you want to install the service, then there's a PM2 command.  I'll add that to this document later.
