# JavaScript helpers
  
JavaScript helper classes, functions etc.  
*Most of stuff written in this repo is just for practice* ;)

### Classes
#### Cookies.class.js
`./classes/Cookies.class.js`
  
Class designed to process document.cookie into array of Cookie objects in following format:
```
{  
    name: "cookieName",  
    value: JSON.parsed value or string  
}
```
  
Methods:  
* `.setCookie(name, value, options)` - sets new cookie with specified name and value  
* `.deleteCookies(name)` - deletes cookie with specified name  
* `.getCookies()` - returns all cookies in array  
* `.getCookie(name)` - returns cookie object of false if cookie with specified name does not exists  
* `.getCookieByValue(value)`  - returns cookie object of false if cookie with specified value does not exists  

Set cookie options - expiration in days (default values):
```
{  
    expireIn: 7,  
    path: "/"  
}
```

### Functions
#### Cookies
`./functions/Cookies.js`
  
File contains three functions to make work with cookies easier:
* `setCookie(name, value, options)` - sets new cookie with specified name and value
* `getCookie(name)` - gets cookie with specified name
* `deleteCookie(name)` - deletes cookie with specified name

Set cookie options, expireIn - expiration in days (default values):
```
{  
    expireIn: 1,  
    path: "/"  
}
```

### Prototype extensions
#### Array.prototype.isEqual
`./prototypes/isEqual.js`
  
Performs equality check of two n-dimensional arrays.  