import { expect } from "chai";
import { CalculatorSettings } from "../src/CalculatorSettings/index.js";
import nock from "nock";

describe("Calculator Settings Unit Test", function () {
	it("Should returns 200 as response - GET", async function () {
		const req = {
			method: "GET",
		};

		const responseData = {
			InterestRatePerYear: "9.99%",
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
			.get(`/calculatorsettings`)
			.reply(200, responseData);
		// invoke the function
		await CalculatorSettings(req, res);

		// Assert
		expect(statusCode).to.equal(200);
	});

	it("Should returns 400 as response - GET", async function () {
		const req = {
			method: "",
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
			.get(`/calculatorsettings`)
			.reply(400);
		// invoke the function
		await CalculatorSettings(req, res);

		// Assert
		expect(statusCode).to.equal(400);
	});

	it("If Response is 204", async function () {
		const req = { method: "OPTIONS" };

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		// invoke the function
		await CalculatorSettings(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
