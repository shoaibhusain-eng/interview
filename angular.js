// What Is Angular?
// Angular is an open-source, JavaScript framework written in TypeScript. 
// Google maintains it, and its primary purpose is to develop single-page applications.
// which in mainlu used for building structured, scalable and single page web aapplication
// cline side 

///////////////////////////////////////////////////////////////////////////////////////////

// what is single page application 
// single page it not chagane or load page it's only change and load the componets of web page
// example  youtube 

////////////////////////////////////////////////////////////////////////////////////////////

// Advantage of angular

// Two-way Data Binding: Angular’s two-way data binding enables real-time updates between 
// the model and view, reducing manual changes and saving time and effort.

// Modular Architecture: Angular’s modular design allows developers to create reusable 
// components, making it easy to build and maintain large-scale applications.

// Type Safety: Angular’s TypeScript-based framework ensures type safety, reducing 
// errors and improving code maintainability.

// Lazy Loading: Angular’s lazy loading feature enables efficient loading of components 
// and modules, reducing initial load times and improving overall performance.

// Ahead-of-Time (AOT) Compilation: Angular’s AOT compilation feature compiles templates 
// and components at build time, improving performance and reducing runtime errors.

// It is cross platform and open source(free)

/////////////////////////////////////////////////////////////////////////////////////////////

// what is npm 
// npm is a package manager for the JavaScript programming language. 
// It is the default package manager for the node js and angular

// npm is node package magaer.  is an online repository where you can get thousands of free
// libraries which you can use in your project

/////////////////////////////////////////////////////////////////////////////////////////////

// what is cli tools 

// cli is command line interface tools that help you to create components, 
// modules, services, pipes etc with the help command line

/////////////////////////////////////////////////////////////////////////////////////////////

// What is the difference between AngularJS and Angular (Angular 2+)?

// AngularJS (also known as Angular 1) is the original version of Angular. 
// Angular 2+ (often referred to simply as Angular) is a complete rewrite of AngularJS. 
// Angular 2+ introduces TypeScript support, a component-based architecture, 
// improved performance, and a more modular design.
// AngularJS is a JavaScript framework, while Angular is a TypeScript framework.    
// Introducing CLI.  AngularJS doesn’t have its own command line interface (CLI). 
// Angular 2+, on the other hand, comes with a CLI that allows for quick generation of 
// components, services, directives, etc.

//////////////////////////////////////////////////////////////////////////////////////

// what are the components in angular

// Components are building blocks of Angular apps. 
// Each Angular component consists of an HTML template (TemplateURL), a class, 
// a CSS selector, and a component-specific stylesheet. You can create one with the Angular CLI or manually. 
// Components make up Angular modules along with directives, services, and more.


/////////////////////////////////////////////////////////////////////////////////////////

// what is selector and template
// a selector is used to identify each components uniquley into the components tree
// teamplate is a html view of angular

/////////////////////////////////////////////////////////////////////////////////////////

// what is module in angular
// module is a place where you can group the components, directives, pipes and services which
// are related to the application

// module is a way to group the components, services, pipes, directives and other modules

/////////////////////////////////////////////////////////////////////////////////////////

// what is data binding in angular 
// data binding is the way to communicate between your typescipt code of you components
//  and your html view (template)

// out data

// 1) string interpolation {{data}}
// 2) property binding [property] = 'data

// input data
    // event binding (event) = "expression"

// both way
    // two way data-binding [('ngModel')]="data";

/////////////////////////////////////////////////////////////////////////////////////////

// 1) string interpolation {{data}}
    // Sting interpolation is one way data binding technique that is to 
    // transfer the data from ts code(comoponents) to html template(view)
    // syntax {{data}}

    // String Interpolation is a one-way databinding technique which is used to 
    // output the data from a TypeScript code to HTML template (view).

    // data flow ts to view

// 2) property binding [property] = 'data
    // property binding is one way data binding technique that is to 
    // transfer the data from ts code(comoponents)
    // in addition, it can set an element property to a non-string data value like boolen
    // data flow ts to view


// 3) events binding
    // Event binding is used to handle the events raised by the user action like button click.
    // data flow view to ts

    // (click)="funcName()"

