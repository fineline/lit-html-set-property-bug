## Demo a bug in lit-html

*(Property setters sometimes don't set)*

* Steps to replicate

1. Clone this repo
2. `npm install`
3. `npm start`
4. Browse to [http://127.0.0.1:8080]
5. Enter a wrong email/ password
6. Click login

* Expected behavior

Error is shown and password is cleared out

* Actual behavior

Error is shown but *password remains*

### But ...

1. Change `index.js` line 6 to give password any default value (e.g. "x")
2. Refresh page
	* (make sure browser cache is refreshed - you should see some dots for your default value)
3. Repeat steps 5 and 6 above 
  

Now try steps above again.

We get the expected behavior!? Which is great, but we don't want a default password...