import { expect } from "chai";
import { CardInfo } from "../src/Registration/CardInfo/index.js";

describe("Card Info Unit Test", function () {
	it("Should returns 200", async function () {
		const req = {
			method: "POST",
			body: {
				CardNumber: 56432176543298100,
				ExpirationMonth: 4,
				ExpiratonYear: 2031,
				SocialSecurityNumber: 345234098,
				DateOfBirth: "02/03/1999",
				EmailAddress: "leodass@gmail.com",
				ConfirmEmailAddress: "leodass@gmail.com",
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
		await CardInfo(req, res);

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
		await CardInfo(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