// 4) Two way data binding
    // Two way data binding help user to exchange data from the view to 
    // components and then components to view at same time
    // data flow in both diraction

    // Two-way data binding in Angular allows for automatic synchronization of data between the model and the view. It is implemented using the [(ngModel)] directive. 
    // When a user updates the view, the model is automatically updated, and vice versa.


        // username: string =   ''; // Initialize a property to bind to

        // in html

        {/* <div>
            <label for="usernameInput">Enter your name:</label>
            <input type="text" id="usernameInput" [(ngModel)]="username" placeholder="Type your name here">
            </div>
            <div>
            <p>Hello, {{ username }}!</p>
        </div> */}

/////////////////////////////////////////////////////////////////////////////////////////



// what is directives?
// In Angular, Directives are classes that add new behavior to the elements 
// in the template or modify existing behavior

// 1) Attribute directives eample ngClass ngStyle
    // Attribute directives listen to and modify the behavior of other HTML elements, 
    // attributes, properties, and components.

    // NgClass NgStyle NgModel

    // <!-- toggle the "special" class on/off with a property -->
    // <div [ngClass]="isSpecial ? 'special' : ''">This div is special</div>


// 2) Structural directives eample ngIf ngFor ngswitch
// Structural directives are responsible for HTML layout. 
// They shape or reshape the DOM's structure, typically by adding, removing, 
// and manipulating the host elements to which they are attached.
// NgIf NgFor NgSwitch

// {/* <app-item-detail *ngIf="isActive" [item]="item"></app-item-detail> */}
// {/* <div *ngFor="let item of items">{{item.name}}</div> */}

// 3) Component directives
// Used with a template. This type of directive is the most common directive type.
// components direcives are directive with its own templates


// 4) custom Directive
// you can create custom ng g directive nameOFDirective

        // constructor(
        //     private el: ElementRef
        //   ) {
        //     // console.log(this.el.nativeElement.style);
        //     // el.nativeElement.style.backgroundColor ='red';
        //     this.el.nativeElement.style.backgroundColor ='green';
        //     this.el.nativeElement.style.color ='white';
        //    }

/////////////////////////////////////////////////////////////////////////////////


// What is a Decorator in Angular?

// Decorators are special types of declarations in Angular that can be attached to a class, 
// They are used to add metadata to classes to configure the behavior of the class.

// All Decorator are represented with @ symbol

// @Injectable, @Directive, @NgModule, @Component etc. 

///////////////////////////////////////////////////////////////////////////////////////

// what is pipes in angular
// Pipes are used to transform data.
// pipes are the simple function which accept an input and return a transform value.

// Pipes are simple functions that 
// accept an input value, transform it, and return the transformed value. 
// They are often used to format data in the view. Angular provides built-in pipes 
// like DatePipe, UpperCasePipe, LowerCasePipe, etc., and you can also create custom pipes.

// angular built in pipes
    // 1) lowercase
    // 2) uppercase
    // 3) titlecase
    // 4) json
    // 5) currency
    // 6) date
    // 7) percent
    // 8) slice
    // 9) async
    // 10) keyvalue


    // <p> {{name | uppercase}}</p>
    // <p> {{name | lowercase}}</p>
    // <p> {{name | titlecase}}</p>

    // and you can create your own custom pipes
    // ng g p nameOf Pipe
    // ng g pipe nameOf Pipe



// what pipe chaining 
// the pipes chaining use multiple pipe on DataTransfer input

{/* <p>{{todayDate | date | uppercase }}</p> */}

////////////////////////////////////////////////////////////////////////////////////////

// what is services
// services are the class which are used to share data between components

// normally we use service for avoding code repetition
// service is a typescript class and a resuable code which can be used in multiple components

////////////////////////////////////////////////////////////////////////////////////////

// what is provider in angular
// provider is a way to register a service in angular
// provide inform to angular is service avaliable for injecting inside the components

////////////////////////////////////////////////////////////////////////////////////////

// what is dependency injection
// dependency injection is a way to inject a service inside the component

////////////////////////////////////////////////////////////////////////////////////////

// What is constuctor in angular
// constuctor is a method in type scipt class that automatically get called when the class 
// is being instantiated

// constuctor always run before any angular life cycle hook and it not part of lifecycle hook 
// constuctor is a method in type scipt class that automatically get called when the class

