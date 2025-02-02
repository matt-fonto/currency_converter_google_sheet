## 📌 Wise Currency Converter for Google Sheets

Easily fetch real-time exchange rates from Wise and use them directly in your Google Sheets. 🚀

### 🔧 Installation Instructions

1. Open your Google Sheets file.
2. Click Extensions → Apps Script.
3. Paste the following function:

```js
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
    return 0; // Return 0 in case of an error
  }
}
```

4. Click Save 💾 and then Run ▶️ the script once to grant permissions.

Done! You can now use the function in Google Sheets. ✅

### 📈 How to Use

Use the function in any cell to get the latest Wise exchange rate:

- Convert EUR to BRL:

```excel
=A1 * wise_convert("eur_brl")
```

- Convert BRL to EUR:

```excel
=A1 * wise_convert("brl_eur")
```

📌 Tip: Replace A1 with any numeric value to multiply it by the latest exchange rate.

### 🌍 Want More Currencies?

This script is MIT licensed 📝, meaning you're free to fork, modify, and add new currencies! Simply:

- Find the Wise URL for the currency pair you need (e.g., usd_brl).
- Add it to the urlMap inside the script:

```js
usd_brl: "https://wise.com/br/currency-converter/usd-to-brl-rate",
```

- Use it in Google Sheets:

```excel
  =wise_convert("usd_brl")
```

### 🔗 License

This project is licensed under the MIT License, allowing you to modify and distribute it freely. 🎉

💡 Feel free to improve it, share it, and contribute! 🚀
