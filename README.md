# Clips

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 15.1.3.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

Create an application: ng new <name>
To start server: ng serve
Turn off server:cntl c

Autoscale- Case studies

Initialize Project wit TS Decororators: npx tsc --init

npx tsc <file name>.ts

npx tsc -- init (create a decorator configuration file)

Create a component help
ng generate component --help

Create a component for help
ng generate component <name>

Attribute Directives can change an objects attributes
ngClass (changes the appearance of an element based on a condition dynamically


Structural Directives can change an add/remove objects

ngIf is basically an if statement.

ngFor is basically an For Loop statement.

Install Tailwind:
	1) First turn off the server
	2) At the command line: npm install -D tailwindcss@latest
	3) Create a configuration file, at rhe command line: npx tailwind init. Creates tailwind.config.js
	4) Update the tailwind.config.js file with content: ['./src/**/*.{html,ts}'],
	5) Update the src/styles.css file add the following
		@tailwind base;
		@tailwind components;
		@tailwind utilities;	

Create a Module (like a popup for login)
	1)ng generate module <name> Example: user
		A) Add the following import to the ap.module.ts: import { UserModule } from './user/user.module'
		B) Add the UserModule to the list of imports
			a) import { AuthModalComponent } from './auth-modal/auth-modal.component' is then added to the user.module.ts file.
			b) Open the app.component.html file and cut the  <!-- Auth Modal --> section and move to the auth-modal.component.html file
			c) Add <app-auth-modal></app-auth-modal> to the location you cut the <!-- Auth Modal -->. <app-auth-modal> is the same as the selector: 'app-auth-modal' in auth-modal.component.ts file
			d) it will not compile until you fix the issue. Add the AuthModalComponent as a new exports component in the user.module.ts file

Create a navbar component
	1) In the command line run: ng generate component nav
	2) Go to the app.componenet.html and cut the header section <header>...</header> and paste in the nav.component.html file.
		a) Run in the command line ng generate component user/auth-modal
		b) In the user.module.ts fle add an exports section to the ngModule. Add the AuthModalComponenet

Create a shared Modal 
	1) Create the modal: ng generate module shared (commonly called "shared" for shared modules)
	2) Create a component called ng generate component shared/model. It will be generated under the previously created shared component
	3) add the impo
