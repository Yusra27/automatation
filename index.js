const {Builder, By, Key, until} = require('selenium-webdriver'); 

(async function example(){
  let driver = await new Builder().forBrowser('chrome').build();

  try{
    driver.manage().setTimeouts({implicit:10000});
  await driver.get("https://www.amazon.com/ap/signin?openid.pape.max_auth_age=0&openid.return_to=https%3A%2F%2Fwww.amazon.com%2F%3F%26tag%3Dgoogleglobalp-20%26ref%3Dnav_ya_signin%26adgrpid%3D82342659060%26hvpone%3D%26hvptwo%3D%26hvadid%3D585475370855%26hvpos%3D%26hvnetw%3Dg%26hvrand%3D11484493945430562241%26hvqmt%3De%26hvdev%3Dc%26hvdvcmdl%3D%26hvlocint%3D%26hvlocphy%3D1011081%26hvtargid%3Dkwd-10573980%26hydadcr%3D2246_13468515%26gclid%3DCj0KCQjwy5maBhDdARIsAMxrkw1lFlMg47o_-E3OC_2iS3zXRdDwgdP_ehhHlEXTyBUJ_HcjhCrdKQkaAiMJEALw_wcB&openid.identity=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.assoc_handle=usflex&openid.mode=checkid_setup&openid.claimed_id=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0%2Fidentifier_select&openid.ns=http%3A%2F%2Fspecs.openid.net%2Fauth%2F2.0&");
    await driver.findElement(By.id("ap_email")).sendKeys("email", Key.RETURN);
    await driver.findElement(By.id("ap_password")).sendKeys("password", Key.RETURN);
    await driver.findElement(By.id("twotabsearchtextbox")).sendKeys("iPhone");
    await driver.findElement(By.id("nav-search-submit-button")).click();
    await driver.get("https://www.amazon.com/Apple-iPhone-64GB-Midnight-Green/dp/B08BHXG144/ref=sr_1_1?crid=26H5RXDDBNM3P&keywords=iphone&qid=1665752759&qu=eyJxc2MiOiI3Ljk2IiwicXNhIjoiNy42NSIsInFzcCI6IjcuMTMifQ%3D%3D&sprefix=ip%2Caps%2C1007&sr=8-1");
    await driver.findElement(By.id("add-to-cart-button")).click();
    await driver.findElement(By.id("attach-accessory-proceed-to-checkout-text")).click();

} finally {
 // await driver.quit();
}
})();