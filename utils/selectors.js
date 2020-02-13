export const sels = {
    XpSelectors: {
        homepage:{
            home_button: "//div/a/img",
            connect_button: "//span[contains(text(),'Connect')]",
            metamask_option: "//div[contains(text(),'MetaMask')]", 
            accept_cookies : "//span[contains(text(),'Accept All')]",
            loggedin_status: "//p[contains(text(),'metamask [RINKEBY]')]",
            safes_counter: "//div[contains(text(),'Safes')]/p",
            load_safe_button : "//div[contains(text(),'Load existing Safe')]",
            create_safe_button: "//div[contains(text(),'Create new Safe')]"
        },  
        load_safe:{
            form_title: "//h2[contains(text(),'Load existing Safe')]",
            name_input: "//input[@name='name']",
            address_input: "//input[@name='address']",
            valid_safe_name: "//p[contains(text(),'Safe name')]",
            next_button: "//span[contains(text(),'Next')]",
            second_step_description: "//p[contains(text(),'This Safe has')]",
            first_owner_name_input: (index = 0) => `//input[@name='owner${index}Name']`,
            required_error_input: "//p[contains(text(),'Required')]",
            review_button: "//button/span[contains(text(),'Review')]",
            review_details_title: "//p[contains(text(),'Review details')]",
            review_safe_name: "//p[contains(text(),'Name of the Safe')]/following-sibling::p",
            review_owner_name: "//p[contains(text(),'Safe owners')]/ancestor::div[1]/following-sibling::div[2]//p",
            load_button: "//button/span[contains(text(),'Load')]",
        },
        create_safe:{
            start_button: "//button/span[contains(text(),'Start')]",
            required_error_input: "//p[contains(text(),'Required')]",
            first_owner_name_input: "//input[@name='owner0Name']",
            first_owner_address_input: "//input[@name='owner0Address']",
            second_owner_name_input: "//input[@name='owner1Name']",
            second_owner_address_input: "//input[@name='owner1Address']",
            add_owner: "//p[contains(text(),'Add another owner')]",
            req_conf_info_text : "//p[contains(text(),'out of')]",
            review_button: "//button/span[contains(text(),'Review')]/ancestor::button",
            submit_button: "//button/span[contains(text(),'Submit')]/ancestor::button"
        }
    },
    CssSelectors: {
        mm_home: "div.app-header",
        mm_already_imported: "span.error",
        mm_confirm_button : "button.btn-confirm",
        mm_private_key_input : "#private-key-box",
        intercom_close_button: ".intercom-anchor",
        valid_safe_address: "div.MuiInputAdornment-positionEnd",
        safe_name_heading: "h2[data-testid='safe-name-heading']",
        create_safe_name_input : "input[placeholder='Name of the new Safe']",
        req_conf_dropdown: "div[data-testid='threshold-select-input']",
        req_conf_value_2 : "li[data-value='2']"
    },
    wallet: {
        seed: "range smoke crisp install cross shine hold grief ripple cabin sudden special", //it imports the wallet with "acc1" as owner
        password: "password"
    },
    privateKeys : {
        "acc2": "E0334B3F5CA1C4FBB26B3845F295DF12FE65EA052F31A5F800194958DCBDCB04",
        "acc3": "3F23488883EE1A6346641D77ABF6ECDC78B03A0A9233EC6FAD1AB02FFC093CC5",
        "acc4": "471F28E1C41C5FCF89A7BC76072F1A17644AE166F4FEBC31DAE2BAAF0AD8AA06",
    },
    testAccountsHash: {
        "safe1" : "0x9913B9180C20C6b0F21B6480c84422F6ebc4B808", //safe own by acc1 to acc4.
        "acc1" : "0x61a0c717d18232711bC788F19C9Cd56a43cc8872",
        "acc2" : "0x7724b234c9099C205F03b458944942bcEBA13408",
        "acc3" : "0x6E45d69a383CECa3d54688e833Bd0e1388747e6B",
        "acc4" : "0x730F87dA2A3C6721e2196DFB990759e9bdfc5083"
    },
    assertions : {
        wallet_connection : "RINKEBY",
        load_safe_title: "Load existing Safe",
        valid_safe_name_field: 'Safe name', 
        second_step_load_safe: 'This Safe has'
    }, 
    safeNames: {
        load_safe_name: "Autom Load Safe",
        create_safe_name : "Autom Create Safe",
    },
    accountNames : {
        owner_name: "John Carmack",
        owner2_name: "Gabe Newell",
        owner3_name: "Hugo Martin",
        owner4_name: "Hideo Kojima"
    }
}