// constuctor is widely used to inject dependencies(services) in the component class

////////////////////////////////////////////////////////////////////////////////////////

// angular bootstrap process

    // 1)  index.html
    //     angular is used to create single page application. index.html file is 
    //     that single page. index.html file invoke main.js file which js vsersion of main.ts file

    // 2) main.ts
            // main.ts file is like the entry point of web-app. 
            // it compiles the web-app and bootstrap the appmodule to run in the browser
        
        // you can change here bootstrap module

        // import { bootstrapApplication } from '@angular/platform-browser';
        // import { appConfig } from './app/app.config';
        // import { AppComponent } from './app/app.component';
        
        // bootstrapApplication(AppComponent, appConfig)
        //   .catch((err) => console.error(err));


    // 3)   app.module.ts
            // app module file will then bootstrap  the app component

    // 4)   app component
            // app-component or app-root components is the html which you will you see finally 



// angular json
    //  projects
        // app
            // architect
                // options
                // "outputPath": "dist/dating",
                // "index": "src/index.html",
                // "browser": "src/main.ts",

////////////////////////////////////////////////////////////////////////////////////////

// Lifecycle event sequence

//  construtor                  ===>    in call only one time
//  ngOnChanges()               ===>    it call when Input Value is changes in componets
//  ngOnInit()                  ===>    it call when componets is load one time
//  ngDoCheck()                 ===>    it call every time any changes in componets
//  ngAfterContentInit()        ===>    it call only one time when content init
//  ngAfterContentChecked()     ===>    it call every time any changes in content
//  ngAfterViewInit()           ===>    it call only one time when View init
//  ngAfterViewChecked()        ===>    it call every time any changes in View
//  ngOnDestroy()               ===>    it call before componets


// import { AfterContentChecked, AfterContentInit, AfterViewChecked, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

// @Component({
//   selector: 'app-user-list',
//   standalone: true,
//   imports: [],
//   templateUrl: './user-list.component.html',
//   styleUrl: './user-list.component.scss'
// })
// export class UserListComponent implements OnChanges, OnInit, DoCheck , AfterContentInit, AfterContentChecked, AfterContentInit, AfterViewChecked, OnDestroy{

 
//   @Input('user') userName?:string;

//   constructor(){
//     console.log("constructor Called");
//   }

//   ngOnChanges(changes: SimpleChanges): void{
//     console.log('ngOnChanges called');
//     console.log(changes);
//   }

//   ngOnInit(): void {
//     console.log('ngOnInit Called')
//   }

//   ngDoCheck(): void {
//     console.log('ngDoCheck Called')
//   }

//   ngAfterContentInit(): void {
//     console.log('ngAfterContentInit Called')
//   }

//   ngAfterContentChecked(): void {
//     console.log('ngAfterContentChecked Called')
//   }

//   ngAfterViewInit():void{
//     console.log('ngAfterViewInit Called')
//   }

//   ngAfterViewChecked(): void {
//     console.log('ngAfterViewChecked Called')
//   }

//   ngOnDestroy(): void {
//     console.log('ngOnDestroy Called')
//   }
// }


////////////////////////////////////////////////////////////////////////////////////////

// what is difference between constuctor and ngOnInit

// ngOnInit is part of angular life cycle hooks
// it's run after ngOnChange life cycle hooks


// constuctor is not part of  angular life cycle hooks
// it's run before ngOnChange life cycle hooks

////////////////////////////////////////////////////////////////////////////////////////

// how to improve performance in angular 
// 1)   Ahead-of-Time (AOT) Compilation
// What It Is: Pre-compiles your Angular HTML and TypeScript code into efficient JavaScript code during the build process.
// Benefits: Reduces the size of the application and improves bootstrap time.
// How to Enable: Use AOT compilation by adding --aot flag during the build

// ng build --aot

// 2)   Lazy Loading
// What It Is: Loads feature modules on demand rather than at initial load.
// Benefits: Reduces the initial load time of the application.
// How to Implement: Configure lazy loading in your routing module

// const routes: Routes = [
//     { path: 'feature', loadChildren: () => import('./feature/feature.module').then(m => m.FeatureModule) }
// ];

