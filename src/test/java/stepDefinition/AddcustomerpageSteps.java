package stepDefinition;

import java.util.Map;

import org.junit.Assert;
import org.openqa.selenium.Alert;

import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import io.cucumber.datatable.DataTable;
import objectrepository.AddcustomerPage;

public class AddcustomerpageSteps {
	@When("The user fill in the valid customer details")
	public void the_user_fill_in_the_valid_customer_details(DataTable uDetails) {
		AddcustomerPage acpage=new AddcustomerPage();
	    Map<String,String> uDetailsMap=uDetails.asMap(String.class, String.class);
	    acpage.getDone().click();
	    acpage.getFname().sendKeys(uDetailsMap.get("firstName"));
	    acpage.getLname().sendKeys(uDetailsMap.get("lastName"));
	    acpage.getEmail().sendKeys(uDetailsMap.get("emailAddress"));
	    acpage.getAddr().sendKeys(uDetailsMap.get("address"));
	    acpage.getPhno().sendKeys(uDetailsMap.get("phNo"));
	 
	}
	@When("the user click the submit button")
	public void the_user_click_the_submit_button() {
	    
		AddcustomerPage acpage=new AddcustomerPage();
		acpage.getBtnSubmit().click();
	}
	
	
	@When("The user fill in the invalid customer details")
	public void the_user_fill_in_the_invalid_customer_details(DataTable uDetails) {
		AddcustomerPage acpage=new AddcustomerPage();
	    Map<String,String> uDetailsMap=uDetails.asMap(String.class, String.class);
	    acpage.getDone().click();
	    acpage.getFname().sendKeys(uDetailsMap.get("firstName"));
	    acpage.getLname().sendKeys(uDetailsMap.get("lastName"));
	    acpage.getEmail().sendKeys(uDetailsMap.get("emailAddress"));
	    acpage.getAddr().sendKeys(uDetailsMap.get("address"));
	    acpage.getPhno().sendKeys(uDetailsMap.get("phNo"));
	    
	}
	@Then("the user should see the error message")
	public void the_user_should_see_the_error_message() {
		AddcustomerPage acpage=new AddcustomerPage();
		Assert.assertTrue(acpage.getErrmsg().isDisplayed());
	}
	@When("The user is not fill in the customer phone number")
	public void the_user_is_not_fill_in_the_customer_phone_number(DataTable uDetails) {
		AddcustomerPage acpage=new AddcustomerPage();
	    Map<String,String> uDetailsMap=uDetails.asMap(String.class, String.class);
	    acpage.getDone().click();
	    acpage.getFname().sendKeys(uDetailsMap.get("firstName"));
	    acpage.getLname().sendKeys(uDetailsMap.get("lastName"));
	    acpage.getEmail().sendKeys(uDetailsMap.get("emailAddress"));
	    acpage.getAddr().sendKeys(uDetailsMap.get("address"));
	    
	}
	@When("the user click  submit button")
	public void the_user_click_submit_button() {
		AddcustomerPage acpage=new AddcustomerPage();
		acpage.getBtnSubmit().click();
	}


	@Then("the user should see the popup message")
	public void the_user_should_see_the_popup_message() {
	    Alert a=Hooks.driver.switchTo().alert();
	a.accept();

	}
	@When("the user click the reset button")
	public void the_user_click_the_reset_button() {
		AddcustomerPage acpage=new AddcustomerPage();
		acpage.getBtnReset().click();
	}

	@Then("the user should see the empty fields")
	public void the_user_should_see_the_empty_fields() {
		AddcustomerPage acpage=new AddcustomerPage();
	Assert.assertEquals("", acpage.getFname().getAttribute("value"));
	}

}