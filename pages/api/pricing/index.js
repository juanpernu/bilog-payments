export default async function handler(req, res) {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const { body } = req;
        res.status(200).json({ success: true, data: body });
      } catch (error) {
        res.status(400).json({ success: false });
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
