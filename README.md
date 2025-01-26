# Badminton Score Counter

## Overview
The Badminton Score Counter is a simple web application designed to keep track of the scores for two players in a badminton match. The application provides an intuitive interface with buttons for increasing and decreasing scores for each player, displays the current scores, and determines the winner based on badminton scoring rules.

## Link to Website
You can view and use the Badminton Score Counter by visiting this link:  https://badminton-score-counter.vercel.app/

## Features
- **Score Tracking**: Tracks scores for Player 1 and Player 2.
- **Advantage and Deuce Status**: Displays "Advantage" or "Deuce" based on the game status.
- **Win Detection**: Determines the winner if a player reaches 21 points with at least a 2-point lead.
- **Auto-Reset**: Automatically resets the scores 5 seconds after a winner is declared.
- **Manual Reset**: Reset scores manually using a button.

## Technologies Used
- **HTML**: Structure of the web application.
- **CSS**: Styling the layout and visual components.
- **JavaScript**: Dynamic behavior and score logic.

## Usage Instructions
1. Open the `index.html` file in any modern web browser.
2. The interface displays four clickable areas for each player:
   - **Player 1 Increase**: Increases Player 1's score.
   - **Player 1 Decrease**: Decreases Player 1's score (only if the score is greater than 0).
   - **Player 2 Increase**: Increases Player 2's score.
   - **Player 2 Decrease**: Decreases Player 2's score (only if the score is greater than 0).
3. The scores for each player are displayed prominently on the screen.
4. The **status area** updates dynamically:
   - Displays "Advantage Player 1" or "Advantage Player 2" during critical points.
   - Displays "Deuce" when both players are tied at 20 or more points.
   - Declares the winner when one player reaches 21 points with a 2-point lead.
5. Use the **Reset** button to manually reset the scores at any time.

## Game Rules Logic
- A player wins if their score reaches 21 points and they have at least a 2-point lead over the other player.
- When both players have 20 points, the game enters a "Deuce" state where a 2-point lead is required to win.
- "Advantage" is displayed when one player leads by a single point after deuce.

## Customization
You can customize the application by editing the following:
- **Background Colors**: Modify the `.player1-increase`, `.player1-decrease`, `.player2-increase`, `.player2-decrease` classes in the CSS section to change the quadrant colors.
- **Maximum Points**: Change the `maxPoints` variable in the JavaScript section to alter the winning point threshold.


## License
This project is open-source and free to use for educational and personal purposes.

---
Feel free to reach out if you encounter any issues or have suggestions for improvements!
