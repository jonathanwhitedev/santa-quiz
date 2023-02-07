# Santa's Big Christmas Quiz

View my live project here! [Santa's Big Christmas Quiz](https://jonathanwhitedev.github.io/santa-quiz/) 

Santa's Big Christmas Quiz is a interactive website based quiz that is readily available to provide fun Christmas themed quizes for all. Traditionally many office parties and family get togethers incorporate a quiz of some sort, and many have to make there own quiz from scratch, trawlliing the web to find questions and answers. This website aims to fill the gap for a lack of online quizes.

![Responsive Mockup](docs/screenshots/amireponsive-voyager.png)

The following responsive screensizes of my website can also be found here: (https://ui.dev/amiresponsive?url=https://jonathanwhitedev.github.io/voyager/index.html)

## User Stories and UX

- __As a visiting user, I would like Christmas themed quizes readily available.__

As part of the UX specification and planning phase it was noted that there is a lack of Chrismtas themed quizes on the web that are purely Chrismtas driven. The vast majority of those surveyed (100) agreed that there was no simple and fast solution to finding a christmas themed quiz online without spending a long time searching for one and very often eventually finding most sites were long winded, quizes generic and dated, or the questions were either too repetitive and easy. Santa's Big Christmas Quiz aims to fill the gap to being the best source for all christmas quiz content on the web.

- __As a visiting user, I would like free Christmas quizes.__

Over three quarters of those surveyed (100), also came to agreement there were not many quizes online that were free. Many required signing up, and/or applications that wanted money for generated quizes on apps through App Store or Google Play, of which many were very poorly rated. Santa's Big Christmas Quiz will remain free to all and readily available to all who seek it.

- __As a visiting user, I would like something easy to use.__

Another shortfall noted was that many quizes online were extremely spam orientated, with many adverts spilling into the quiz and detracting the user from reading them accurately. Even if some websites had little to no adverts, they were often jumbled and messy, or too full of distracting information that was not clean and easy to use. It was also observed that most users wanted a website that could be read on a mobile or tablet rather then a computer that had easy to read fonts no matter the display used. Almost all that were surveyed in the UX consulation stage agreed there was no one website that provided an easy to use quiz online.

- __As a visiting user, I would like to share my scores.__

Of half of the group surveyed, they agreed it would be useful to be able to share the scores via social media afterwards, a link is available to all who complete the quiz to post their scores and boast the best bragging rights at Christmas.


## Home Landing Page
The landing page provides a simple and clean layout with clear information on what the website offers. "Santa's Big Christmas Quiz" is displayed in large font with a cartoon Santa Claus displayed above. This is followed with a clickable button under the main heading texts of "begin" which sends the user through onto the next page and the start of the quiz. Subtle Christmas themed colours envoke the the memories and familiarity of the season. Lastly a footer of the social media links for Santa's Big Christmas Quiz is also provided on the landing page.

![Landing Page](docs/screenshots/home-page.png)

## Quiz Pages

The interactive quiz pages runs through 15 clear and easy to navigate random questions of 15 in total. There are 4 multiple choice options to chose for the questions and require clicking on the "Submit" button to get to the next question. Each page follows the last and has simple easy to read font.  

![Quiz Page](docs/screenshots/questions-page.png)

## Bad Santa! Result

"Bad Santa!" appears upon the end of the quiz if the user scores below half of the 15 questions correctly (0-7). A picture from the film "Bad Santa" accompanies the headed text with the score. A "Restart Quiz" button takes the user back to the homepage to begin the quiz again if they so choose. Another button "Check Answers" is provided for the user to check the correct answers. Lastly a footer of the social media links for "Share My Score" is also provided.

![Bad Santa Result](docs/screenshots/badsanta-result.png)

## Santa Baby! Result
"Santa Baby!" appears upon the end of the quiz if the user scores over half of the 15 questions correctly (8-14) But not all 15. A picture of Santa in sunglasses making okay hand gestures appears to accompany the headed text with the score. A "Restart Quiz" button takes the user back to the homepage to begin the quiz again if they so choose. Another button "Check Answers" is provided for the user to check the correct answers. Lastly a footer of the social media links for "Share My Score" is also provided.

![Santa Baby Result](docs/screenshots/santababy-result.png)

## You're A Winner! Result 
"You're A Winner!" appears upon the end of the quiz if the user scores all of the 15 questions correctly (15). A picture of a happy Santa with hands full of dollar bills appears to accompany the headed text with the score. A "Restart Quiz" button takes the user back to the homepage to begin the quiz again if they so choose. Another button "Check Answers" is provided for the user to check the correct answers. Lastly a footer of the social media links for "Share My Score" is also provided.

![You're A Winner Result](docs/screenshots/winner-result.png)

## Answer Page 
Clicking the "Check Answers" button as mentioned in the results pages, displays all the correct answers to the questions in the quiz. Another "Restart Quiz" button is provided.

![Answer Page](docs/screenshots/answers-page.png)

## Features 

Santa's Big Christmas Quiz includes the following;

### Existing Features

- __Images__

  - Featured on the landing page and scores pages.
  - A large cartoon Santa Claus appears on the landing page, confirming to the user they have landed on a website that is Christmas related.

  ![Santa Logo](docs/screenshots/santa-logo.png)

- __Variable Images and Texts__

  - Scores Pages each have a Santa Claus image and text depicting the mood of the score and of Santa, adding amusement to the user. These are:
  - "Bad Santa"

  ![Bad Santa](assets/images/bad-santa.jpeg)

  - "Santa Baby"

  ![Santa Baby](assets/images/good-santa.jpeg)

  - "You're A Winner" 

  ![Winner Santa](assets/images/winner-santa.webp)

- __Button__
  - A button is on every page and uses and stands out in a christmas red colour. This is site wide using the same styling and colour to reinforce that this is always a button.
 
  ![Button](docs/screenshots/buttons.png)

- __The Footer__ 

  - The footer section included in home and results pages gives links to the relevant social media sites for Santa's Big Christmas Quiz. The links will open to a new tab to allow easy navigation for the user. 
  - The footer is valuable to the user as it encourages them to keep connected via social media where they can find out even more about Santa's Big Christmas Quiz and for sharing their scores.

  ![Footer](docs/screenshots/footer-social.png)

  - __Statistics Container__ 

  - This is a container in gold (#d7be69) displaying a rolling questions and correctly answered information to the user using javascript interaction.

  ![Statistics](docs/screenshots/statistics-container.png)

  - __Quiz Container__ 

  - This is a container in blue (#3b81d6c6) displaying the quiz questions and mutiple choice options to the user using javascript interaction.

  ![Questions](docs/screenshots/quiz-container.png)

- __Correct Answer Interaction__ 

  - When a user clicks an list item (question) that is correctly answered, an interaction appears highlighting to the user that the question is correct by filling the question item with a green colour temporarily before moving onto the next question.

  ![Correct](docs/screenshots/correct-answer.png) 

- __Incorrect Answer Interaction__ 

  - When a user clicks an list item (question) that is incorrectly answered, an interaction appears highlighting to the user that the question is incorrect by filling the question item with a red colour temporarily before moving onto the next question.

  ![Incorrect](docs/screenshots/wrong-answer.png)  


### Future features Left to Implement

- Future features will include a larger selection of questions. This is curently set to a bank of 15, but could be increaded to literally hundreds of populated multiple choice questions to keep the question bank varied and interesting for users that repeatedly visit.
- An about page section where by users can find out more from the creator and author of the website and get in touch.
- Questions that invlove even more interactivity, this can be done through animated questions, games related questions incorporating advanced JavaScript.
- A Childrens section of the quiz that would give Children under the age of 11 a chance to partake in the quiz in a fun and educational way with slightly easier questions and fun animations/images.


## Typography and Colour

- Typography was taken from Google Fonts using 1 base font, "Cormorant Garamond". I felt this complimented the Christmas theme well, was clean and clear to read and easily accessible. With colour schemes I chose to use 3 Christmas themed colours, Red, Gold and Blue. Being mainly primary colours these work very well together and make the style eye catching. These were applied using hex, red (#7c0017), gold (#d7be69) and blue (#3b81d6c6). Then Black (#000000) and White (#ffffff) were used for the typography for Questions and Buttons.

Google Fonts can be found here (https://fonts.google.com/)


## Wireframes
- I used Balsamiq for my wireframes and drew a rough design of what I wanted my website quiz to look like with accurate images and cartoons of Santa with relevant sizing. Due to limitations I wanted the wording to be bigger on the Opening text "Santa's Big Christmas Quiz" but with balsamiq it wasn't possible to make the main text big enough in the page, I made sure to carry this over into my website. You can see screenshots of these pages below.

Quiz Home Page
![Balsamic Home Page](docs/screenshots/Balsamic-screenshot-home.png)

Quiz Question Page
![Balsamic Question Page](docs/screenshots/Balsamic-screenshot-questions.png)

Result Page Bad Santa
![Balsamic Bad Santa Result](docs/screenshots/Balsamic-screenshot-badsanta.png)

Result Page Santa Baby
![Balsamic Santa Baby Result](docs/screenshots/Balsamic-screenshot-santababy.png)

Result Page You're A Winner
![Balsamic You're A Winner Result](docs/screenshots/Balsamic-screenshot-winnersanta.png)

Answer Page
![Balsamic Sign-Up](docs/screenshots/Balsamic-screenshot-answers.png)

## Technology
__Various technologies were used in the entire process of building this website as follows;__
- Balsamiq. This was used to make a rough template of the design of my website.
- GitHub. To build the repository for Voyager and lay the groundwork for its development and deployment of website.
- GitPod. Where the design came to life in the physical coding of the website building the files and folders and writing the code to commit back to GitHub. This beginning of this Readme file was written before coding took place and exxtra folders were added for HTML and Assets including CSS and media.
- HTML. The building block for all the code and written across 5 pages, index, about, spotlight, signup, welcome.
- CSS. The style of the website linked via stylesheets to the HTML code.
- JavaScript. Used for all the questions and variables of the quiz, including calculating the score through additions, changing the colour of the question "Green" for correctly answered and "Red" for incorrect answered questions. Additionally, functions were added to change the image and text depending on the Results score.
- Fontawesome. Used to take social media icons for the bottom of the results page.
- Google Fonts. All font styles were taken to add a more unique design.
- Google images. Images taken from searching for Santa cartoon images and of bad santa.
- W3 Validator. Used to ensure all HTML code was working with no errors.
- Jigsaw Validator. USed to ensure all CSS code met best practices and was working with no errors.
- Lightouse. Used to ensure testing of performance met expectations wit no severe errors or performance issues. 

## Testing 

Overall, I am very happy with the testing outcomes with lighthouse, HTML, and CSS validation. I was concerned the video backgrounds may have an effect upon this but im glad that choosing short videos with lower quality may have helped my cause with this. I have tested all pages and functions, clickable links of social media links in nav bar as well as buttons, forms, and nav bar buttons. All of these work fast and clean for optimisation for the user to have a streamless experience on the website, all of their goals can be met simply and concisely with straightforward webpages that are engaging.

I have tested this website on a macbook pro with a 32 inch external monitor, an Ipad Pro, and a Iphone 13 pro max. I have also used reponsive design in Google dev tools with other devices such as a Surface Duo, Samsung galaxy devices including the fold, and other smaller devices of 280px max width. These were written with extensive media queries to be inclusive for all users regardless of the device they use.

It is noticed however that video backgrounds do not tend to work on smartphones - my personal iphone 13 pro max for instance. This may be because of the memory usage this website requires, however, i am happy that although the video may not play, a still of the video is still present and does in no way detract from the user experience and all functions still work fast and efficiently.

### Performance Testing 

- Lighthouse (Chrome Dev Tools)
  - No performance issues were returned when passing through the official Lighthouse feature on google chrome dev tools [https://developer.chrome.com/docs/lighthouse/overview/] on all 5 HTML pages of website. Scores of over 90% were present throughout as per following screenshots:

  Index Page
 ![Index Test](docs/screenshots/chromelighthouseresul
 t-index.png)
  
  About Page
 ![About Test](docs/screenshots/chromelighthouseresult-about.png)

  Spotlight Page
 ![Spotlight Test](docs/screenshots/chromelighthouseresult-spotlight.png)

  Sign Up Page
 ![Sign Up Test](docs/screenshots/chromelighthouseresult-signup.png)

  Welcome Page
 ![Welcome Test](docs/screenshots/chromelighthouseresult-welcome.png)


### Validator Testing 

- HTML
  - No errors were returned when passing through the official [W3C validator] on all 5 HTML pages of website as follows: Index (https://validator.w3.org/nu/?doc=https%3A%2F%2Fjonathanwhitedev.github.io%2Fvoyager%2Findex.html) Spotlight (https://validator.w3.org/nu/?doc=https%3A%2F%2Fjonathanwhitedev.github.io%2Fvoyager%2Fspotlight.html) About (https://validator.w3.org/nu/?doc=https%3A%2F%2Fjonathanwhitedev.github.io%2Fvoyager%2Fabout.html) Sign Up (https://validator.w3.org/nu/?doc=https%3A%2F%2Fjonathanwhitedev.github.io%2Fvoyager%2Fsignup.html) Form (https://validator.w3.org/nu/?doc=https%3A%2F%2Fjonathanwhitedev.github.io%2Fvoyager%2Fsignup.html)
- CSS
  - No errors were found when passing through the official [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fjonathanwhitedev.github.io%2Fvoyager%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)

### Test Cases
__Sign Up Page Testing:__
1. Click on the sign up option on the nav bar. User should be redirected to signup page.
2. Click Lets go button. User should notice error "Please fill in this field." on the First Name if it is not entered and ask for this information.
3. Same will be applied if Last Name and Email are left blank, with same error.
4. Until all fields are filled in, submission can then take place clicking the "Let's Go" button and redirect the user to a Welcome Page confirming sign up has successfully taken place.
5. All testing was completed, and all was working satisfactory.
6. See Screenshots below of test outcomes.

 ![Sign up Test](docs/screenshots/signup-first.png)
 ![Sign Up Test](docs/screenshots/signup-last.png)
 ![Sign up Test](docs/screenshots/signup-email.png)

 __Social Link Testing:__
 1. User hovers over any of the 4 social media links at bottom of page. An animation should take place where the link rises 5px upwards as a transition.
 2. A pop up text also appears on hover that displays a message that the website will open on in a new tab. 
 3. When clicked upon any of the 4 links, it will open in a seperate new tab.
 4. All testing was completed, and all was working satisfactory.
 5. See Screenshots below of test outcomes.

 ![Social Link Test](docs/screenshots/social-icons.png)
 ![Social Link Test](docs/screenshots/social-link.png)

 __Button Testing:__
 1. User clicks on any button in the "Nav" bar on any page, and was tested for fast accurate response to open the page intended.
 2. User clicks on the "Vg" Button in top right of page and this will always bring the user back to the Home or "index.html" page.
 3. User can click on any of the coloured buttons on all pages "Lets Explore", "Where to Next?", "Sign Up Today", "Lets Go" (form section), and "Back to Home" and again thry are fast and direct and move the user intuitively through the website without relying on the Nav bar (although this too can be used at any point)
 4. When hovered over the coloured white buttons, these will expand in transition and the background colour and text colour will revert to opposite in colour.
 5. All testing was completed, and all was working satisfactory.
 6. See Screenshots below of test outcomes.

![Button Test](docs/screenshots/button-before.png)
![Button Test](docs/screenshots/button-after.png)

__Video Background Testing:__
 1. User views the playing Video source in the background. 
 2. These should continue to play without interuption and loop and repeat on completion so they continually loop and play on all 5 pages.
 3. Watching the transistion on all 5 pages confirmed this took place and replayed on loop.
 3. All testing was completed, and all was working satisfactory.

### Supported Browsers and Screen Sizes.
  - Testing was carried out on Google Chrome, Safari, and Mozilla Firefox. All played the video and content fast and reponsively across these browsers.
  - Testing was carried out on Macbook Pro M1, Ipad Pro, and Iphone 13 Pro Max models in personal collection. I also optimized for other devices such as a Surface Duo, Samsung galaxy devices including the fold, and other smaller devices of 280px max width. All passed these tests.

### Unfixed Bugs

No extra bugs were found upon testing through above and I'm happy this is a responsive clean webpage. 

## Deployment
  - The site was deployed to GitHub pages. The live link can be found here - https://jonathanwhitedev.github.io/voyager/

  __To deploy the project:__
   1. In the [GitHub repository](https://github.com/jonathanwhitedev/voyager), Navigate to the settings tab.
   2. Once in the settings, navigate to the pages tab on the left hand side.
   3. In the build and deployment section under Branch, select the "master" branch and click Save.
   4. Once the master branch has been selected, the page will be automatically refreshed and a display indicates the successful deployment and the link to the address as below.
   5. All steps pictured below with corresponding numbers.

   ![Deployment](docs/screenshots/Deploy-project.png)

__To open Gitpod and Voyager website preview:__
   1. In the [GitHub repository](https://github.com/jonathanwhitedev/voyager), click the green Gitpod button. This will open GitPod.
   2. Once in GitPod, click the tab hamburger button in top left corner, navigate to Terminal and highlight and click "New Terminal".
   3. In the Terminal after gitpod /workspace/voyager, type the following command "python3 -m http.server" and hit the enter key.
   4. Once entered correctly a pop up will appear in bottom left corner displaying a service port is available. Click "Open Browser" and the website preview will open in a brand new tab.
   5. All steps pictured below with corresponding numbers.

   ![Deployment](docs/screenshots/github-gitpod.png)
   ![Deployment](docs/screenshots/gitpod-terminal.png)
   ![Deployment](docs/screenshots/gitpod-service-port.png)

### Extra Deployment Tasks
 __To run the website on a local screen:__
   1. Go to the [GitHub repository](https://github.com/jonathanwhitedev/voyager).
   2. Once in there, click on the green Code button and Download ZIP.
   3. Extract the ZIP file on your local machine.
   4. Run the index.html file in a browser.
   5. All steps pictured below with corresponding numbers.

   ![Deployment](docs/screenshots/Deploy-project.png)

 __To clone the repo:__
   1. Go to the [GitHub repository](https://github.com/jonathanwhitedev/voyager).
   2. Click on the green Code button and directly underneath as shown, copy the HTTPs link there.
   3. Open a GitBash terminal and navigate to the directory where you want to locate the clone.
   4. Type "git clone" and paste the copied HTTPs link, press the enter key to begin the clone process.
   5. All steps pictured below with corresponding numbers.

   ![Deployment](docs/screenshots/Deploy-project.png)

## Credits 

I will firstly credit code institute for the help with this page, the love running project helped me immensely when i found the going tough or needed to remember small details such as how to use social link tags etc. I also want to shout out to the code institute tutors for some help on minor tweaks to point me in directions where i was a little lost and they helped me understand where i was going wrong. Lastly i'd like to thank my dilligent mentor who helped me research other areas such as flexbox and grid, and even told me to start with developing in mobile screens firstly and start backwards from there to desktop. (oh if i had only listened to that last advice, would have saved me so much time!) This was a steep learning curve for me but because of the minor mistakes and not following flex/media at the beginning i learnt the hard way and in turn learnt an awful lot through the stress of it all!

Content and media inspiration is as follows below;

### Content 

- The button anchor tags design sections were taken from finding them on Traversy Media youtube channel and video https://www.youtube.com/watch?v=8MgpE2DTTKA&t=1114s these were then redesigned further with colour that was suitable for the page and font/sizes. The same video was also used for finding social li a transform scales to improve look of social icons and pop from page.
- The social icons in the bottom of section of all pages were taken from [Font Awesome](https://fontawesome.com/)
- The webkit stroke function was found after heavy research in needing a solution to allow text to pop off the background to be unique and more readble against the background colours and video content, this was found at (https://css-tricks.com/adding-stroke-to-web-text/) I then incorporated this into my css for my specific needs.

### Media

- All of the videos (5) used on all pages are from This Open Source site (http://pexels.com) these were then resaved as different file names, as text was either in russian or had spaces and would fail testing or reading for other developers.

## Thank you for taking the time to view my README file, hope you enjoy the website. 

## Jonathan White