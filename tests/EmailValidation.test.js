import { expect } from "chai";
import { EmailValidation } from "../src/Registration/EmailValidation/index.js";

describe("Email Validation Unit Test", function () {
	it("Should returns 200", async function () {
		const req = {
			method: "POST",
			body: {
				EmailAddress: "leodass@gmail.com",
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
		await EmailValidation(req, res);

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
		await EmailValidation(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
