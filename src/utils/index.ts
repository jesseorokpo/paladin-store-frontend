let currencyFormatter = require("currency-formatter");

export function formatCurrency(val: number) {
  return currencyFormatter.format(val, { code: "NGN" });
}