// 3)   Tree Shaking
// What It Is: Removes unused code from the final bundle.
// Benefits: Reduces the size of the JavaScript bundles.
// How to Enable: Tree shaking is automatically enabled in Angular's production builds

// ng build --prod

// 4)   Optimize Images and Assets
// What It Is: Compress and resize images and assets.
// Benefits: Reduces the amount of data transferred over the network.
// How to Implement: Use tools like ImageMagick, TinyPNG, or WebP for image optimization.

// 5)   Minimize and Bundle External Libraries
// What It Is: Only include necessary parts of external libraries and bundle them effectively.
// Benefits: Reduces the size of the JavaScript bundles.
// How to Implement: Use tools like ng-packagr for Angular libraries and tree shaking to remove unused code.

////////////////////////////////////////////////////////////////////////////////////////

// Explain Dependency Injection in Angular.

// Dependency Injection (DI) in Angular is a design pattern used to 
// implement IoC (Inversion of Control). It allows a class to receive its 
// dependencies from an external source rather than creating them itself. 
// DI improves the modularity and testing of the application.


//////////////////////////////////////////////////////////////////////////////////

// What is lazy loading in Angular?

// Lazy loading is a technique where you load 
// JavaScript components asynchronously when a specific route is activated. 
// It helps to reduce the initial load time by loading only the necessary modules.

//////////////////////////////////////////////////////////////////////////////////

//  What compilation types are there in Angular?
//  name Just-in-Time (JIT) compiling an application at runtime and 
//  Ahead-of-Time (AOT) compiling an app at build time. 
//  AOT compilation has become a standard from Angular 9 on.


///////////////////////////////////////////////////////////////////////////////////

// What are interceptors in Angular?

// An interceptor is a type of service that executes pre-processing before an HTTP request. 
// By intercepting both incoming and outgoing HTTP calls, you can modify any values, greatly 
// reducing the need for repetitious code. Be sure to mention how you would implement interceptors 
// (creating the class, dependency-injecting the class, etc).

////////////////////////////////////////////////////////////////////////////////////////

// reactive and template-driven forms.

//                  REACTIVE                        TEMPLATE-DRIVEN

// Data model	        Structured and immutable	    Unstructured and mutable
// Data flow	        Synchronous	                    Asynchronous
// Form validation	    Functions	                    Directives


////////////////////////////////////////////////////////////////////////////////////////

// what is difference between promise and Obervable

// Obervable
// emit multiple value a period of time.
// also called streming data                


//Promise 
// emit a single value at a time

////////////////////////////////////////////////////////////////////////////////////////

// what is Obervable?
// Obervable emit multiple value a period of time.
// also called streming data    

////////////////////////////////////////////////////////////////////////////////////////


// what is rxjs
// rxjs is libray that make it eassier to apply reactive programming concepts using obervable

// difference between Subject, BehaviorSubject , ReplaySubject and AsyncSubject

// in Subject you don't have initial value  
// when you after emit event it give you latest value

// in BehaviorSubject you have initial value 
// when you after emit event it give you latest value

// in ReplaySubject you have initial value
// when you subscribe it give you previous or current 

// in AsyncSubject you don't have initial value  
// it give value when it's completed final value

////////////////////////////////////////////////////////////////////////////////////////


// Agile methodology is a flexible and collaborative approach to managing projects, particularly in software development. Here's a simple breakdown:

// 1. **Iterative Work**: Instead of planning everything upfront, Agile involves breaking the project into small, manageable parts or "sprints." Each sprint results in a working piece of the product.

// 2. **Frequent Feedback**: After each sprint, the team gets feedback from stakeholders (like customers) to make sure the product is on the right track and to adjust priorities if needed.

// 3. **Collaboration**: Agile emphasizes teamwork and communication. Developers, designers, and stakeholders work closely together and share information regularly.

// 4. **Adaptability**: Agile is about being flexible and adapting to changes quickly. If new requirements come up or if something isn't working, the team can make adjustments without disrupting the entire project.

// 5. **Customer Focus**: The goal is to deliver value to the customer quickly and continuously, ensuring that the product meets their needs and expectations.

// In essence, Agile is about working in small, iterative steps with constant feedback and adaptability to produce a product that better fits the customer's needs.

