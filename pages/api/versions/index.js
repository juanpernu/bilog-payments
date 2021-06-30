import Content from "../../../content/versions";

export default async function handler(req, res) {
  const { method, query } = req;

  switch (method) {
    case "GET":
      const { version } = query;
      const content = Content[version] ?? Content["default"];
      return res.status(200).json({ success: true, data: content });
    default:
      res.status(400).json({ success: false });
      break;
  }
}
