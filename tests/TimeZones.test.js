import { expect } from "chai";
import nock from "nock";
import { TimeZones} from "../src/TimeZones/index.js"

describe("TimeZones Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = { method: 'GET' };
    
        //mock data
        const responseData = {
            Abbreviation: "test",
            DisplayName: "test",
            TimeZoneID: "test"
        };
    
        //nock .get .reply
        nock(`${process.env.baseUrl}`)
            .get(`/timezones`)
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
        await TimeZones(req, res);
    
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
        await TimeZones(req, res);
    
        // Assert
        expect(statusCode).to.equal(204);
    });
});
