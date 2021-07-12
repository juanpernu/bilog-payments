import { formatPricing } from "../utils";

const contentType = "application/json";

export const savePrice = async (pricing) => {
  const body = formatPricing(pricing);
  const res = await fetch("/api/pricing", {
    method: "POST",
    body: JSON.stringify(body),
    mode: "cors",
    headers: {
      Accept: contentType,
      "Content-Type": contentType,
    },
  });

  // Throw error with status code in case Fetch API req failed
  if (!res.ok) {
    throw new Error(res.status);
  }

  const { data } = await res.json();
  return data;
};
