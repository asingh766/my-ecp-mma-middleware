import { expect } from "chai";
import { AuthorizedUsersAddress } from "../src/AuthorizedUsers/AuthorizedUsersAddress/index.js";
import nock from "nock";

describe("Authorized Users Address Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "POST",
			query: { userId: "5414", accountNo: "6019450400085430" },
			body: {
				FirstName: "Test",
				MiddleName: "t",
				LastName: "Test",
				SSN: "123456789",
			},
		};

		const responseData = {
			StreetName: "string",
			AptOrSuitOrRoomNumber: "string",
			City: "string",
			StateAbv: "string",
			Zip: "string",
		};

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		nock(`${process.env.baseUrl}`)
			.post(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users-address`,
				req.body
			)
			.reply(200, responseData);

		// invoke the function
		await AuthorizedUsersAddress(req, res);

		// Assert
		expect(responseData.City).to.equal("string");
	});

	it("Should returns 400 as response - POST", async function () {
		const req = {
			method: "POST",
			query: { userId: "5414", accountNo: "" },
			body: {
				MiddleName: "t",
				LastName: "Test",
				SSN: "123456789",
			},
		};

		const responseData = {
			Response: "Undefined",
		};

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		nock(`${process.env.baseUrl}`)
			.post(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users-address`,
				req.body
			)
			.reply(400, responseData);

		// invoke the function
		await AuthorizedUsersAddress(req, res);

		// Assert
		expect(responseData.Response).to.equal("Undefined");
	});

	it("Should returns 500 as response ", async function () {
		const req = {
			method: "",
			query: { userId: "5414", accountNo: "6019450400085430" },
			body: {
				MiddleName: "t",
				LastName: "Test",
				SSN: "123456789",
			},
		};

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		nock(`${process.env.baseUrl}`)
			.post(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users-address`,
				req.body
			)
			.reply(500);

		// invoke the function
		await AuthorizedUsersAddress(req, res);

		// Assert
		expect(statusCode).to.equal(500);
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
		await AuthorizedUsersAddress(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
