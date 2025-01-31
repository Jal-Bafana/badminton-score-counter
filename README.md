# Badminton Score Counter Mobile App

## Overview
A native mobile application for keeping track of badminton scores, built using web technologies and Capacitor. The app provides an intuitive touch interface for tracking scores, serving status, and match history in both 11 and 21-point game modes.

## Features
- **Touch Controls**: Simple quadrant-based interface for score management
- **Player Names**: Customizable player names with persistent storage
- **Game Modes**: Support for both 21 and 11 point games
- **Serving Indicator**: Clear display of current server
- **Match History**: Tracks recent match results
- **Swap Sides**: Quick button to swap player positions
- **Auto-Reset**: Automatically resets 5 seconds after game ends
- **Offline Support**: Works without internet connection
- **Native Performance**: Built with Capacitor for native Android/iOS

## Installation

### Android
1. Enable "Install from Unknown Sources" in Settings
2. Download and install the APK
3. Grant required permissions if prompted

### Development Setup
1. Install dependencies:
   npm install
2. Build the project:
   npm run build
3. Sync with Capacitor:
   npx cap sync
4. Open in Android Studio:
   npx cap open android

## Usage Instructions
1. Launch the app
2. Enter player names (optional)
3. Select game mode (11 or 21 points)
4. Score using touch quadrants:
   - Top quadrants: Increase score (+)
   - Bottom quadrants: Decrease score (-)
5. Use control buttons:
   - Reset: Clear scores
   - Swap: Switch player sides
   - Mode: Change point system

## Game Rules
- Standard game to 21 points (or 11 in short mode)
- Must win by 2 clear points
- At 20-all (or 10-all), game continues until 2-point lead
- Server changes based on score:
  - Every 2 points before 20-all
  - Every point after 20-all

## Technical Details
- Built with HTML5, CSS3, and JavaScript
- Converted to native app using Capacitor 7.0
- Minimum Android SDK: 23 (Android 6.0)
- Target Android SDK: 33 (Android 13)
- Offline-capable with service worker
- Responsive design for all screen sizes

## Development
1. Fork the repository
2. Create feature branch
3. Make changes
4. Test thoroughly
5. Submit pull request

## Building Release Version
1. Update version in package.json
2. Build web assets
3. Sync with Capacitor
4. Build signed APK in Android Studio
5. Test on target devices