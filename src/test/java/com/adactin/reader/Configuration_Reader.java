package com.adactin.reader;

import java.io.File;
import java.io.FileInputStream;
import java.util.Properties;

public class Configuration_Reader {

	public static Properties p;

	public Configuration_Reader() throws Throwable {

		File f = new File(
				"C:\\Users\\JKS\\eclipse-workspace\\Adactin_Project\\src\\test\\java\\com\\adactin\\propertyfile\\configuration.properties");
		FileInputStream fis = new FileInputStream(f);

		p = new Properties();
		p.load(fis);

	}

	public String getBrowser() {

		String browser = p.getProperty("browser");
		return browser;
	}

	public String getUrl() {

		String url = p.getProperty("url");
		return url;
	}

	public String getCreditCardNumber() {

		String creditcardnumber = p.getProperty("creditcardnumber");
		return creditcardnumber;
	}

	public String getCvv() {

		String cvv = p.getProperty("cvv");
		return cvv;
	}

	public String getCreditCardType() {

		String creditcardtype = p.getProperty("creditcardtype");
		return creditcardtype;
	}

	public String getCreditCardExpiryMonth() {

		String creditcardexpirymonth = p.getProperty("creditcardexpirymonth");
		return creditcardexpirymonth;
	}

	public String getCreditCardExpiryyear() {

		String creditcardexpiryyear = p.getProperty("creditcardexpiryyear");
		return creditcardexpiryyear;
	}

}
