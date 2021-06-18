package com.adactin.helper;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

import com.adactin.pom.com.Book_A_Hotel;
import com.adactin.pom.com.Booking_Confirmation;
import com.adactin.pom.com.Log_Out;
import com.adactin.pom.com.Login_Pom;
import com.adactin.pom.com.Search_Hotel;
import com.adactin.pom.com.Select_Hotel;

public class Page_Object_Manager {

	public  WebDriver driver;
	
	private Login_Pom login;
	
	public Page_Object_Manager(WebDriver driver2) {

		this.driver = driver2;
		PageFactory.initElements(driver2, this);
	}

	public Login_Pom getInstance_Login() {

		login = new Login_Pom(driver);
		return login;
	}
	
	private Search_Hotel searchhotel;
	
	public Search_Hotel getInstance_searchHotel() {

		searchhotel = new Search_Hotel(driver);
		return searchhotel;
	}
	
	private Select_Hotel selecthotel;
	
	public Select_Hotel getInstance_selectHotel() {

		selecthotel = new Select_Hotel(driver);
		return selecthotel;
	}
	
	private Book_A_Hotel bookahotel;
	
	public Book_A_Hotel getInstance_bookAHotel() {

		bookahotel = new Book_A_Hotel(driver);
		return bookahotel;
	}
	
    private Booking_Confirmation bookingconfirmation;
    
    public Booking_Confirmation getInstance_bookingConfirmation() {

    	bookingconfirmation = new Booking_Confirmation(driver);
    	return bookingconfirmation;
	}
    
    private Log_Out logout;
    
    public Log_Out getInstance_logOut() {

    	logout = new Log_Out(driver);
    	return logout;
	}
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
}
