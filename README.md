# Exercise Project with Expo React Native

## Overview

Frontend Software Engineer -
Mobile Technical Challenge

Problem
In our company we have built a custom-made CRM that our sales agents use on a
daily basis. That system is basically a sales pipeline where leads could convert into
prospects for our company. In order to convert them into prospects, our sales agents
need to run some manual checks to validate that the person is eligible to be a
prospect of our company. That system is basically a sales pipeline where leads could
convert into prospects for our company. In order to convert them into prospects, our
sales agents need to run some manual checks to validate that the person is eligible
to be a prospect of our company.
In order to automate those manual checks, we need to integrate with other external
systems and include the functionality in the CRM to let our sales agents to trigger
those validations by demand. Every lead exists in the sales lead CRM stage with
basic personal information (national identification number, birthdate, first name, last
name, email, etc). The criteria to turn a sales qualified lead into a prospect is to pass
various validations with different systems:
The person should exist in the national registry identification external system and
their personal information should match the information stored in our local
database.
The person does not have any judicial records in the national archives' external
system.
Our internal prospect qualification system gives a satisfactory score for that
person. This system outputs a random score between 0 and 100. A lead could
be turned into prospect if the score is greater than 60.
The first two validations are non-dependent between each other. Therefore, it is
expected to execute those validations in parallel. The third validation requires the
output of the previous systems in order to send that data to our internal prospect
qualification system to execute the third validation. If the final validation is

Frontend Software Engineer - Mobile Technical Challenge 2
successful, the lead will be converted into a prospect and it will be moved from the
sales lead stage into the prospect stage of the sales pipeline.
Technical considerations
External systems should be implemented as a function that responds with
success or failure depending on the prospect that is being consulted. Those
external systems are a fictional implementation that could be developed using
HTTP Stubs. However, you are free to use any technique that allows you to
simulate those requests.
We want to understand your approach to solving a simple business problem
using react native. We want to see your expertise in building React Native
components and mobile development with that technology.
You are free to use libraries or frameworks that you consider relevant for the
implementation.
We expect that you develop a simple UI of the CRM that only contains the leads
and prospects of the sales pipeline. You are free to make any UX decisions.
We expect a README with the decisions, assumptions, or improvements that
can be done on the technical challenge.
We expect automated tests that prove the correctness of the developed
solution.
We do not expect the development of a server-side solution.

## Getting Started

### Prerequisites

Make sure you have Node.js and npm installed on your machine.

- Node.js: [Download and install Node.js](https://nodejs.org/)
- npm: Included with Node.js installation

### Installation

1. Clone this repository to your local machine:

    ```bash
    git clone https://github.com/agudeluca/prospectsExercise.git
    ```

2. Navigate to the project directory:

    ```bash
    cd prospectsExercise
    ```

3. Install dependencies:

    ```bash
    npm install
    ```

### Running the App

Once the dependencies are installed, you can start the Expo development server:

    ```bash
    npm run ios
    ```

This will open the Expo DevTools in your default web browser. You can run the app on an emulator/simulator or scan the QR code with the Expo Go app on your mobile device to see the application in action.

## Features

- Briefly describe the key features and functionalities of your application.

## Contributing

If you'd like to contribute to this project, feel free to fork the repository and submit a pull request. Your contributions are highly appreciated!


## Automation

  1. install maestro cli
    curl -Ls "https://get.maestro.mobile.dev" | bash

  2. run maestro
    maestro test flow.yaml


## License

This project is licensed under the [MIT License](LICENSE).
