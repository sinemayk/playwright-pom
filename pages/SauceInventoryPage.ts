import { Locator, Page } from "playwright";

export class SauceInventoryPage{
    
    private readonly page:Page;
    readonly inventoryItems: Locator;

    constructor(page:Page){
        this.page = page;
        this.inventoryItems = page.locator(".inventory_item");
    }

    async getInventoryItemsCount(){
        return await this.inventoryItems.count();
    }
}