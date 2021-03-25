export const createSafePage = {
  form: "form[data-testid='create-safe-form']",
  safe_name_field: "input[data-testid='create-safe-name-field']",
  step_two: "p[data-testid='create-safe-step-two']",
  owner_row: "div[data-testid='create-safe-owner-row']",
  owner_name_field: (index = 0) => `input[data-testid='create-safe-owner-name-field-${index}']`,
  address_field: (index = 0) => `input[data-testid='create-safe-address-field-${index}']`,
  valid_address: (index = 0) => `svg[data-testid='valid-address-${index}']`,
  add_owner_btn: "button[data-testid='add-owner-btn']",
  threshold_select_input: "div[data-testid='threshold-select-input']",
  select_input: (index = 1) => `li[data-testid='input-${index}']`,
  req_conf_limit: (validOwners = 1) => `p[data-testid='create-safe-req-conf-${validOwners}']`,
  step_three: "p[data-testid='create-safe-step-three']",
  review_safe_name: "p[data-testid='create-safe-review-name']",
  review_req_conf: (ownerAmount = 1) => `p[data-testid='create-safe-review-req-owners-${ownerAmount}']`,
  review_owner_name: (index = 0) => `p[data-testid='create-safe-owner-name-${index}']`,
  review_owner_address: (index = 0) => `p[data-testid='create-safe-owner-address-${index}']`,
  safe_creation_proccess_title: "h2['safe-creation-process-title']",
  back_btn: "button[data-testid='safe-creation-back-btn']",
  continue_btn: "button[data-testid='continue-btn']",
  submit_btn: "button[type='submit']",
  etherscan_link: "a[data-testid='safe-create-explorer-link']",
}