import { assert, expect } from "chai";
import { UpdatePassword } from "../src/Password/UpdatePassword/index.js";
import nock from "nock";

describe("Update Password Unit Test", function () {
	it("Should return 400 as status", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414" },
			body: {
				NewPassword: "test@12345",
				ConfirmPassword: "test@12345",
			},
		};

		const responseData = {
			message: "Password Updated Successfully",
		};

		nock(`${process.env.baseUrl}`)
			.put(`/users/${req.query.userId}/password`)
			.reply(400, responseData);

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

		// Call the function with req and res
		await UpdatePassword(req, res);

		expect(statusCode).to.equal(400);
	});

	it("Should return 200 as status", async function () {
		const req = {
			method: "PUT",
			query: { userId: "5414" },
			body: {
				CurrentPassword: "test",
				NewPassword: "test",
				ConfirmPassword: "test",
			},
		};

		const responseData = {
			message: "Password Updated Successfully",
		};

		nock(`${process.env.baseUrl}`)
			.put(`/users/${req.query.userId}/password`)
			.reply(200, responseData);

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

		// Call the function with req and res
		await UpdatePassword(req, res);

		expect(statusCode).to.equal(200);
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
		await UpdatePassword(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
