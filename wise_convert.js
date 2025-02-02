/**
 * Fetch real-time exchange rates from Wise.
 * @param {string} currency - Currency pair (e.g., "eur_brl" or "brl_eur").
 * @returns {number} The current exchange rate.
 * @license MIT
 */
function wise_convert(currency) {
  const urlMap = {
    eur_brl: "https://wise.com/br/currency-converter/eur-to-brl-rate",
    brl_eur: "https://wise.com/br/currency-converter/brl-to-eur-rate",
  };

  if (!urlMap[currency]) {
    throw new Error("Invalid currency type. Use 'eur_brl' or 'brl_eur'.");
  }

  try {
    const html = UrlFetchApp.fetch(urlMap[currency]).getContentText();
    const regex = /<span[^>]*class="text-success"[^>]*>([\d,.]+)<\/span>/;
    const match = html.match(regex);

    return match ? parseFloat(match[1].replace(",", ".")) : 0;
  } catch (e) {
    return 0; // Return 0 if there is an error
  }
}
