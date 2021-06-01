package stepdefs;

import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.ResultSet;
import java.sql.Statement;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;


public class Oracle_StepDefinitions {
	
	private String className = "com.mysql.jdbc.Driver";
	
	private String connectionUrl = "jdbc:mysql://localhost:3306/hello_java";
	
	private String username = "demo_java";
	
	private String password = "1234";
	
	private Connection con;
	
	private String connectionStatus = "failed";
	
	@Given("^I establish a connection with \"([^\"]*)\" Database$")
	public void i_establish_a_connection_with_Database(String databaseName) throws Exception {
		
		if (databaseName.equals("Oracle")) {
			
			Class.forName(this.className);
			
			this.con = DriverManager.getConnection(this.connectionUrl, this.username, this.password);

			System.out.println("Connection to \""+ con.getMetaData().getDatabaseProductName() +"\" Established Successfully....");

		}
	}

	@When("^I executed \"([^\"]*)\" query$")
	public void i_executed_query(String query) throws Exception {
		
		Statement stmt= this.con.createStatement();
		
		ResultSet rs=stmt.executeQuery(query); 
		 	
		if(rs.next()) {
			this.connectionStatus = "success";
		}
		
	}

	@Then("^I should get the result as connection \"([^\"]*)\"$")
	public void i_should_get_the_result_as_connection(String result) throws Exception {
		
		if (!this.connectionStatus.equalsIgnoreCase(result)) {
			System.out.println("Error in database Connection....");  
		}
		
		this.con.close();
	}

}