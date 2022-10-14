import { makeAutoObservable, runInAction } from "mobx";

class UIManager {
  platform: "BRAND" | "MARKET" = "MARKET";
  constructor() {
    makeAutoObservable(this);
  }

  togglePlatform() {
    runInAction(() => {
      let platform = "BRAND";
      if (this.platform == "BRAND") {
        this.platform = "MARKET";
      } else {
        this.platform = "BRAND";
      }
    });

    this.loadPlatformRequirements();
  }

  loadPlatformRequirements() {}
}

export const uiManager = new UIManager();
