
export const locators = {
  usernameInput: '#email',
  signInPasswordInput: '#password',
  eyeIcon: '.toggle-switch > svg',
  signInButton: 'form > .btn',
  usernameText: ':nth-child(1) > .clearfix',
  passwordText: ':nth-child(2) > .clearfix',
  googleSignBtn:'.abcRioButtonContentWrapper'
}

export const signUp = {
  //personal detail sign up
  createAccount:'.btn--secondary',
  headingCheck:'.step-one-header',
  firstNameInput:'[data-testid=firstname]',
  firstNameText:'Onams',
  lastNameInput:'[data-testid=lastname]',
  lastNameText:'Test',
  emailInput:'[data-testid=email]',
  emailText:'onamina@yopmail.com',
  passwordInput:'[data-testid=password]',
  passwordText:'password',
  termCondtionCheckbox:'.mr-16',
  boxCheck:'.mr-16',
  continueButton:'form > .btn',
  // workspace creation
  workspaceCheckerText:'Create your workspace',
  businessNameInput:'[data-testid=name]',
  businessNameText:'Onamina store',
  businessPhoneNumberInput:'[data-testid=phone]',
  businessPhoneNumberText:'09086545443',
  businessEmailAddressInput:'[data-testid=email]',
  businessEmailAddressText:'olamina@yopmail.com',
  businessPhysicalAddressInput:'[data-testid=address]',
  businessPhysicalAddressText:'house of  funds',
  businessTypeInput:':nth-child(5) > .form-control',
  businessTypeText:'6102ef34162c844567e3c739',
  donebutton:'.btn'
}

export const login = {
  emailInput: '[data-testid=email]',
  emailText: 'tfagbo@grr.la',
  passwordInput: '[data-testid=password]',
  passwordText: 'Bamikole1@',
  logInButton: 'form > .btn',
  usernameText: ':nth-child(1) > .clearfix',
  googleSignBtn:'.abcRioButtonContentWrapper',
  forgotPassword:'p > a',
  emailField:'.form-control',
  sendLink:'.btn',
  logoutBtn:'.sidenav-footer > .nav > :nth-child(2) > .nav-link',
  errorMessage:'.error',
  forgetPwdLinkMessage:'.auth_form-success-container > div > .mt-32',
  loginWelcomeMsg:'.auth_form-header > .mt-16'
}

export const homepage = {
  homeTextXpath: '.topnav_page-title > p',
  teamsBtn: ':nth-child(7) > .nav-link',
  homeText: 'Home',
  settingBtn:'.sidenav-footer > .nav > :nth-child(1) > .nav-link'
}

export const teams = {
  homeText: 'Home',
  addTeamMember:'.actions > .btn',
  firstNameField:'[data-testid=firstname]',
  lastnameField:'[data-testid=lastname]',
  emailField:'[data-testid=email]',
  phoneNumberField:'[data-testid=phone]',
  chooseRoleBtn:':nth-child(5) > .form-control',
  sendInviteBtn:':nth-child(2) > .btn',
  teamName:'.name',
  editInfo:'.page-modal_nav-buttons > :nth-child(2) > .btn',
  updateBtn:':nth-child(2) > .btn',
  roles:'#react-tabs-22',
  createRoleBtn:'.actions > .btn',
  roleName:'[data-testid=name]',
  fullPermission:':nth-child(2) > .card-check__value',
  saveBtn:'.page-modal_nav-buttons > div > .btn',
  actionMenu:'tbody > :nth-child(1) > .actions > :nth-child(1)',
  cancelXBtn:".page-modal_nav-closebtn > .undefined > use",
}

