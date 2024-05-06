import { expect } from "chai";
import nock from "nock";
import { ResetSecurityQuestion } from "../src/ResetSecurityQuestion/index.js"

describe("Reset Security Question Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = {
            method: 'GET',
            query: {
                token: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
            }
        };

        //mock data
        const responseData = {
            message: "successfully Logged In"
        };

        //nock .get .reply
        nock(`${process.env.baseUrl}`)
            .get(`/reset-security-questions?token=${req.query.token}`)
            .reply(200, responseData);

        let statusCode;
        const res = {
            set: function () { },
            status: function (x) {
                statusCode = x;
                return this;
            },
            send: function () {
            },
        };

        // invoke the function
        await ResetSecurityQuestion(req, res);

        // Assert
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
            send: function (x) {
            },
        };

        // invoke the function
        await ResetSecurityQuestion(req, res);

        // Assert
        expect(statusCode).to.equal(204);
    });
});