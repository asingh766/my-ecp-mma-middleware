import { expect } from "chai";
import { CreateProfile } from "../src/Registration/CreateProfile/index.js";

describe("Create Profile Unit Test", function () {
	it("Should returns 200", async function () {
		const req = {
			method: "POST",
			body: {
				UserId: "kbrkannan",
				Password: "Password@123",
				ConfirmPassword: "Password@123",
				HomePhoneNumber: 9876543210,
				MobilePhoneNumber: 9867464643,
				WorkPhoneNumber: 8757575656,
				SecurityQuestion1: "Childhood Friend",
				Answer1: "Raja",
				SecurityQuestion2: "First School",
				Answer2: "SanJose",
				SecurityQuestion3: "Favorite Color",
				Answer3: "Red",
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
		await CreateProfile(req, res);

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
		await CreateProfile(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
