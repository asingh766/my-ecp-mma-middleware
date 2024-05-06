import { expect } from "chai";
import { SendOTP } from "../src/2FA/SendOTP/index.js";
import nock from "nock";

describe("Send OTP for Two-Factor Authentication", function () {
    it("Should returns 200 as response - POST", async function () {
        const req = {
            UserId: 5414,
            OtpOption: "email"
        }

        const responseBody = {
            Otp: "123456"
        }

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

        //nock .post .reply 
        nock(`${process.env.baseUrl}`).post('/send-otp').reply(200, responseBody)

        await SendOTP(req, res);
        // Assert
        expect(statusCode).to.equal(200);
    });

    it("Should returns 400 as response - POST", async function () {
        const req = {
            OtpOption: "email"
        }

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

        //nock .post .reply 
        nock(`${process.env.baseUrl}`).post('/send-otp').reply(400)

        await SendOTP(req, res);
        // Assert
        expect(statusCode).to.equal(400);
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

        nock(`${process.env.baseUrl}`).options('/send-otp').reply(204);

        // invoke the function
        await SendOTP(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });
})