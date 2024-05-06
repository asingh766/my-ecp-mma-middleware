import { expect } from "chai";
import { Logout } from "../src/Logout/index.js";

describe("Logout Unit Test", function () {
	it("If Response is 200", async function () {
		const req = { method: "POST" };
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
		await Logout(req, res);

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
		await Logout(req, res);

		// Assert
		expect(statusCode).to.equal(204);
	});
});
