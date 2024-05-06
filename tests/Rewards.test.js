import { expect } from "chai";
import nock from "nock";
import { RewardPoints } from "../src/RewardPoints/index.js"

describe("RewardPoints Unit Test", function () {
    it("Should returns 200 as response - GET", async function () {
        const req = { method: 'GET',
                      query:{
                        userId : '5414',
                        accountNo :'6019450400085430'
                      }};
    
        //mock data
        const responseData = {
            StatementDate: "05/06/2022",
            BeginPoint: 6,
            PointEarned: 10,
            PointDisbursed: 5,
            PointAdjusted: 10,
            PointEnd:1
        };
    
        //nock .get .reply
        nock(`${process.env.baseUrl}`)
            .get(`/users/${req.query.userId}/accounts/${req.query.accountNo}/reward-points`)
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
        await RewardPoints(req, res);
    
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
        await RewardPoints(req, res);
    
        // Assert
        expect(statusCode).to.equal(204);
    });
});