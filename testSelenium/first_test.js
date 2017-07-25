var webdriver = require('selenium-webdriver');
var chromedriver = require('chromedriver') ;
 
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();
 
driver.get('http://34.253.189.52');
driver.findElement(webdriver.By.id('test')).click();
// driver.findElement(webdriver.By.name('btnG')).click();
driver.wait(checkTitle, 500);

function checkTitle () {
    var promise = driver.getCurrentUrl().then((url) => {
        if (url == 'http://34.253.189.2/courses/html') {
            console.log('success');
            return true;
        } else 
        {
            console.log(`fail-----${url}`);
        }
    });
    driver.quit();
    return promise;
}
