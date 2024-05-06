import { assert, expect } from "chai";
import { AuthorizedUsers } from "../src/AuthorizedUsers/AuthorizedUsers/index.js";
import nock from "nock";

describe("Authorized Users Unit Test", function () {
	it("Should returns 200 as response - GET", async function () {
		const req = {
			method: "GET",
			query: { userId: "5414", accountNo: "6019450400085430" },
		};

		const responseData = {
			data: [
				{
					FullName: "TEST BRENNAN",
					AddedOn: "2015-12-02T00:00:00",
				},
			],
		};

		nock(`${process.env.baseUrl}`)
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`
			)
			.reply(200, responseData);

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		await AuthorizedUsers(req, res).then(() => {
			assert.deepEqual(responseData.data[0].FullName, "TEST BRENNAN");
		});
	});

	it("Should returns 400 as response - GET", async function () {
		const req = {
			method: "GET",
			query: { userId: "" },
		};
		const response = { response: "Undefined" };
		nock(`${process.env.baseUrl}`)
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`
			)
			.reply(400);

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		await AuthorizedUsers(req, res);
		expect(response.response).to.equal('Undefined');
	});

	it("Should returns 500 as response - GET", async function () {
		const req = {
			method: "",
			query: { userId: "5414", accountNo: "6019450400085430" },
		};

		const responseData = {
			data: [
				{
					FullName: "TEST BRENNAN",
					AddedOn: "2015-12-02T00:00:00",
				},
			],
		};

		nock(`${process.env.baseUrl}`)
			.get(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`
			)
			.reply(500, responseData);

		let statusCode;
		const res = {
			set: function () { },
			status: function (x) {
				statusCode = x;
				return this;
			},
			send: function () { },
		};

		await AuthorizedUsers(req, res);
		expect(statusCode).to.equal(500);
	});
	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "POST",
			query: { userId: "5414", accountNo: "6019450400085430" },
			body: {
				FirstName: "string",
				MiddleName: "string",
				LastName: "string",
				SSN: 273457987098,
				IsUsingTempAddress: true,
				BillingAddress: {
					Address1: "string",
					Address2: "string",
					City: "string",
					State: "string",
					Zip: "string",
					ZipPlus: "string",
				},
				TempAddress: {
					Address1: "string",
					Address2: "string",
					City: "string",
					State: "string",
					Zip: "string",
					ZipPlus: "string",
				},
			},
		};

		const responseData = {
			message: "Authorized User successfully Added",
		};
		nock(`${process.env.baseUrl}`)
			.post(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`
			)
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

		// invoke the function
		await AuthorizedUsers(req, res);

		// Assert
		expect(responseData.message).to.equal("Authorized User successfully Added");
	});

	it("Should returns 400 as response - POST", async function () {
		const req = {
			method: "POST",
			query: { userId: "5414" },
			body: {
				FirstName: "string",
				MiddleName: "string",
				LastName: "string",
				SSN: 273457987098,
				IsUsingTempAddress: true,
				BillingAddress: {
					Address1: "string",
					Address2: "string",
					City: "string",
					State: "string",
					Zip: "string",
					ZipPlus: "string",
				},
				TempAddress: {
					Address1: "string",
					Address2: "string",
					City: "string",
					State: "string",
					Zip: "string",
					ZipPlus: "string",
				},
			},
		};

		const responseData = {
			message: "Authorized User successfully Added",
		};
		nock(`${process.env.baseUrl}`)
			.post(
				`/users/${req.query.userId}/accounts/${req.query.accountNo}/authorized-users`
			)
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

		// invoke the function
		await AuthorizedUsers(req, res);

		// Assert
		expect(responseData.message).to.equal("Authorized User successfully Added");
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
		await AuthorizedUsers(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
