Following the [common templates for user stories](https://en.wikipedia.org/wiki/User_story#Common_templates), one can frame this challenge as follows:

```
As a coding bootcamp student
I want to take a timed quiz on JavaScript fundamentals that stores high scores
so that I can gauge my progress compared to my peers
```

#### Some Guidelines 

1. The user arrives at the landing page and is presented with a call-to-action to "Start Quiz." Also note the navigation option to "View Highscores" and the "Time" value set at 0.

2. Clicking the "Start Quiz" button presents the user with a series of questions. The timer is initialized with a value and immediately begins countdown.

3. Score is calculated by time remaining. Answering quickly and correctly results in a higher score. Answering incorrectly results in a time penalty (for example, 15 seconds are subtracted from time remaining).

4. When time runs out and/or all questions are answered, the user is presented with their final score and asked to enter their initials. Their final score and initials are then stored in localStorage.


The application should also be responsive, ensuring that it adapts to multiple screen sizes.


#### TODO 

1. Add audio files to alert the user of correct or incorrect answers. Be sure to include the appropriate license.

2. Customize the application theme.

3. Create multiple quizzes and an option for users to choose between them.

4. Add the application to your portfolio.



