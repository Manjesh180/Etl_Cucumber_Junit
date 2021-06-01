package stepdefs;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Demo_StepDefinitions {

	@Given("^that the user (.*) is given a task to clear (.*) certification exam$")
	public void certificationName(String name, String certication) throws Throwable {
		System.out.println(name + "   " +certication);
	}

	@When("^(.*) got (\\d+) marks in exam$")
	public void gotMarks(String name, int marks) throws Throwable {
		System.out.println(name + "   " +marks);
	}

	@Then("^(.*) is known as (.*) certified$")
	public void certifiedYes(String name, String certification) throws Throwable {
		System.out.println(name + "   " +certification);
	}
}
