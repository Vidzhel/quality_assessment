Feature: Pets

    Scenario: I create new pet
        Given An Owner exists
        And I'm located on "The Owner Detals" page
        When I click "Add New Pet" button
        And Fill in the fields with the folloging values
            | Didi       |
            | 2021/09/15 |
            | cat        |
        And Click "Save Pet"
        Then New pet gets created

    Scenario: I delete a pet
        Given An Owner exists
        And The Onwer has a pet
        And I'm located on "The Owner Detals" page
        When I click "Delete Pet" button
        Then I see the pet disappeared

    Scenario: I update pet
        Given An Owner exists
        And A pet with the following data exists
            | Didi       |
            | 2021/09/15 |
            | cat        |
        And I'm located on "The Owner Detals" page
        When I click "Edit Pet" button
        And Fill in new values:
            | BiBi       |
            | 2020/09/15 |
            | dog        |
        And Click "Update Pet"
        Then I'm redirected to "The Owner details" page
        And I see updated values

    Scenario Outline: I see errors when insert invalid values during a pet edditing
        Given An Owner exists
        And A pet with the following data exists
            | Didi       |
            | 2021/09/15 |
            | cat        |
        And I'm located on "The Owner Detals" page
        When I click "Edit Pet" button
        And Type <Value> into the "Birth Date" field
        And Click "Update Pet"
        Then I see nothing is happening

    Example:
            | Value      |
            | 2021/09/33 |
            | 2023/09/33 |