/**
 * Responds to any HTTP request.
 *
 * @param {!express:Request} req HTTP request context.
 * @param {!express:Response} res HTTP response context.
 */
exports.OfferDetails = (req, res) => {
	res.set("Access-Control-Allow-Origin", "*");
	if (req.method === "OPTIONS") {
		// Send response to OPTIONS requests
		res.set("Access-Control-Allow-Methods", "*");
			res.set("Access-Control-Allow-Headers", "*");
			res.set("Access-Control-Max-Age", "3600");
			res.status(204).send("");
	} else {
		let message = {
		ResponseType: "Success",
		ReasonCode: 456,
		Description: "New Offers only for you, Grab it",
		CustomerOfferId: 342,
		StartDate: "05/05/2024",
		EndDate: "12/06/2024",
		OfferTitle: "Good Friday Offer",
		OfferDescription:
			"Memorable sales slogans and taglines are the earworms of marketing. Learn what makes a great one and how to harness its power to accelerate sales.",
		OfferSummary:
			"Memorable sales slogans and taglines are the earworms of marketing. Learn what makes a great one and how to harness its power to accelerate sales.",
		FullTerms:
			"When it comes to sales, customers value both quality and affordability. This slogan emphasizes the combination of high-quality products or services with affordable prices, making it an attractive proposition for potential customers.",
		};
		res.status(200).send(message);
	}
};
