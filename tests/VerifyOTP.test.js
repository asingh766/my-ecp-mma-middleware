import { expect } from "chai";
import { VerifyOTP } from "../src/2FA/VerifyOTP/index.js";
import nock from "nock";


describe("Verify OTP for Two Factor Authentication", function () {
    it("Should returns 200 as response - POST ", async function () {
        const req = {
            UserId: 5414,
            Otp: "123456",
            EnteredOtp: "123456"
        }
        const responseBody = {
            UserId: 5414,
            UserName: " ericddev",
            FirstName: "Michael",
            LastName: "Hurd",
            MiddleName: "X",
            LastLoginDate: "05: 40 AM CST 03 Apr 2024",
            Token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9uYW1lIjoiZXJpY2RkZXYiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9naXZlbm5hbWUiOiJNSUNIQUVMIEhVUkQiLCJleHAiOjE3MTIxNjMyMzUsImlzcyI6Ik15RUNQIiwiYXVkIjoiTXlFQ1AifQ.Vm0kv9uHdPB2x8gg9rttfz5CFn75637ibki5UoicNZs",
            Expiration: " 2024-04-03T16: 53: 55Z"
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

        nock(`${process.env.baseUrl}`).post('/verify-otp').reply(200, responseBody);

        await VerifyOTP(req, res);

        expect(statusCode).to.equal(200);
    });


    it("Should returns 400 as response - POST", async function () {
        const req = {
            UserId: 5414,
            Otp: "123456",
            EnteredOtp: "123456"
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
        nock(`${process.env.baseUrl}`).post('/verify-otp').reply(400)

        await VerifyOTP(req, res);
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

        nock(`${process.env.baseUrl}`).options('/verify-otp').reply(204);

        // invoke the function
        await VerifyOTP(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });
})