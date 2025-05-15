# Steps for installing the IWA:
1. `python3 server.py`
2. Make sure your chrome has the following features enabled:
  * IsolatedWebAppDevMode (need to enable)
  * IsolatedWebApps (enabled by default on ChromeOS)
  * UnrestrictedUsb (enabled by default)
4. Go to `chrome://web-app-internals/` and put `http://127.0.0.1:8080/` in **Install IWA via Dev Mode Proxy:**

# Steps for running the IWA:
1. Make sure IWA is properly installed.
2. For ChromeOS, find `Unrestricted USB IWA` in apps and run it. For other OS, go to chrome://apps and run `Unrestricted USB IWA`.
