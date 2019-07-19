package stepDefinition;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.After;
import cucumber.api.java.Before;

public class Hooks {
public static WebDriver driver;
@Before
public static void before() throws Throwable {
	   System.setProperty("webdriver.chrome.driver", "C:\\Users\\swamy\\Desktop\\JAVA\\eclipse\\pravee\\Day10\\driver\\chromedriver.exe");
	   driver=new ChromeDriver();
	   Thread.sleep(5000);
	   driver.get("http://demo.guru99.com/telecom/");
	
}
@After
public static void after() {
	driver.close();

	driver.quit();
}

/*public static WebDriver driver;

@Before
public static void beforeMethod1() {

	System.setProperty("webdriver.chrome.driver", "D:\\chromedriver\\chromedriver.exe");
	driver = new ChromeDriver();
	driver.get("http://demo.guru99.com/telecom/index.html");

}

@After
public static void afterMethod1() {
	driver.close();
	driver.quit();
}*/
}
