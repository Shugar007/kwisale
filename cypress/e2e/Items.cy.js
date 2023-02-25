/*import{ items, login, homepage, sidebarMenu} from "../fixtures/selectors";
// const access = require("./Login");
const access = require("./validLogin");

describe("Items Page",function(){
    beforeEach(function () {
        access.validLogin();
        //cy.get(sidebarMenu.itemsBtn).should('be.visible').click({ force: true })
    })

    it("Verify user can create Basic item",function(){
        cy.contains('Add an item').click()
        cy.get(items.itemNameField).type(items.itemNameText, {force: true})
        cy.get(items.categoryField).select('Food', {force:true})
        // cy.get(items.subcategoryField).select('Chinese', {force:true})
        cy.get(items.itemUnitField).select('Items', {force: true})
        cy.get(items.salesChannelField).click({force: true}).trigger('keydown', {key : 'Enter'})
        cy.get(items.salesChannel).click({force: true})
        cy.get(items.itemDescriptionField).type(items.itemDescriptionText, {force: true})
        cy.get(items.sellingPriceField).type(items.sellingPriceText, {force: true})
        cy.get(items.costPriceField).type(items.costPriceText, {force: true})
        cy.get(items.inventoryCheckbox).click({force: true})
        cy.get(items.inventoryLowstock).click({force: true})
        cy.get(items.skuField).type(items.skuText, {force:true})
        cy.get(items.barcodeField).type(items.barcodeText, {force:true})
        cy.get(items.inStockField).type(items.inStockText, {force:true})
        cy.get(items.lowStockField).type(items.lowStockText, {force:true})
        cy.get(items.saveItemBtn).click({force:true}) 
        cy.wait(3000)
        cy.contains('Item was successfully created').should('be.visible')
        cy.contains('Coke').should('be.visible')

    })

    it("Verify that user can create a Variant item",function(){
        cy.contains('Add item').click()
        cy.get(items.itemNameField).type(items.itemNameText2, {force: true})
        cy.get(items.categoryField).select('Food', {force:true})
        cy.get(items.itemUnitField).select('Items', {force: true})
        cy.get(items.salesChannelField).click({force: true})
        cy.get(items.salesChannel).click({force: true})
        cy.get(items.itemDescriptionField).type(items.itemDescriptionText2, {force: true})
        cy.get(items.sellingPriceField).type(items.sellingPriceText, {force: true})
        cy.get(items.costPriceField).type(items.costPriceText, {force: true})
        cy.get(items.inventoryCheckbox).click({force: true})
        cy.get(items.inventoryLowstock).click({force: true})
        cy.get(items.skuField).type(items.skuText, {force:true})
        cy.get(items.barcodeField).type(items.barcodeText, {force:true})
        cy.get(items.inStockField).type(items.inStockText, {force:true})
        cy.get(items.lowStockField).type(items.lowStockText, {force:true})
        cy.get(items.variantAddBtn).click({force: true})
        cy.get(items.optionName).first().type(items.optionNameTxt, {force:true})
        cy.get(items.optionValue).type(items.optionValueTxt, {force:true})
        cy.get(items.addAnotherValueBtn).click({force: true})
        cy.get(items.optionValue).last().type(items.optionValueTxt2, {force:true})
        cy.get(items.varSaveBtn).click({force:true}) 
        cy.contains('All possible variations are populated, please proceed to edit them').should('be.visible')
        cy.get(items.saveItemBtn).click({force:true}) 
        cy.wait(3000)
        cy.contains('Item was successfully created').should('be.visible')
        cy.contains('Fish').should('be.visible')

    })

    it("Verify user can create a composite item",function(){
        cy.contains('Add item').click()
        cy.get(items.itemNameField).type(items.itemNameText3, {force: true})
        cy.get(items.categoryField).select('Food', {force:true})
        // cy.get(items.subcategoryField).select('Chinese', {force:true})
        cy.get(items.itemUnitField).select('Items', {force: true})
        cy.get(items.salesChannelField).click({force: true})
        cy.get(items.salesChannel).click({force: true})
        cy.get(items.itemDescriptionField).type(items.itemDescriptionText3, {force: true})
        cy.get(items.sellingPriceField).type(items.sellingPriceText, {force: true})
        cy.get(items.costPriceField).type(items.costPriceText, {force: true})
        cy.get(items.compositeItemBtn).click({force: true})
        cy.get(items.inventoryLowstock).click({force: true})
        cy.get(items.inventoryLowstock).click({force: true})
        cy.get(items.catfishCheckBox).click({force: true})
        cy.get(items.catfishCheckBox).click({force: true})
        cy.get(items.cokeCheckBox).click({force: true})
        cy.get(items.CompositeDoneBtn).click({force: true})
        cy.get(items.saveItemBtn).click({force:true}) 
        cy.wait(3000)
        cy.contains('Item was successfully created').should('be.visible')
        cy.contains('Coke and Fish').should('be.visible')

    })


    it("Verify that user can create a Category",function(){
        
        cy.get(items.categoriesTab).click()
        cy.get(items.addCategoryBtn).click({force: true})
        cy.get(items.categoryNameField).type(items.categoryNameText, {force: true})
        cy.get(items.categorySaveBtn).click({force:true}) 
        cy.wait(3000)
        cy.contains('Category was created successfully').should('be.visible')
        // cy.contains('Juice').should('be.visible')

    })

    it("Verify that user can create a SubCategory",function(){
    
        cy.get(items.categoriesTab).click()
        cy.get(items.categoryEllipsis).click()
        cy.wait(2000)
        cy.contains('View category').click({force: true})  
        cy.get(items.addSubeCategoryBtn).click({force: true})
        cy.get(items.subcategoryNameField).type(items.subcategoryNameText, {force: true})
        cy.get(items.subcategorySaveBtn).click({force:true}) 
        cy.wait(3000)
        // cy.contains('Category was created successfully').should('be.visible')
        // cy.contains('Italian').should('be.visible')

    })

    it("Verify that user can edit an item",function(){
        
        cy.get(items.actionBtn).click();
        cy.wait(2000)
        cy.contains('Edit item').click({force: true})

        cy.get(items.categoryField).select('Drinks', {force:true})
        cy.get(items.itemDescriptionField).type(items.itemDescriptionText, {force: true})
        cy.get(items.saveItemBtn).click()
        cy.wait(3000)
        cy.contains('Item was edited successfully').should('be.visible')
    })


    it("Verify that user can delete an item",function(){
        
        cy.get(items.actionBtn2).click();
        cy.wait(2000)
        cy.contains('Delete item').click({force: true})
        cy.get('.gqXLfu > .sc-eCssSg > .sc-gKsewC > div > .btn').click({force: true})
        cy.wait(3000)
        cy.contains('Item was deleted successfully').should('be.visible')

    })

    it("Verify that user can upload an item",function(){
        
        cy.get(items.expUploadAction).click()
        cy.contains('Upload item').click({force: true})

        const yourFixturePath = 'sample_items_upload.csv';
        cy.get(items.uploadField).attachFile(yourFixturePath);
        cy.get(items.uploadBtn).click()
        cy.wait(2000)
        // cy.contains('Successfully uploaded!').should('be.visible')
        // cy.get(items.closeBtn).click()

        // cy.reload()
        // cy.wait(3000)
        // cy.contains('Wine').should('be.visible')

    })

    it("Verify that user can export an item",function(){
        cy.get(items.expUploadAction).click()
        cy.contains('Export item').click({force: true})
        cy.get(items.exportBtn).click()
        //cy.contains('Items export is in progress and will be sent to this workspace's email. Please be patient, this may take a few minutes.').should('be.visible')

    })


    it("Verify that user can filter items",function(){
    
        cy.get(items.itemFilterBtn).click()
        cy.get(items.sellingStatusField).click()
        cy.get(items.activeCheckbox).click()
        cy.get(items.sellingStatusField).click()
        cy.get(items.itemTypeDropdwn).click()
        cy.get(items.basicCheckbox).click()
        cy.get(items.applyFilterBtn).click()
        cy.wait(3000)
        // cy.contains('Wine').should('be.visible')
        // cy.contains('Coke').should('be.visible')
    })

    it("Verify that user can search for an item",function(){
        
        cy.get(items.itemSearchBox).type(items.searchTxt, {force: true});
        cy.wait(3000)
        cy.contains('Coke').should('be.visible')

    })

    it("Verify that user can add discount",function(){
        cy.get(items.discountTab).click()
        cy.get(items.addDiscountBtn).click()
        cy.get(items.discountDescField).type(items.discountDescTxt, {force: true});
        cy.get(items.salesChanneldropDwn).click({force: true})
        cy.contains('Select All').click()
        cy.get(items.disountPerCheckBox).click()
        cy.get(items.discountperField).type(items.discountperTxt, {force: true});
        cy.get(items.applytoAlllItems).click({force: true})
        cy.get(items.saveDisountBtn).click()
        cy.wait(3000)
        cy.contains('Discount was created successfully').should('be.visible')

    })

    it("Verify that user add tax",function(){
        
        cy.get(items.taxTab).click()
        cy.get(items.addTaxBtn).click()
        cy.get(items.taxDescField).type(items.taxDescTxt, {force: true});
        cy.get(items.salesChanneldropDwn).click({force: true})
        cy.contains('Select All').click()
        cy.get(items.taxPerField).type(items.taxPerTxt, {force: true});
        cy.get(items.taXActiveBox).click({force: true})
        cy.get(items.saveTaxBtn).click()
        cy.wait(3000)
        cy.contains('Tax was created successfully').should('be.visible')



    })
})*/