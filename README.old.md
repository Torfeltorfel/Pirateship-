# DHL Domestic Rate Calculator MVP

Please note down the time you're working on this task. 
We think you shouldn't need to work for more than ~1 day on it. If you think that's not enough, please get in touch with us and we'll discuss whether we can skip some of the acceptance criteria.
It's OK if not everything is perfect, we can discuss those things in our meeting.


**Background**

Imagine Pirate Ship wants to expand to the German market. In that case we'd need to implement a public rate calculator, that offers our potential German users a means to rate their packages and compare options.


**Acceptance Criteria**

* Users are able to rate the following services: `DHL Paket 2 kg`, `DHL Paket 5 kg`, `DHL Paket 10 kg`, `DHL Paket 31,5 kg`, `Päckchen S`, `Päckchen M`
* Only domestic rates (shipping from Germany to Germany) are presented, no international options needed as of now
* Users can enter Weight and Dimensions
* Based on Weight and Dimensions, available services should be shown including a price in Euro
* Relevant restrictions and limits are shown (dimensions, weight, insured value, ...)
* Rates are displayed in Euro
* Weights are entered in KG
* Dimensions are entered in CM

**Technical Details**
* Your code should be committed to this git repository.
* You may choose the technology stack freely, including programming language, frameworks (if any), libraries, etc.
* The frontend must be HTML. It does not need to follow the most bleeding edge design trends, but should show your understanding of CSS.
* You can choose how to implement the requirements technically. The following extra points are for inspiration only, **but not compulsory**. **The main objective is to fulfil the Acceptance Criteria.**  
  * Provide ideas or features that improve UX ("What is the best option to ship my package? What is the cheapest option to ship my package? What is the easiest UX we can think of?") that go beyond the MVP acceptance criteria (either implemented or presented as ideas) 
  * Create form validation that prevents the user from entering senseless inputs. 
  * Create responsive design for mobile layouts, and accessible design for users that require it. 
  * Create a testing strategy, including manual and/or automated tests.* It's fine if the requirements are not completed fully. However, we would like you to be able to talk about all of them.


**References**

* DHL Pricing Paket: https://www.dhl.de/de/privatkunden/pakete-versenden/deutschlandweit-versenden/paket.html
* DHL Pricing Päckchen: https://www.dhl.de/de/privatkunden/pakete-versenden/deutschlandweit-versenden/paeckchen.html
* Existing Pirate Ship Rates Calculator for shipping from US for inspiration: https://www.pirateship.com/rates
