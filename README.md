# UI Tests With Maestro

## Overview
This repository contains UI test automation scripts for the **KC** application using [Maestro](https://maestro.mobile.dev/). They don't have a practical purpose anymore, but may prove useful as a refrence. The tests are structured for both Android and iOS platforms, ensuring a seamless experience across devices.

## Project Structure
```
.
├── AbstractTestExample.yaml   # Example Maestro test script
├── android                    # Android-specific test scripts
│   ├── setup                  # Initial setup flows
│   ├── setups                 # Various test setup configurations
│   ├── subflows               # Reusable subflows for testing
│   ├── tests                  # Main test scripts for different app features
├── ios                        # iOS-specific test scripts
│   ├── subflows               # Reusable subflows for testing
│   ├── tests                  # Main test scripts for different app features
└── README.md                  # Project documentation
```

## Getting Started
### Prerequisites
- Install **Maestro**:
  ```sh
  curl -Ls "https://get.maestro.mobile.dev" | bash
  ```
- Ensure you have an emulator or physical device connected.
- Android Debug Bridge (ADB) should be set up for Android testing.
- Xcode and Simulator should be set up for iOS testing.

### Running Tests
#### Android
To run a test on Android, navigate to the `android/tests` directory and execute:
```sh
maestro test android/tests/KC
```

#### iOS
To run a test on iOS, navigate to the `ios/tests` directory and execute:
```sh
maestro test ios/tests/KC
```

## Test Categories
### Android
- **Setup Tests**: Configure user state (e.g., `forcedLogin`, `userStatus`)
- **Subflows**: Reusable flows (e.g., `Camera`, `Gmail`, `KC` features)
- **Tests**: UI tests for app features (e.g., `favorites`, `recipeDetail`, `shopping`)

### iOS
- **Subflows**: Reusable UI interaction flows
- **Tests**: UI tests for core app functionalities

## Contribution
1. Fork the repository.
2. Create a feature branch (`feature/test-enhancement`).
3. Commit your changes.
4. Submit a pull request.

## License
This project is licensed under the MIT License.

## Resources
- [Maestro Documentation](https://maestro.mobile.dev/)
