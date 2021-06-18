$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel booking in Adactin application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": ": LogIn",
  "description": "",
  "id": "hotel-booking-in-adactin-application;:-login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"\u003cUsername\u003e\" In Username Field",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"\u003cPassword\u003e\" In Password Field",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The LogIn Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-application;:-login;",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-application;:-login;;1"
    },
    {
      "cells": [
        "ABC",
        "123"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-application;:-login;;2"
    },
    {
      "cells": [
        "DEF",
        "456"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-application;:-login;;3"
    },
    {
      "cells": [
        "JKSAlthaf",
        "althaf786"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-application;:-login;;4"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 12,
  "name": ": LogIn",
  "description": "",
  "id": "hotel-booking-in-adactin-application;:-login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"ABC\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"123\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The LogIn Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 6274951100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ABC",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 95691200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "123",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 111545900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_LogIn_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 419806700,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": ": LogIn",
  "description": "",
  "id": "hotel-booking-in-adactin-application;:-login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"DEF\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"456\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The LogIn Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 321416600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "DEF",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 71589900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "456",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 69231700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_LogIn_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 428558100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": ": LogIn",
  "description": "",
  "id": "hotel-booking-in-adactin-application;:-login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 3,
      "name": "@smokeTest"
    }
  ]
});
formatter.step({
  "line": 5,
  "name": "user Launch The Application",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user Enter The \"JKSAlthaf\" In Username Field",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "user Enter The \"althaf786\" In Password Field",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "user Click On The LogIn Button And It Navigate To The Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Launch_The_Application()"
});
formatter.result({
  "duration": 549240800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "JKSAlthaf",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Username_Field(String)"
});
formatter.result({
  "duration": 75708100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "althaf786",
      "offset": 16
    }
  ],
  "location": "Step_Definition.user_Enter_The_In_Password_Field(String)"
});
formatter.result({
  "duration": 71581000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_LogIn_Button_And_It_Navigate_To_The_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1067731800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user Select The Location Of Hotel From Select Location Dropdown",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user Select The Hotel Name From Select Hotel Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select The Room Type From Select Room Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select Number Of Rooms From Number Of Rooms Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Enter The Checkin Date In Checkin Field",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Enter The Checkout Date In Checkout Field",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select Number Of Adults Per Room From Adult Per Room Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select Number Of Children Per Room From Children Per Room Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "Click On The Search Button And It Navigate To The Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Location_Of_Hotel_From_Select_Location_Dropdown()"
});
formatter.result({
  "duration": 5166950500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel_Name_From_Select_Hotel_Dropdown()"
});
formatter.result({
  "duration": 123653400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Room_Type_From_Select_Room_Type_Dropdown()"
});
formatter.result({
  "duration": 137794700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Number_Of_Rooms_From_Number_Of_Rooms_Dropdown()"
});
formatter.result({
  "duration": 137263400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Checkin_Date_In_Checkin_Field()"
});
formatter.result({
  "duration": 133033500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Checkout_Date_In_Checkout_Field()"
});
formatter.result({
  "duration": 165503300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Number_Of_Adults_Per_Room_From_Adult_Per_Room_Dropdown()"
});
formatter.result({
  "duration": 135499800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Number_Of_Children_Per_Room_From_Children_Per_Room_Dropdown()"
});
formatter.result({
  "duration": 138804000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_On_The_Search_Button_And_It_Navigate_To_The_Select_Hotel_Page()"
});
formatter.result({
  "duration": 889258700,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user Click On The Radio Button Of Select Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "Click On The Continue Button And It Navigate To The Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Radio_Button_Of_Select_Hotel()"
});
formatter.result({
  "duration": 70939900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.click_On_The_Continue_Button_And_It_Navigate_To_The_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 765088200,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Book A Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-application;book-a-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user Enter The First Name In The First Name Field",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user Enter The Last Name In The Last Name Field",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enter The Billing Address In The Billing Address Field",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user  Enter The Credit Card Number In The Credit Card Number Field",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select The Credit Card Type In The Credit Card Type Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Credit Card Expiry Month In The Select Month Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The Credit Card Expiry Year In The Select Year Dropdown",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Enter The Cvv Of The Credit Card In The Cvv Field",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Click On The Book Now Button And It Navigate To The Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_First_Name_In_The_First_Name_Field()"
});
formatter.result({
  "duration": 88100300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Last_Name_In_The_Last_Name_Field()"
});
formatter.result({
  "duration": 69136900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Billing_Address_In_The_Billing_Address_Field()"
});
formatter.result({
  "duration": 97706000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Credit_Card_Number_In_The_Credit_Card_Number_Field()"
});
formatter.result({
  "duration": 79749400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Credit_Card_Type_In_The_Credit_Card_Type_Dropdown()"
});
formatter.result({
  "duration": 143033400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Credit_Card_Expiry_Month_In_The_Select_Month_Dropdown()"
});
formatter.result({
  "duration": 135998700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Credit_Card_Expiry_Year_In_The_Select_Year_Dropdown()"
});
formatter.result({
  "duration": 158908700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enter_The_Cvv_Of_The_Credit_Card_In_The_Cvv_Field()"
});
formatter.result({
  "duration": 63871100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Book_Now_Button_And_It_Navigate_To_The_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 64562300,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Booking Confirmation",
  "description": "",
  "id": "hotel-booking-in-adactin-application;booking-confirmation",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@sanityTest"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user Click On The My Itinerary Button And It Navigate To The Booked Itinerary Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_My_Itinerary_Button_And_It_Navigate_To_The_Booked_Itinerary_Page()"
});
formatter.result({
  "duration": 6381972500,
  "status": "passed"
});
});