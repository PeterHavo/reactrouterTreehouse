var webdriver = require('selenium-webdriver');
var chromedriver = require('chromedriver') ;
 
var driver = new webdriver.Builder().
   withCapabilities(webdriver.Capabilities.chrome()).
   build();
 
driver.get('http://34.253.189.52');
driver.findElement(webdriver.By.name('q')).sendKeys('simple programmer');
driver.findElement(webdriver.By.name('btnG')).click();
driver.quit();