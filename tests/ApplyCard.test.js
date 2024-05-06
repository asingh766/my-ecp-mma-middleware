import { expect } from "chai";
import { ApplyCard } from "../src/Card/ApplyCard/index.js";
import nock from "nock";
describe("Apply Card Unit Test", function () {
	it("Should returns 400 as response", async function () {
		const req = {
			method: "GET",
			body: {
				MiddleInitial: "John",
				LastName: "Antony",
				Suffix: "Mr",
				DateOfBirth: "02/03/1998",
				SSN: 897123309,
				AddressLine1: "40 J/1 John Street",
				AddressLine2: "2nd floor GEX Apartment",
				City: "Coimbatore",
				State: "TamilNadu",
				ZipCode: 640031,
				YearsAtAddressSelect: 8,
				MonthsAtAddressSelect: 10,
				MonthlySalary: 55000,
				Employer: "ChangeCX",
				YearsAtEmployer: 3,
				MonthsAtEmployer: 4,
				MotherMaiden: "Elisa",
				Email: "abc@gmail.com",
				MonthlyHousePayment: 12000,
				PrimaryNo: 9876543210,
				AcceptTerms: true,
				AcceptTerms2: true,
				CapValue: "jklHdE",
			},
		};

		let result;
		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function (x) {
				result = x;
			},
		};

		// invoke the function
		await ApplyCard(req, res);

		// Assert
		expect(statusCode).to.equal(400);
	});

	it("Should returns 200 as response", async function () {
		const req = {
			method: "POST",
			body: {
				FirstName: "John",
				MiddleInitial: "John",
				LastName: "Antony",
				Suffix: "Mr",
				DateOfBirth: "02/03/1998",
				SSN: 897123309,
				AddressLine1: "40 J/1 John Street",
				AddressLine2: "2nd floor GEX Apartment",
				City: "Coimbatore",
				State: "TamilNadu",
				ZipCode: 640031,
				YearsAtAddressSelect: 8,
				MonthsAtAddressSelect: 10,
				MonthlySalary: 550000,
				Employer: "ChangeCX",
				YearsAtEmployer: 3,
				MonthsAtEmployer: 4,
				MotherMaiden: "Elisa",
				Email: "abc@gmail.com",
				MonthlyHousePayment: 12000,
				PrimaryNo: 9876543210,
				AcceptTerms: true,
				AcceptTerms2: true,
				CapValue: "jklHdE",
			},
		};

		let result;
		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function (x) {
				result = x;
			},
		};
		nock(`${process.env.baseUrl}`)
			.post(`/applycard`)
			.reply(200);

		// invoke the function
		await ApplyCard(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("If Response is 204", async function () {
		const req = { method: "OPTIONS" };
		let result;
		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function (x) {
				result = x;
			},
		};

		// invoke the function
		await ApplyCard(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
