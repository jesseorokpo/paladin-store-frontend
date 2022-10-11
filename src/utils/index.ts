import { showNotification } from "@mantine/notifications";
import { AxiosError } from "axios";

let currencyFormatter = require("currency-formatter");

export function formatCurrency(val: number) {
  return currencyFormatter.format(val, { code: "NGN" });
}

export function handleAxiosError(err: any) {
  let error: AxiosError = err as AxiosError;
  console.log(err);
  console.log(error.response);
  return "Message";
}
