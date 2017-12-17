package stepDefinition;

import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.DataTable;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class methodParameterisation {
	
	public static WebDriver driver;
	
	@Given("^I am a valid user$")
	public void i_am_a_valid_user() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions

		System.setProperty("webdriver.chrome.driver", "D:/Srini/chromedriver.exe");
		driver = new ChromeDriver();
	    driver.get("https://magento.com/");
	    driver.manage().timeouts().implicitlyWait(30,TimeUnit.SECONDS);
	    driver.findElement(By.linkText("MY ACCOUNT")).click();
	}

	@When("^I enter the username as ([^\"]*)$")
	public void i_enter_the_username_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("email")).sendKeys(arg1);
		
	}

	@When("^I enter the password as ([^\"]*)$")
	public void i_enter_the_password_as(String arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
		driver.findElement(By.id("pass")).sendKeys(arg1);
	}

	@When("^I click on the SignIn button$")
	public void i_click_on_the_SignIn_button() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^I should be navigated to the dashboard$")
	public void i_should_be_navigated_to_the_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	@Given("^I am able to access the dashboard$")
	public void i_am_able_to_access_the_dashboard() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	}
	
	

	@When("^I enter the insurance records$")
	public void i_enter_the_insurance_records(DataTable arg1) throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    // For automatic transformation, change DataTable to one of
	    // List<YourType>, List<List<E>>, List<Map<K,V>> or Map<K,V>.
	    // E,K,V must be a scalar (String, Integer, Date, enum etc)
		List<List<String>> table = arg1.raw();
		table.get(2).get(4);
		System.out.println(table.size());
	    
	}

	@When("^I post it$")
	public void i_post_it() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}

	@Then("^I should be able to retrieve the data from DB$")
	public void i_should_be_able_to_retrieve_the_data_from_DB() throws Throwable {
	    // Write code here that turns the phrase above into concrete actions
	    
	}
	
	
	
	
	

	

}
