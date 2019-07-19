$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/java/features/AddCustomer.feature");
formatter.feature({
  "name": "To test add customer functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To test the generate customer id functionality",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@us1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the valid customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "test"
      ]
    },
    {
      "cells": [
        "lastName",
        "selenium"
      ]
    },
    {
      "cells": [
        "emailAddress",
        "test@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phNo",
        "7894561230"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_fill_in_the_valid_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the customer id generated",
  "keyword": "Then "
});
formatter.match({
  "location": "AccessPagesteps.the_user_should_see_the_customer_id_generated()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the generate customer id functionality2",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the invalid customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "test"
      ]
    },
    {
      "cells": [
        "lastName",
        "selenium"
      ]
    },
    {
      "cells": [
        "emailAddress",
        "testgmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phNo",
        "7894561230"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_fill_in_the_invalid_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_click_the_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the error message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_should_see_the_error_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the generate customer id functionality3",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user is not fill in the customer phone number",
  "rows": [
    {
      "cells": [
        "firstName",
        "test"
      ]
    },
    {
      "cells": [
        "lastName",
        "selenium"
      ]
    },
    {
      "cells": [
        "emailAddress",
        "test@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phNo",
        ""
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_is_not_fill_in_the_customer_phone_number(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click  submit button",
  "keyword": "And "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_click_submit_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the popup message",
  "keyword": "Then "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_should_see_the_popup_message()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "To test the generate customer id functionality4",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "the user is in add customer page",
  "keyword": "Given "
});
formatter.match({
  "location": "HomePageSteps.the_user_is_in_add_customer_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "The user fill in the valid customer details",
  "rows": [
    {
      "cells": [
        "firstName",
        "test"
      ]
    },
    {
      "cells": [
        "lastName",
        "selenium"
      ]
    },
    {
      "cells": [
        "emailAddress",
        "test@gmail.com"
      ]
    },
    {
      "cells": [
        "address",
        "chennai"
      ]
    },
    {
      "cells": [
        "phNo",
        "7894561230"
      ]
    }
  ],
  "keyword": "When "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_fill_in_the_valid_customer_details(DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user click the reset button",
  "keyword": "And "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_click_the_reset_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user should see the empty fields",
  "keyword": "Then "
});
formatter.match({
  "location": "AddcustomerpageSteps.the_user_should_see_the_empty_fields()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});