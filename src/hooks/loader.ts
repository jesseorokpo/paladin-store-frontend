import { platformUtilsManager } from "@store/platform/utils";
import { useEffect } from "react";

export function useUtilsLoader() {
  function load() {
    Promise.all([
      platformUtilsManager.loadCategories(),
      platformUtilsManager.loadMarkets(),
      platformUtilsManager.loadStates(),
    ]).then((err) => {
      console.log(err);
    });
  }
  useEffect(() => {
    load();
  }, []);
}
