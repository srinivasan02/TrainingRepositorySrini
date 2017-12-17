package Cucumber.Cucumber;

import org.junit.runner.RunWith;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(dryRun = false, monochrome = true, features= "src/test/java/features/second.feature",glue="stepDefinition",
				 format={"pretty","html:Reports","json:target/RunCuke/cucumber.json"})

/*
 * dryRun - to display unimplemented methods, features -> declaring the path of the different feature file (src/test/java/features/filename.feature)
 * glue-> used to define the step definition file path
 * monochrome -> displaying the clear reports in the console
 * format -> used to formatting the report.Types : pretty,html:foldername,
 * Tags -> For displaying the particular tags reports in the console
*/

/*
 * To Run the application by using Maven Build 
 * 
 * 1> Added <build> tags and their plugins tags in pom.xml
 * 2> Right Click on the pom.xml and click run configurations
 * 3> Enter Goals as test -Dcucumber.options="--tags @tag1,@tag2" or test -Dcucumber.options="--tags @tag1 --tags @tag2"
 * 4> test -Dcucumber.options="--tags @tag1,@tag2" --> means  will run OR operations and will all the scenarios 
 * 5> test -Dcucumber.options="--tags @tag1 --tags @tag2" --> means will run AND operations and wont all the scenarios
 */

public class Runner {
	
	
	

}
