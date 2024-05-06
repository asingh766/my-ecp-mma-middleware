/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.Offers = (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
		res.set("Access-Control-Allow-Headers", "*");
		res.set("Access-Control-Max-Age", "3600");
		res.status(204).send("");
	} else {
		let message = {
		ResponseType: "success",
		ReasonCode: 5,
		TotalOffers: 4,
		Offers: [
			{
			CustomerOfferId: 434,
			OfferId: "offer2",
			LocationId: 66,
			StartDate: "05/05/2024",
			EndDate: "12/06/2024",
			OfferOrder: 99,
			OfferAvailability: 345,
			OfferTitle: "Good Friday Offer",
			OfferTagLine: "ExcitingOffer",
			},
		],
		};
		res.status(200).send(message);
	}
};
