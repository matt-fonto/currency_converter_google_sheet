# 📌 Conversor de Moeda Wise para Google Sheets

Obtenha facilmente taxas de câmbio em tempo real do Wise e use-as diretamente no Google Sheets. 🚀

### 🔧 Instruções de Instalação

1. Abra seu arquivo do Google Sheets.
2. Clique em Extensões → Apps Script.
3. Cole a seguinte função:

```js
/**
 * Obtém taxas de câmbio em tempo real do Wise.
 * @param {string} currency - Par de moedas (ex.: "eur_brl" ou "brl_eur").
 * @returns {number} A taxa de câmbio atual.
 * @license MIT
 */
function wise_convert(currency) {
  const urlMap = {
    eur_brl: "https://wise.com/br/currency-converter/eur-to-brl-rate",
    brl_eur: "https://wise.com/br/currency-converter/brl-to-eur-rate",
  };

  if (!urlMap[currency]) {
    throw new Error("Tipo de conversão inválido. Use 'eur_brl' ou 'brl_eur'.");
  }

  try {
    const html = UrlFetchApp.fetch(urlMap[currency]).getContentText();
    const regex = /<span[^>]*class="text-success"[^>]*>([\d,.]+)<\/span>/;
    const match = html.match(regex);

    return match ? parseFloat(match[1].replace(",", ".")) : 0;
  } catch (e) {
    return 0; // Retorna 0 em caso de erro
  }
}
```

4. Clique em Salvar 💾 e depois em Executar ▶️ para conceder permissões.
5. Pronto! Agora você pode usar a função no Google Sheets. ✅

### 📈 Como Usar

Use a função em qualquer célula para obter a taxa de câmbio mais recente do Wise:

Converter EUR para BRL:

```excel
=A1 * wise_convert("eur_brl")
```

Converter BRL para EUR:

```excel
=A1 * wise_convert("brl_eur")
```

📌 Dica: Substitua A1 por qualquer valor numérico para multiplicá-lo pela taxa de câmbio atualizada.

### 🌍 Quer Mais Moedas?

Este script é licenciado sob MIT 📝, o que significa que você pode clonar, modificar e adicionar novas moedas!

- Encontre a URL do Wise para o par de moedas desejado (ex.: usd_brl).
- Adicione-a ao urlMap dentro do código:

```js
usd_brl: "https://wise.com/br/currency-converter/usd-to-brl-rate",
```

- Use no Google Sheets:

```excel
=wise_convert("usd_brl")
```

### 🔗 Licença

Este projeto está licenciado sob a MIT License, permitindo que você o modifique e distribua livremente. 🎉

💡 Sinta-se à vontade para melhorá-lo, compartilhá-lo e contribuir! 🚀
