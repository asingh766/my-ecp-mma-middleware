import { assert, expect } from "chai";
import { Login } from "../src/Login/index.js";
import nock from "nock";

describe("Login Unit Test", function () {

	it("Should returns 400 as response - POST", async function () {
		const req = {
			method: "POST",
			body: { Password: "Testpass1$" },
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
			.post(`/login`, req.body
			)
			.reply(400);

		// invoke the function
		await Login(req, res);
		expect(statusCode).to.equal(400);
	});

	it("Should returns 200 as response - POST", async function () {
		const req = {
			method: "POST",
			body: { UserName: "ericddev", Password: "Testpass1$" },
		};

		const responseData = {
			UserId: 5414,
			UserName: "ericddev",
			FirstName: "Michael",
			LastName: "Hurd",
			MiddleName: "X",
			LastLoginDate: "05:40 AM CST 03 Apr 2024",
			Token:
				"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZXJpY2RkZXYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJNSUNIQUVMIEhVUkQiLCJleHAiOjE3MTIxNjMyMzUsImlzcyI6Ik15RUNQIiwiYXVkIjoiTXlFQ1AifQ.Vm0kv9uHdPB2x8gg9rttfz5CFn75637ibki5UoicNZs",
			Expiration: "2024-04-03T16:53:55Z",
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
			.post(`/login`, req.body
			)
			.reply(200, responseData);

		// invoke the function
		await Login(req, res);
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
		await Login(req, res);
		// Assert
		expect(statusCode).to.equal(204);
	});
});
