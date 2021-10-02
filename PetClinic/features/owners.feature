Feature: Owners


    Scenario: Owners page accessible from header menu
        Given I'm located on "any" page
        When I click "owners" button in the header
        And I click "All" button
        Then I am navigated to owners page

    Scenario: I create new owner
        Given I'm located on "any" page
        When I click "Owners" button in the header
        And I click "Add new" button
        And Fill in the fields with the folloging values
            | John      |
            | Doe       |
            | Address   |
            | City      |
            | 123456789 |
        And Click "Add Owner"
        Then New owner gets created

    Scenario: I update owner
        Given An owner with the following info exists
            | John      |
            | Doe       |
            | Address   |
            | City      |
            | 123456789 |
        And I'm located on "Edit owner" page
        When Fill in new values:
            | First Name | Last Name |
            | Johnatan   | Doephwel  |
        And Click "Update Owner"
        Then I'm redirected to "The Owner details" page
        And I see updated values

    Scenario: I cancel editing of an owner
        Given An owner with the following info exists
            | John      |
            | Doe       |
            | Address   |
            | City      |
            | 123456789 |
        And I'm located on "Edit owner" page
        When Fill in new values:
            | First Name | Last Name |
            | Johnatan   | Doephel   |
        And Click "Update Owner"
        Then I'm redirected to "The Owner details" page
        And I see that values haven't changed

    Scenario Outline: I see error when enter invalid values during Owner editing
        Given An owner exists
        And I'm located on "Edit owner" page
        When Type <Value> value into the <Field> field
        Then I see <Error> error
        And I can't click "Update Owner" button

        Examples:
            | Field      | Value    | Error                                         |
            | First Name |          | First name is required                        |
            | First Name | J        | First name must be at least 2 characters long |
            | Telephone  |          | Phone number is required                      |
            | Telephone  | 1234b245 | Phone number only accept digits               |