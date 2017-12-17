package stepDefinition;

import org.openqa.selenium.By;
import org.openqa.selenium.By.ByLinkText;
import org.openqa.selenium.OutputType;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebDriverException;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

import cucumber.api.Scenario;
import cucumber.api.java.After;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class stepDef {
	
	public static WebDriver driver = methodParameterisation.driver;
	
	/* Access by the Background property in the second.feature file
	 * 
	 * @Given("^I am  a registered user on the web page\\.$")
	public void i_am_a_registered_user_on_the_web_page() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		System.setProperty("webdriver.chrome.driver", "D:/Srini/chromedriver.exe");
	    driver = new ChromeDriver();
	    driver.get("https://magento.com/");
	    driver.findElement(By.linkText("MY ACCOUNT")).click();
	    		
	}*/
	
	//Taking  the screenshot for Exceptions
	
	@After
	public void embedScreenshot(Scenario scenario)
	{
		//if(scenario.isFailed())
		//{
			try
			{
				byte[] screenshot= ((ChromeDriver) driver).getScreenshotAs(OutputType.BYTES);
				scenario.embed(screenshot, "image/png");
			}
			catch(WebDriverException someformsDontSupportScreenshot)
			{
				System.err.println(someformsDontSupportScreenshot);
			}
		//}
	}

	
	

	@When("^I update my user credentials$")
	public void i_update_my_user_credentials() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		
		driver.findElement(By.id("email")).sendKeys("natarajan.ramanathan93@gmail.com");
		driver.findElement(By.id("pass")).sendKeys("Welcome123");
	    
	}

	@When("^I click on Login$")
	public void i_click_on_Login() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("send2")).click();
	    
	}

	@Then("^should get access to the Dashboard$")
	public void should_get_access_to_the_Dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		Assert.assertEquals(true, driver.findElement(By.linkText("Log Out")).isDisplayed());
	    
	}
	
	@Given("^I am not a registered user on the webpage$")
	public void i_am_not_a_registered_user_on_the_webpage() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}

	@Then("^I should get a error  message$")
	public void i_should_get_a_error_message() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}
	
	

}
