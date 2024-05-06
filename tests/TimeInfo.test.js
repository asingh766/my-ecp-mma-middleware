import { expect } from "chai";
import nock from "nock";
import { TimeInfos } from "../src/TimeInfos/index.js"

describe("TimeInfos Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = { method: 'GET' };
    
        //mock data
        const responseData = {
            Text: "test",
            Value: "test"
        };
    
        //nock .get .reply
        nock(`${process.env.baseUrl}`)
            .get(`/times`)
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
        await TimeInfos(req, res);
    
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
        await TimeInfos(req, res);
    
        // Assert
        expect(statusCode).to.equal(204);
    });
});