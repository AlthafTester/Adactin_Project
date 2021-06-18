Feature: Hotel booking in Adactin application

@smokeTest
Scenario Outline:: LogIn
Given user Launch The Application
When user Enter The "<Username>" In Username Field
And user Enter The "<Password>" In Password Field
Then user Click On The LogIn Button And It Navigate To The Search Hotel Page

Examples:
|Username|Password|
|ABC|123|
|DEF|456|
|JKSAlthaf|althaf786|

@sanityTest
Scenario: Search Hotel
When user Select The Location Of Hotel From Select Location Dropdown
And user Select The Hotel Name From Select Hotel Dropdown
And user Select The Room Type From Select Room Type Dropdown
And user Select Number Of Rooms From Number Of Rooms Dropdown
And user Enter The Checkin Date In Checkin Field
And user Enter The Checkout Date In Checkout Field
And user Select Number Of Adults Per Room From Adult Per Room Dropdown
And user Select Number Of Children Per Room From Children Per Room Dropdown
Then Click On The Search Button And It Navigate To The Select Hotel Page

@sanityTest
Scenario: Select hotel
When user Click On The Radio Button Of Select Hotel
Then Click On The Continue Button And It Navigate To The Book A Hotel Page

@sanityTest
Scenario: Book A Hotel
When user Enter The First Name In The First Name Field
And user Enter The Last Name In The Last Name Field
And user Enter The Billing Address In The Billing Address Field
And user  Enter The Credit Card Number In The Credit Card Number Field
And user Select The Credit Card Type In The Credit Card Type Dropdown
And user Select The Credit Card Expiry Month In The Select Month Dropdown
And user Select The Credit Card Expiry Year In The Select Year Dropdown
And user Enter The Cvv Of The Credit Card In The Cvv Field
Then user Click On The Book Now Button And It Navigate To The Booking Confirmation Page

@sanityTest
Scenario: Booking Confirmation
Then user Click On The My Itinerary Button And It Navigate To The Booked Itinerary Page

@RegressionTest
Scenario: Booked Itinerary
Then user Click On The Logout Button And It Navigate To The Logout Page

