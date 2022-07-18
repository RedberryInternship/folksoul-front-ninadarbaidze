# Folksoul Application

This is a Folksoul app, where we can add/remove/edit/delete band members and social links.

---



### Table of Contents
- [Prerequisites](#Prerequisites)  
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Testing](#testing)
- [Project Structure](#project-structure)
- [Resources](#Resources)

### Prerequisites
:large_blue_circle: *Node JS v16.X*  
:large_blue_circle: *npm v8.X*  
:large_blue_circle: *Typescript v4.X*

---


### Tech Stack
:large_blue_circle: *React v18.0.0*  
:large_blue_circle: *Taiwlind v3.X*  
:large_blue_circle: *Cypress v9.X*  
:large_blue_circle: *React Hook Form v7.X*  

---


### Getting Started
1. Clone Redberry Covid Form repository from github:

```
git clone git@github.com:RedberryInternship/folksoul-front-ninadarbaidze.git
```

2. copy env.example file:

```
cp .env.example .env
```


3. Install dependencies

```
npm install
```


4. Make a development server available for the application.

```
npm start
```

---

### Testing

Folksoul application is test driven. It uses E2E testing framework Cypress.

1. Make sure to install dependences

```
npm install
```

2. Copy cypress.config.ts file.

This JSON file is used to store any configuration values you supply. The default behavior of Cypress can be modified by supplying any of the [following](https://docs.cypress.io/guides/references/configuration#Global) configuration options.

You copy initial values from cypress.config.ts.example with following command:

```
cp cypress.config.ts.example cypress.config.ts
```


3. Run a Development server

```
npm start
```

4. Run Cypress end to end testing using command:

```
npx cypress open
```

---

### Project Structure

```

├─── public
├─── src     
│   ├─── assets     
│   ├─── components  
│   ├───├─── svgs
│   ├───├─── component-file.tsx
│   ├───├─── index.tsx
│   ├─── pages 
│   ├───├─── page-folder
│   ├───├───|─── components
│   ├───├───|───|─── page-componenet.tsx
│   ├───├───|───|─── index.tsx
│   ├───├───|─── page-folder.tsx
│   ├───├───|─── index.ts
│   ├─── store
│   ├───├─── auth-context

- .eslintrc.json   
- .prettierrc.json
- tsconfig.json     
- package-lock.json 
- package.json    
- cypress.config.ts
- App.jsx     
- postcss.config.js
- tailwind.config.js

```

### Resources
- [Application Design](https://www.figma.com/file/ferG8kznuy5s0hMhMZa2Hi/FolkSoul---Bootcamp?node-id=0%3A1)  
- [Git Commit Conventions](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)


