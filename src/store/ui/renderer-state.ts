import { makeAutoObservable, runInAction } from "mobx";



class RenderCustomerAccountsGlobalStatesManager {
    expandedEntryId: string = "";
    constructor() {
        makeAutoObservable(this);
    }

    expandEntry(id: string) {
        runInAction(() => {
            if (this.expandedEntryId == id) { this.expandedEntryId = ""; return; }
            this.expandedEntryId = id;
        })
    }

}


export const renderCustomerAccountsGlobalStatesManager = new RenderCustomerAccountsGlobalStatesManager();