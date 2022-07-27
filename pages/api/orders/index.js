import data from "../../../src/resources/data.json";

export default async function handler(req, res) {
  res.json(data);
}
