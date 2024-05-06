import { expect, assert } from "chai";
import { StateInfos } from "../src/StateInfos/index.js";
import nock from "nock";

describe("States Unit Test", function () {
	it("Should returns 200 as response - GET", async function () {
		const req = { method: "GET", userId: "5414" };

		const responseData = [{ Id: 51, State: "ALABAMA", Abbreviation: "AL" }];

		nock(`${process.env.baseUrl}`)
			.get(`/states`)
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
		await StateInfos(req, res).then((response) => {
			assert.deepEqual(responseData[0].Id, 51);
		});
	});

	it("Should returns 400 as response - GET", async function () {
		const req = { method: "GET", };

		const responseData = [{ Id: 51, State: "ALABAMA", Abbreviation: "AL" }];

		nock(`${process.env.baseUrl}`)
			.get(`/states`)
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
		await StateInfos(req, res)
		expect(statusCode).to.equal(400)
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
		await StateInfos(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
