import { NextApiRequest, NextApiResponse } from "next"

export default async function handler(
  request: NextApiRequest,
  res: NextApiResponse
) {
  res.status(200).send("Hello world")
  return
}