export const settings = {
settingBtn:'.sidenav-footer > .nav > :nth-child(1) > .nav-link',
myAccount:':nth-child(1) > .settings__container > .settings__desc > .medium-font',
changePasswordHeader:'.cjLXJj > .sc-eCYdqJ > form > .sc-jSMfEi > .medium-font',
changePasswordBtn:'.mt-40 > .btn',
oldPasswordField:'[data-testid="oldPassword"]',
newPasswordField:'[data-testid="newPassword"]',
confirmPassword:'[data-testid="confirmPassword"]',
savePassword:'.sc-gKXOVf > .btn--primary',
firstNameF:'[data-testid="firstname"]',
lastNameF:'[data-testid="lastname"]',
phoneNumberF:'[data-testid="phone"]',
saveBtn:'.page-modal_nav-buttons > :nth-child(2) > .btn',



}
export const channels = {
  onlineStore:'#react-tabs-2',
  socialStore:'#react-tabs-4',
  physicalStore:'#react-tabs-0',
  salesChannel:':nth-child(6) > .nav-link',
  storeHeader:'.topnav_page-title > p',
  addStoreBtn:'.top-search > .btn',
  basicInfo:':nth-child(1) > .pagemodal-title',
  storeName:'[data-testid="name"]',
  physicalAddress:'[data-testid="address"]',
  contactNumber:'[data-testid="phone"]',
  contactEmail:'[data-testid="email"]',
  selectAccess:'.select-access > .select-access_options > .option > .check-ticker > .check-ticker__tick',
  inventoryTick:':nth-child(1) > .card-check__value',
  saveBtn:'.page-modal_nav-buttons > :nth-child(2) > .btn',
  setupBtn:'.sc-papXJ > .btn',
  storeTittle:'[data-testid="name"]',
  storeUrl:'#url',
  storeHeadline:'[data-testid="headline"]',
  storeDescription:'[data-testid="description"]',
  useasLogo:'.check-ticker__tick',
  chooselayout:':nth-child(1) > .card-check__value',
  phoneNumber:'[data-testid="phone"]',
  supportEmail:'[data-testid="email"]',
  physicalAddress2:'[data-testid="address"]',
  continueBtn:'.page-modal_nav-buttons > div > .btn',
  items:'#react-tabs-8',
  infoTittle:':nth-child(3) > [data-testid="name"]',
  shoesHeadline:'[data-testid="headline"]',
  headlineChecker:'.check-ticker__tick',
  storeDes:'[data-testid="description"]',
  storeLayout:':nth-child(1) > .card-check__value',
  UpdatecustomizeBtn:'.pagemodal-form-body > .btn',
  activationToogle:'.slider',
  deactivationToogle:'.slider',
  editSales:'.dropdown-toggle > .undefined',
  cancelXBtn:".page-modal_nav-closebtn > .undefined > use",




}

export const orders = {
  orderSideBar: ':nth-child(3) > .nav-link',
  searchBar: '.top-search > .form-group > .form-control',
  makeASale: '.orders__card--btn > .orders__card--content',
  exportOrders: '[style="background-color: rgb(245, 245, 247); padding: 8px 24px; display: flex; border-radius: 7px; cursor: pointer; margin-right: 20px;"]',
  filterBtn: '[style="background-color: rgb(245, 245, 247); padding: 8px 24px; display: flex; border-radius: 7px; cursor: pointer;"]',
  searchValue: " Nike shoe",
  filterField: ':nth-child(1) > .p-16 > :nth-child(1) > :nth-child(2) > .sc-idiyUo > .sc-dIouRR',
  statusOption: ':nth-child(3) > .mr-8',
  applyFilter: '.sc-fEOsli',
  confirmExport: '[data-testid="confirm-export-order-button"]',  
}
export const transaction ={
  transactionSideBar: '.sidenav-main > .nav > :nth-child(2) > .nav-link',
  transactionHeadbar:'.topnav_page-title > p',
  filterTransaction: '[style="background-color: rgb(245, 245, 247); padding: 8px 24px; display: flex; border-radius: 7px; cursor: pointer;"]',
  dateField: '.sc-hHLeRK',
  onDateOption: '.sc-fLlhyt > :nth-child(1)',
  dateCalender: '#start-date-input',
  selectStatusField: ':nth-child(2) > .p-16 > .mb-16 > :nth-child(2) > .sc-idiyUo > .sc-dIouRR',
  successfulTransaction: ':nth-child(2) > .mr-8',
  resetFilter: '.sc-fnykZs',
  applyFilter: '.sc-fEOsli'
}
export const makeASale ={
  makeASaleBtn: '.home__card--blue > .home__card__content',
  salesChannelDrpdwn: '[data-testid="sales-channel-dropdown"] > .btn',
  salesChannel: '#page-modal > div.page-modal_body.makesale > div > div.makesale_mode-section > div.makesale_section-nav > div > div > div.dropdown-item.dropdown-item-selected.dropdown-item-disabled',
  quickMode: '.makesale_section-nav > .mode-btn', 
  searchBar: '.itemmode_itemlisting > .form-group > .form-control',
  addCustomer: '[data-testid="add-customer-button"]',
  selectCustomer: '[data-testid="add-customer-button"]',
  doneAddCustomer: '.cjLXJj > .sc-eCYdqJ > form > .sc-jSMfEi > .modal-container-button > .btn',
  clearCart: '.left-btn > .co-danger',
  optionMenu: ':nth-child(3) > .dropdown-toggle > .btn',
  itemlistSelect: '.itemlist > :nth-child(1)',
  addItemBtn: '[data-testid="plus-button"]',
  doneAddItemBtn: '.sc-eCYdqJ > .sc-jSMfEi > .modal-container-button > .btn',
  clearCartBtn: '[data-testid="clear-order-button"]',
  saveOrder: '[data-testid="save-order-button"]',
  cutomLabelField: '.cjLXJj > .sc-eCYdqJ > .sc-iBkjds > .saveorder-form > .pos-r > .form-group > #label',
  confirmSaveOdrerBtn: '.cjLXJj > .sc-eCYdqJ > .sc-gKXOVf > :nth-child(2) > .btn',
  placeOrder: '[data-testid="place-order-button"]',
  deliveryOption: '.payments-modal > .dining-options > .modal_select-list > :nth-child(3) > .rounded-check > .check-ticker > .check-ticker__tick',
  confirmOrder: '.cjLXJj > .sc-eCYdqJ > form > .sc-jSMfEi > .modal-container-button > .btn',
  chargeBtn: '[data-testid="charge-button"]',
  sendBillToCUstomer: '.payment-options > :nth-child(1) > .modal_select-list > li',
  customerForBill: '.sc-iBkjds > .modal_select-list > li > .rounded-check > .check-ticker > .check-ticker__tick',
  doneCustomerBill: ':nth-child(27) > .sc-eCYdqJ > form > .sc-jSMfEi > .modal-container-button > .btn',
  cancelAddCustomer: '.cjLXJj > .sc-eCYdqJ > form > .sc-jSMfEi > .closebtn > .undefined > use',
  doneChargeCustomer: '.cjLXJj > .sc-eCYdqJ > form > .sc-jSMfEi > .modal-container-button > .btn',
  itemSearchValue: "Nike Shoe",
  itemMode: '.makesale_section-nav > .mode-btn',
  addItem: '.itemlist > :nth-child(2)',
  itemQuantity: '.counter-group > .btn--primary',
  doneBtn: '.sc-eCYdqJ > .sc-jSMfEi > .modal-container-button > .btn'

}
export const reports={
  reportSideBar:':nth-child(8) > .nav-link',
  customer:'#react-tabs-8',
  teams:'#react-tabs-6',
  channel:'#react-tabs-4',
  item:'#react-tabs-2',
  sales:'#react-tabs-0',
  dateDropdown:':nth-child(1) > .dropdown-toggle > .btn',
  period:':nth-child(3) > .d-flx-space',
  period2:':nth-child(4) > .d-flx-space',
  exportTeamsBtn:'.reports__subtabsection--btn > .btn--primary',
  exportbtn:'[data-testid="btn"]',
  reportHeader:'.topnav_page-title > p',

  }

