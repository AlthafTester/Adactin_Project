package com.adactin.stepdefinition;

import org.openqa.selenium.WebDriver;

import com.adactin.helper.File_Reader_Manager;
import com.adactin.helper.Page_Object_Manager;
import com.adactin.testrunner.Test_Runner;
import com.baseclass.com.Base_Class;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class Step_Definition extends Base_Class{

	public  WebDriver driver = Test_Runner.driver;
	
	public Page_Object_Manager pom = new Page_Object_Manager(driver);

@Given("^user Launch The Application$")
public void user_Launch_The_Application() throws Throwable {
	String url = File_Reader_Manager.getInstanceCR().getUrl();
    geturl(url);
}


@When("^user Enter The \"([^\"]*)\" In Username Field$")
public void user_Enter_The_In_Username_Field(String username) throws Throwable {
	sendValues(pom.getInstance_Login().getUsername(), username);
}

@When("^user Enter The \"([^\"]*)\" In Password Field$")
public void user_Enter_The_In_Password_Field(String password) throws Throwable {
	sendValues(pom.getInstance_Login().getPassword(), password);
}



@Then("^user Click On The LogIn Button And It Navigate To The Search Hotel Page$")
public void user_Click_On_The_LogIn_Button_And_It_Navigate_To_The_Search_Hotel_Page() throws Throwable {
   clickOnElement(pom.getInstance_Login().getLogin());
}

@When("^user Select The Location Of Hotel From Select Location Dropdown$")
public void user_Select_The_Location_Of_Hotel_From_Select_Location_Dropdown() throws Throwable {
   sleep(5000);
   singleDropDownValue(pom.getInstance_searchHotel().getLocation(), "Los Angeles");
}

@When("^user Select The Hotel Name From Select Hotel Dropdown$")
public void user_Select_The_Hotel_Name_From_Select_Hotel_Dropdown() throws Throwable {
   singleDropDownValue(pom.getInstance_searchHotel().getHotels(), "Hotel Hervey");
}

@When("^user Select The Room Type From Select Room Type Dropdown$")
public void user_Select_The_Room_Type_From_Select_Room_Type_Dropdown() throws Throwable {
    singleDropDownValue(pom.getInstance_searchHotel().getRoomtype(), "Super Deluxe");
}

@When("^user Select Number Of Rooms From Number Of Rooms Dropdown$")
public void user_Select_Number_Of_Rooms_From_Number_Of_Rooms_Dropdown() throws Throwable {
    singleDropDownValue(pom.getInstance_searchHotel().getNo_of_rooms(), "7");
}

@When("^user Enter The Checkin Date In Checkin Field$")
public void user_Enter_The_Checkin_Date_In_Checkin_Field() throws Throwable {
   delete(pom.getInstance_searchHotel().getCheckin());
   sendValues(pom.getInstance_searchHotel().getCheckin(), "15/06/2021");
}

@When("^user Enter The Checkout Date In Checkout Field$")
public void user_Enter_The_Checkout_Date_In_Checkout_Field() throws Throwable {
  delete(pom.getInstance_searchHotel().getCheckout());
  sendValues(pom.getInstance_searchHotel().getCheckout(), "20/06/2021");
}

@When("^user Select Number Of Adults Per Room From Adult Per Room Dropdown$")
public void user_Select_Number_Of_Adults_Per_Room_From_Adult_Per_Room_Dropdown() throws Throwable {
	singleDropDownValue(pom.getInstance_searchHotel().getAdultperroom(), "2");
}

@When("^user Select Number Of Children Per Room From Children Per Room Dropdown$")
public void user_Select_Number_Of_Children_Per_Room_From_Children_Per_Room_Dropdown() throws Throwable {
    singleDropDownValue(pom.getInstance_searchHotel().getChildperroom(), "1");
}

@Then("^Click On The Search Button And It Navigate To The Select Hotel Page$")
public void click_On_The_Search_Button_And_It_Navigate_To_The_Select_Hotel_Page() throws Throwable {
    clickOnElement(pom.getInstance_searchHotel().getSubmit());
}

@When("^user Click On The Radio Button Of Select Hotel$")
public void user_Click_On_The_Radio_Button_Of_Select_Hotel() throws Throwable {
   implicitwait();
   clickOnElement(pom.getInstance_selectHotel().getRadiobutton());
}

@Then("^Click On The Continue Button And It Navigate To The Book A Hotel Page$")
public void click_On_The_Continue_Button_And_It_Navigate_To_The_Book_A_Hotel_Page() throws Throwable {
    clickOnElement(pom.getInstance_selectHotel().getContinuebutton());
}

@When("^user Enter The First Name In The First Name Field$")
public void user_Enter_The_First_Name_In_The_First_Name_Field() throws Throwable {
    implicitwait();
    sendValues(pom.getInstance_bookAHotel().getFirstname(), "JMD");
}

@When("^user Enter The Last Name In The Last Name Field$")
public void user_Enter_The_Last_Name_In_The_Last_Name_Field() throws Throwable {
    sendValues(pom.getInstance_bookAHotel().getLastname(), "Tester");
}

@When("^user Enter The Billing Address In The Billing Address Field$")
public void user_Enter_The_Billing_Address_In_The_Billing_Address_Field() throws Throwable {
    sendValues(pom.getInstance_bookAHotel().getBillingaddress(), "No-7, Jmd street, chennai, Tamilnadu, India.");
}

@When("^user  Enter The Credit Card Number In The Credit Card Number Field$")
public void user_Enter_The_Credit_Card_Number_In_The_Credit_Card_Number_Field() throws Throwable {
	String creditCardNumber = File_Reader_Manager.getInstanceCR().getCreditCardNumber();
    sendValues(pom.getInstance_bookAHotel().getCreditcardnumber(), creditCardNumber);
}

@When("^user Select The Credit Card Type In The Credit Card Type Dropdown$")
public void user_Select_The_Credit_Card_Type_In_The_Credit_Card_Type_Dropdown() throws Throwable {
	String creditCardType = File_Reader_Manager.getInstanceCR().getCreditCardType();
    singleDropDownValue(pom.getInstance_bookAHotel().getCreditcardtype(), creditCardType);
}

@When("^user Select The Credit Card Expiry Month In The Select Month Dropdown$")
public void user_Select_The_Credit_Card_Expiry_Month_In_The_Select_Month_Dropdown() throws Throwable {
	String creditCardExpiryMonth = File_Reader_Manager.getInstanceCR().getCreditCardExpiryMonth();
    singleDropDownValue(pom.getInstance_bookAHotel().getCreditcardexpirymonth(), creditCardExpiryMonth);
}

@When("^user Select The Credit Card Expiry Year In The Select Year Dropdown$")
public void user_Select_The_Credit_Card_Expiry_Year_In_The_Select_Year_Dropdown() throws Throwable {
	String creditCardExpiryyear = File_Reader_Manager.getInstanceCR().getCreditCardExpiryyear();
   singleDropDownValue(pom.getInstance_bookAHotel().getCreditcardexpiryyear(), creditCardExpiryyear);
}

@When("^user Enter The Cvv Of The Credit Card In The Cvv Field$")
public void user_Enter_The_Cvv_Of_The_Credit_Card_In_The_Cvv_Field() throws Throwable {
	String cvv = File_Reader_Manager.getInstanceCR().getCvv();
   sendValues(pom.getInstance_bookAHotel().getCvv(), cvv);
}

@Then("^user Click On The Book Now Button And It Navigate To The Booking Confirmation Page$")
public void user_Click_On_The_Book_Now_Button_And_It_Navigate_To_The_Booking_Confirmation_Page() throws Throwable {
  clickOnElement(pom.getInstance_bookAHotel().getBooknow());
}

@Then("^user Click On The My Itinerary Button And It Navigate To The Booked Itinerary Page$")
public void user_Click_On_The_My_Itinerary_Button_And_It_Navigate_To_The_Booked_Itinerary_Page() throws Throwable {
    explicitwait(pom.getInstance_bookingConfirmation().getMyitinerary());
    clickOnElement(pom.getInstance_bookingConfirmation().getMyitinerary());
}

@Then("^user Click On The Logout Button And It Navigate To The Logout Page$")
public void user_Click_On_The_Logout_Button_And_It_Navigate_To_The_Logout_Page() throws Throwable {

	implicitwait();
	clickOnElement(pom.getInstance_logOut().getLogout());
}

}
