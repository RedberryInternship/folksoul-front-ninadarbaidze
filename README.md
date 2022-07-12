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
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Node.js_logo.svg/1280px-Node.js_logo.svg.png' width="25" style="position: relative; top: 8px"/> *Node JS v16.X*  
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/Npm-logo.svg/540px-Npm-logo.svg.png' width="25" style="position: relative; top: 8px"/> *npm v8.X*  
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/1024px-Typescript_logo_2020.svg.png' width="25" style="position: relative; top: 8px"/> *Typescript v4.X*

---


### Tech Stack
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png' width="25" style="position: relative; top: 8px"/> *React v18.0.0*  
<img src='https://upload.wikimedia.org/wikipedia/commons/thumb/d/d5/Tailwind_CSS_Logo.svg/2048px-Tailwind_CSS_Logo.svg.png' width="25" style="position: relative; top: 8px"/> *Taiwlind v3.X*  
<img src='https://i0.wp.com/blog.knoldus.com/wp-content/uploads/2022/03/cypress.png?fit=364%2C364&ssl=1' width="25" style="position: relative; top: 8px"/> *Cypress v9.X*  
<img src='https://pbs.twimg.com/profile_images/1373527896472489987/YjVZynHb_400x400.jpg' width="25" style="position: relative; top: 8px"/> *React Hook Form v7.X*  

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

2. Create cypress.congif.ts file.

This JSON file is used to store any configuration values you supply. The default behavior of Cypress can be modified by supplying any of the [following](https://docs.cypress.io/guides/references/configuration#Global) configuration options.

You can create and copy initial values from cypress.config.example with following command:

```
cp cypress.config.example cypress.config.ts
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
│   ├─── pages 
│   ├───├─── AboutBand
│   ├───├─── BandMember
│   ├───├─── Dashboard
│   ├───├─── EditBand
│   ├───├─── FrontApplication
│   ├───├─── Login
│   ├───├─── Main
│   ├───├─── NewMember
│   ├───├─── NewSocial
│   ├───├─── Socials
│   ├─── store
│   ├───├─── auth-context

- .eslintrc.json   
- .prettierrc.json
- tsconfig.json     
- package-lock.json 
- package.json       
- App.jsx     
- postcss.config.js
- tailwind.config.js

```

### Resources
- [Application Design](https://www.figma.com/file/ferG8kznuy5s0hMhMZa2Hi/FolkSoul---Bootcamp?node-id=0%3A1)  
- [Git Commit Conventions](https://redberry.gitbook.io/resources/git-is-semantikuri-komitebi)


