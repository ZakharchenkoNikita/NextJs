import { MongoClient } from "mongodb";

const handler = async (res, req) => {
  if (req.method === "POST") {
    const data = req.body;

    const client = await MongoClient.connect(
      "mongodb+srv://immortalvelial:lQs1ybKDFoVczv78@cluster0.gvpwdja.mongodb.net/meetups?retryWrites=true&w=majority"
    );
    const db = client.db();

    const meetupsCollection = db.collection("meetups");

    const result = await meetupsCollection.insertOne(data);

    console.log(result);

    client.close();

    // res.status(201).json({ message: "Meetup inserted!" });
  }
};

export default handler;
