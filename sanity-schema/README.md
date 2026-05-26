# Sanity Studio Setup

We have prepared the Sanity integration for the frontend (it connects to your Project ID `bts2dxhz`).

To allow your non-tech team to start uploading projects, you need to set up the Sanity Studio locally to deploy the schema. 

## Instructions for you:

1. Open a new terminal.
2. Initialize the Sanity Studio by running:
   ```bash
   npm create sanity@latest studio
   ```
3. Follow the prompts:
   - Log in to your Sanity account.
   - Select your existing project: `bts2dxhz`
   - Select the dataset `production`
   - Choose the "Clean project with no sample data" template.
4. Once the studio is initialized, copy the `project.js` schema we generated:
   ```bash
   cp sanity-schema/project.js studio/schemaTypes/
   ```
5. Open `studio/schemaTypes/index.js` (or `.ts`) and import the project schema:
   ```javascript
   import project from './project'

   export const schemaTypes = [project]
   ```
6. Run the studio locally to verify:
   ```bash
   cd studio
   npm run dev
   ```
7. When you are ready, deploy the studio for your non-tech team:
   ```bash
   npx sanity deploy
   ```

Now, anyone with access to the deployed studio URL can log in and start adding projects! The frontend will automatically pull them.
