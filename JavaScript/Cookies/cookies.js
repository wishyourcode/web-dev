// Setting cookies in JavaScript
// Each cookie is a key-value pair
// Multiple cookies are separated by semicolons
// Here, we are setting three cookies: username, age, and city
document.cookie = "username= Vishal Mishra";
document.cookie = "age=22";
document.cookie = "city=Mumbai";
let data = document.querySelector("h1");
console.log(data);
data.innerText = document.cookie;
// To update a cookie, set it again with the same key
document.cookie = "username=Piyush Mishra";
data.innerText = document.cookie;
// To delete a cookie, set its expiration date to a past date
document.cookie = "age=; expires=Thu, 01 Jan 1970 00:00:00 UTC;";
data.innerText = document.cookie;
// Note: Cookies are limited in size and number per domain
// They are sent with every HTTP request, so use them judiciously
// Also, cookies have attributes like 'path', 'domain', 'secure', and 'SameSite' for better control
// Always consider security implications when using cookies
