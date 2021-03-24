# React Mongo Netlify Starter

mon commands

- `yarn start`: Starts local development environment connected to testing instance of MongoDB.
- `yarn build`: Generates static assets for production deployment in the `functions-build` and `build` folders.
- `yarn storybook`: Starts local instance of Storybook with all endpoints mocked inside JavaScript. 

## Setup

### Step 1: Clone local instance

1. Clone the repository by running `git clone ...`.
2. Make sure you have the latest release of [NodeJS](https://nodejs.org/en/) installed.
3. Make sure you have the latest release of installed by means of `npm install -g yarn`.
4. Run `yarn` in the root folder of the repository to install all dependencies.
5. Make sure to integrate ESLint for your specific IDE ([see guide](https://eslint.org/docs/user-guide/integrations)) to get real-time linting errors in [TypeScript](https://www.typescriptlang.org/).
6. Make sure to integrate Stylelint ([see guide](https://stylelint.io/user-guide/integrations/editor)) for your IDE to get real-time linting errors in [Styled Components](https://www.styled-components.com/).

### Step 2: Configure MongoDB

1. Create account on [MongoDB website](https://www.mongodb.com/) if you don't have one.
2. Add new project.
3. Add free-tier cluster to project.
4. Wait for cluster to be created (takes around 3 minutes)
5. Click connect button and set to "Allow Access from Anywhere" and create a user called `testing` and add a password called `testing` as well.
6. Click "Choose a connection method"
7. Click "Connect your application" and copy and paste the URL (starting with "mongodb+src://...")
8. Paste it between the double quotes for `MONGO_DB_CREDENTIALS` in your `.env` file.
9.  Replace the `<password>` characters with `testing`.
10. In MongoDB click on "Database Access" and click the "Edit" button next to the "testing" user
11. Set "Database User Privileges" to "Grant specific privileges"
12. Under "Specific Privileges" select "readWrite" and set Database to `testing`
13. Go back to "Database Access" and "Add new Database User"
14. Create a user called `production` with a very strong password (save the password somewhere)
15. Set "Database User Privileges" to "Grant specific privileges"
16. Under "Specific Privileges" select "readWrite" and set Database to `production`

### Step 3: Configure Netlify

...