export const sels = {
  xpSelectors: {
    load_safe: {
      form_title: "//h2[contains(text(),'Add existing Safe')]", // done, load-safe-form
      name_input: "//input[@name='name']", // done
      address_input: "//input[@name='address']", // done
      valid_safe_name: "//p[contains(text(),'Safe name')]", // can't name errors
      next_btn: "//span[contains(text(),'Next')]", // cant find it
      second_step_description: "//p[contains(text(),'This Safe has')]", // done
      first_owner_name_input: (index = 0) => `//input[@name='owner${index}Name']`, // done, can't do "first name" but all of them
      required_error_input: "//p[contains(text(),'Required')]", // cant name errors
      review_btn: "//button/span[contains(text(),'Review')]/parent::button", // cant find it
      review_details_title: "//p[contains(text(),'Review details')]", // done
      review_safe_name: "//p[contains(text(),'Name of the Safe')]/following-sibling::p", // done
      review_owner_name: "//p[contains(text(),'Safe owners')]/ancestor::div[1]/following-sibling::div[2]//p", // done
      load_btn: "//button/span[contains(text(),'Load')]", // cant find it
    },
    testIdSelectors: {
      asset_tab: {
        balance_value: (symbol = '') => `div[data-testid='balance-${symbol.toUpperCase()}']`,
      }
    },
    safe_hub: {
      send_btn: "//span[contains(text(),'Send')]/ancestor::button", // this is the first of many buttons. I'm expecting to be clicked first
      send_funds_btn: "//span[contains(text(),'Send funds')]/ancestor::button",
      safe_address: '//div[1]/div[2]/div[2]/p',
      confirm_btn: "//span[contains(text(),'Confirm')]/parent::button",
      latest_tx: '//tbody/tr[1]',
      awaiting_your_confirmation: "//p[contains(text(),'Needs your confirmation')]/parent::div",
      needs_confirmations: "//p[contains(text(),'Needs confirmations')]/parent::div",
      approve_tx_btn: "//span[contains(text(),'Approve Transaction')]/parent::button",
      execute_btn: "//span[contains(text(),'Execute')]/ancestor::button", // button in the Tx expanded
      execute_tx_btn: "//span[contains(text(),'Execute Transaction')]/ancestor::button", // button in the modal for execution
      confirmed_counter: (owners) => `//div[contains(text(),'Confirmed [${owners}/3]')]`,
      rejected_counter: (owners) => `//div[contains(text(),'Rejected [${owners}/3]')]`,
      executor_tag: "//div[contains(text(),'Executor')]",
      executor_hash: "//div[contains(text(),'Executor')]/parent::div//span",
      connected_account_hash: '//div[2]/p[2]',
      balance_ETH: "//p[contains(text(),'Ether')]/ancestor::tr[@data-testid='balance-row']//td[2]/div",
      reject_btn: "//span[contains(text(),'Reject')]/parent::button",
      reject_tx_btn: "//span[contains(text(),'Reject Transaction')]/parent::button",
      execute_reject_tx_btn: "//span[contains(text(),'Execute Transaction Rejection')]/parent::button",
      assets_tab: "//span[contains(text(),'Assets')]/ancestor::button",
      top_tx_cancelled_label: "//tr[1]//p[contains(text(),'Cancelled')]/parent::div"
    },
    setting_owners: {
      settings_tab: "//span[contains(text(),'Settings')]/ancestor::a",
      owners_tab: "//div[contains(text(),'Owners')]",
      owner_amount: '//div[5]//div[3]/p',
      owner_table: '//table/tbody/tr', // to apply .lengnth and know the amount of owners
      owner_name: (name) => `//td[contains(text(),'${name}')]`,
      owner_table_row: (index = 1) => `//table/tbody/tr[${index}]`, // getting a specific row
      owner_row_options: (address, option = 1) => `//p[contains(text(),'${address}')]/ancestor::td/following-sibling::td//img[${option}]`, // 1 = edit, 2 = replace, 3 = delete
      owner_table_row_address: (address) => `//td//p[contains(text(),'${address}')]`, // find owner row by address
      owner_table_row_name: (name) => `//tr[5]/td[contains(text(),'${name}')]`, // find owner row by name
      add_new_owner_btn: "//span[contains(text(),'Add new owner')]/parent::button",
      // 1st step
      add_new_owner_title: "//p[contains(text(),'Add new owner')]", // to assert the form opened
      owner_name_input: "//input[@data-testid='add-owner-name-input']",
      owner_address_input: "//input[@data-testid='add-owner-address-testid']",
      next_btn: "//span[contains(text(),'Next')]/parent::button", // submit button to add new owners
      // 2nd step
      req_conf: '//form/div[1]/div[3]/div[1]/div',
      owner_selector: '//div[3]/div[3]/ul/li', // .length should be the amount of owners there will be after the Tx approval
      owner_selector_option: (index = 1) => `//ul/li[contains(text(),'${index}')]`, // specific options
      owner_limit: '//div[3]/div[2]/p', // this is the full message, getNumberInString has to be used to get the number
      review_btn: "//span[contains(text(),'Review')]/parent::button",
      // 3rd step
      req_conf_verif: '//div[3]/p[2]', // verifying the new req conf set
      new_owner_section: "//p[contains(text(),'ADDING NEW OWNER')]", // for assertion
      new_owner_name: (name) => `//p[contains(text(),'${name}')]`, // for assertion of the name
      new_owner_address: (address) => `//p[contains(text(),'${address}')]`, // for assertion of the name
      submit_btn: "//span[contains(text(),'Submit')]/parent::button",
      executor_tag: "//div[contains(text(),'Executor')]", // wait for the executor tag before keep going
      // edit owner name form
      edit_name_input: '//form/div[1]/div[1]/div/div/input',
      save_btn: "//span[contains(text(),'Save')]/parent::button",
      // Delete owner modal
      to_be_deleted_address: (address) => `//div[2]/div[2]/div/div/p[contains(text(),'${address}')]`,
      removing_owner_title: "//p[contains(text(),'REMOVING OWNER')]",
      // review deletion
      pending_status: "//p[contains(text(),'Pending')]/ancestor::tr",
      remove_owner_title: "//b[contains(text(),'Remove owner:')]",
      removed_owner_name: (name) => `//div[contains(text(),'${name}')]`,
      removed_owner_address: (address) => `//span[contains(text(),'${address}')]`,
      changed_req_conf_title: "//b[contains(text(),'Change required confirmations:')]",
      new_changed_req_conf: "//b[contains(text(),'Change required confirmations:')]/following-sibling::p[contains(text(),'3')]",
    },
    replace_owner: {
      replace_owner_title: "//p[contains(text(),'Replace owner')]", // for assertion
      // 1st step of Replace owner
      onwer_replaced_address: (address) => `//form//p[contains(text(),'${address}')]`, // address of current owner
      owner_name_input: "//input[@data-testid='replace-owner-name-input']",
      owner_address_input: "//input[@data-testid='replace-owner-address-testid']",
      // 2nd step of replace owner
      removing_owner_title: "//p[contains(text(),'REMOVING OWNER')]",
      new_owner_section: "//p[contains(text(),'ADDING NEW OWNER')]", // for assertion
      replaced_owner_address: (address) => `//p[contains(text(),'REMOVING OWNER')]/parent::div/following-sibling::div//p[contains(text(),'${address}')] `,
      owner_for_replacement_name: (name) => `//p[contains(text(),'ADDING NEW OWNER')]/parent::div/following-sibling::div//p[contains(text(),'${name}')]`,
      owner_for_replacement_address: (address) => `//p[contains(text(),'ADDING NEW OWNER')]/parent::div/following-sibling::div//p[contains(text(),'${address}')]`,
      // Tx  validation
      tx_remove_owner_title: "//b[contains(text(),'Remove owner:')]",
      tx_removed_owner_address: (address) => `//b[contains(text(),'Remove owner:')]/parent::div//span[contains(text(),'${address}')]`,
      tx_add_owner_title: "//b[contains(text(),'Add owner:')]",
      tx_add_owner_name: (name) => `//b[contains(text(),'Add owner:')]/parent::div//div[contains(text(),'${name}')]`,
      tx_add_owner_address: (address) => `//b[contains(text(),'Add owner:')]/parent::div//span[contains(text(),'${address}')]`,
    },
  },
  cssSelectors: {
    intercom_close_btn: '.intercom-anchor', // closes the intercom chat
    valid_safe_address: 'div.MuiInputAdornment-positionEnd', // the checkmark when you load a safe and put a valid address hash
    safe_name_heading: "h2[data-testid='safe-name-heading']", // The name of the safe in the main hud
    create_safe_name_input: "input[placeholder='Name of the new Safe']", // the input for the safe's name in the safe creation form
    req_conf_dropdown: "div[data-testid='threshold-select-input']", // req confirmation dropdown for the safe creation form
    req_conf_value_2: "li[data-value='2']", // the 2nd value of the previous dropdown
    review_send_fund_btn_diss: "button[data-testid='review-tx-btn'][disabled]", // send funds review button initially disabled
    review_send_fund_btn: "button[data-testid='review-tx-btn']", // same button as above but enabled
    send_funds_recep: "input[id='free-solo-demo']", // send funds recipient field
    token_field: 'div[id=mui-component-select-token] > li' // selector of tokens in send funds
  },
  testIdSelectors: {
    asset_tab: {
      balance_value: (symbol = '') => `div[data-testid='balance-${symbol.toUpperCase()}']`,
    }
  },
  assertions: {
    wallet_connection: 'RINKEBY',
    load_safe_title: 'Add existing Safe',
    valid_safe_name_field: 'Safe name',
    second_step_load_safe: 'This Safe has'
  },
  errorMsg: {
    error: (msg) => `//p[contains(text(),"${msg}")]`,
    required: 'Required',
    greater_than_0: 'Should be greater than 0',
    valid_ENS_name: 'Must be a valid address, ENS or Unstoppable domain',
    duplicated_address: 'Address already introduced',
    not_a_number: 'Must be a number',
    max_amount_tokens: (value = 0) => `Maximum value is ${value}`,
    modify_policy: (value = 0) => `Value should be different than ${value}`,
  }
}
