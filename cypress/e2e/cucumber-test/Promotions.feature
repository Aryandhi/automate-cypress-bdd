Feature: Promotion Page
  User want verify Label Promotion and List product of PWP Label
  @Promotion
  Scenario: User want verify Label Promotion
    Given User on Promotions page
    And Visible Label PWP, Weekly Deals, Digital Club Exclusive
    When User choose Any Tag
    Then User Choose PWP Tag and visible product has PWP Label

  @PromotionNegative
  Scenario: User want verify label PWP on List product of Support Local Tag
    When User Choose Support Local tag
    Then User not visible PWP label in List product