export const user = {
  userNgtBtn: ':nth-child(3) > :nth-child(1) > .nerve-menu--heading',

  preferredUsernameText:"Taiye"
}

export const menu={
menuMgtBtn:':nth-child(3) > :nth-child(4) > .nerve-menu--heading',
roleDescription:'Head Of Department'
}
export const customers={
  customerSideBar:":nth-child(4) > .nav-link",
  customerHeading:'.topnav_page-title > p',
  addCustomerBtn:".actions > .btn--primary",
  firstNameField:"[data-testid=\"firstname\"]",
  lastNameField:"[data-testid=\"lastname\"]",
  emailField:"[data-testid=\"email\"]",
  phoneNoField:"[data-testid=\"phone\"]",
  resAddressField:"[data-testid=\"address\"]",
  saveCustomerBtn:":nth-child(2) > .btn",
  closeBtn:".page-modal_nav-closebtn > .undefined > use",
  actionEllipsisBtn:".dropdown-toggle > .undefined > use",
  editBtn:".dropdown-menu > :nth-child(3)",
  deleteCustomerBtn:".dropdown-menu > :nth-child(5)",
  searchBar:".top-search > .form-group > .form-control",
  groupsBtn:"#react-tabs-22",
  createGroupBtn:".actions > .btn",
  groupNameField:".sc-eCYdqJ > .sc-iBkjds > .form-group > [data-testid=\"name\"]",
  saveGroupBtn:".cjLXJj > .sc-eCYdqJ > .sc-gKXOVf > :nth-child(2) > .btn",
  cancelXBtn:".cjLXJj > .sc-eCYdqJ > .sc-jSMfEi > .closebtn > .undefined > use",
  groupSearchBar:".top-search > .form-group > .form-control",
  customerListBtn:"#react-tabs-20",
  addToGrpBtn:".dropdown-menu > :nth-child(2)",
  newGrpBtn:".a-i-c > .btn",
  saveBtn:".cjLXJj > .sc-eCYdqJ > .sc-gKXOVf > :nth-child(2) > .btn",
  cancelCustomerBtn:".cjLXJj > .sc-eCYdqJ > .sc-gKXOVf > :nth-child(1) > .btn",
}

