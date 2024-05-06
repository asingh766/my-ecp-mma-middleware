import { expect } from "chai";
import { MMAStatements } from "../src/Statements/MMAStatements/index.js";

describe("MMA Statements Unit Test", function () {
	it("Should returns 200 as response - POST", async function () {
		const req = {};

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
		await MMAStatements(req, res);

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
		await MMAStatements(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});

