package com.adactin.testrunner;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;

import com.adactin.helper.File_Reader_Manager;
import com.baseclass.com.Base_Class;

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src//test//java//com//adactin//feature", glue = "com.adactin.stepdefinition",
monochrome = true,
tags = ("@smokeTest,@sanityTest,@RegresssionTest"),
plugin = {
	"html:Report/HTML_Report",
	"pretty",
	"json:Report/CucumberJSON_Report.json",
	"com.cucumber.listener.ExtentCucumberFormatter:Reports/ExtentReport.html"	
})

public class Test_Runner {

	public static WebDriver driver;
	
	
	
	@BeforeClass
	public static void set_Up() throws Throwable {

		String browser = File_Reader_Manager.getInstanceCR().getBrowser();
		driver = Base_Class.browserlaunch(browser);
	}
	
	@AfterClass
	public static void tear_Down() {

		driver.close();
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
