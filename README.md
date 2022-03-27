# JavaScript helpers
  
JavaScript helper classes, functions etc.


### Classes
#### Cookies.class.js
./classes/Cookies.class.js
  
Class designed to process document.cookie into array of Cookie objects in following format:  
{  
    name: "cookieName",  
    value: JSON.parsed value or string  
}  
  
Methods:  
.setCookie(name, value, options) - sets new cookie with specified name and value  
.deleteCookies(name) - deletes cookie with specified name  
.getCookies() - returns all cookies in array  
.getCookie(name) - returns cookie object of false if cookie with specified name does not exists  
.getCookieByValue(value)  - returns cookie object of false if cookie with specified value does not exists  