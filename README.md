# Assignment 02

* *Date Created*: 13 JUN 2020
* *Last Modification Date*: 14 JUN 2020

## Authors

* Tejas Patel(tejas.patel@dal.ca)


## Getting Started

*Job Tracker* is my web application for the assignment 02. I have implmented four web pages and also implementated form validation wherever need. These four web pages an their paths are as follow:
- Home Page: https://web296-assignment02.herokuapp.com/home
- Job Board Page: https://web296-assignment02.herokuapp.com/job-board
- Activity: https://web296-assignment02.herokuapp.com/job-activity
- Profile Page: https://web296-assignment02.herokuapp.com/profile

### Prerequisites

To run this project on your local machine for development or  for testing purpose, please make sure you have the [Node](https://nodejs.org/en/download/) and the [Angular CLI](https://cli.angular.io/) installed globally. I have used npm to manage the dependencies, so I strongly recommend you to use it. you can install it from [here](https://www.npmjs.com/get-npm).

```
1. Node
2. Angular CLI
3. NPM
```

See the following section for detailed step-by-step instructions on how to install this software / libraries / plug-ins

### Installing
- To copy this git project on your local machine, copy either SSH or HTTPS link to clone the git project.
- Next, run the `git clone` command that clones files from remote server to your local machine. (Make sure you have git installed.)
```
git clone <copied link>
```
- After cloning the application from git, execute `npm install` command in order to resolve all package and dependecies of the project.
```
npm install
```
- Finally, run `ng serve` command on your terminal to build the project locally and start development server to host the appliation. It will displays some log like compiling dependencies and progress of a process of building the project.
```
ng serve
```
- Browse http://localhost:4200 on your browser that navigates to home page of the application.

## Deployment

I have implemented continuous implementation and continuous deployment using GitHub and Heroku. After first time configuration, latest changes are deployed automatically after every `git push` command to my GitHub repository. The web application is deployed and hosted on Heroku server and it can be accessed over internet using this link: https://web296-assignment02.herokuapp.com.

## Built With

* [Angular](https://angular.io/) - The web framework used
* [Node Package Manager (NPM)](https://www.npmjs.com/get-npm) - Dependency Management
* [NodeJS](https://nodejs.org/en/download/) - Runtime Environment Platform
* [Heroku](https://www.heroku.com/) - Production Server to host the application on Internet
* [Bootstrap](https://getbootstrap.com/) - Front-end CSS Framework

## Sources Used
See the sections below for more details.

### nav-bar.component.html

*Lines 1 - 7*

```
<nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
        <a class="navbar-brand" href="#">Job Tracker</a>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive"
            aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
```

The code above was created by adapting the code in [Nav Bar Component- Bootstrap](https://getbootstrap.com/docs/4.5/components/navbar/#supported-content) as shown below: 

```
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
```
- This code does not require extra dependencies to implement. To use this code, I have followed documentation to understand which classes are used to for different type of navigation bar using bootstrap. 
- This code was used to get reference and to understand bootstrap classes to implement navigation bar in my application.
- I have added content to display in navigation bar and changed or added classes based on my requirement to implement such as added `fixed-top`.

### home.component.html

*Lines 69 - 76*

```
  <a class="carousel-control-prev" href="#featuresCarousel" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#featuresCarousel" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
```

The code above was created by adapting the code in [With Controls Carousel- Bootstrap](https://getbootstrap.com/docs/4.5/components/carousel/#with-controls) as shown below: 

```
 <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
```

- I have implmented this code in my carousel code section and it does not require extra dependencies for adding this control to carousel. 
- This code was used to add controls to navigate back and forth in carousel slider.
- This code was only modified by changing href value that will reference to my carousel.

### job-board.component.ts

*Lines 129 - 138*

```
drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex);
    }
  }
```

The code above was created by adapting the code in [Drag&Drop connected sorting group(TS)- Angular](https://material.angular.io/cdk/drag-drop/overview#transferring-items-between-lists) as shown below: 

```
drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }
```

- To used this code, first I have installed dependecy `@angular/cdk/drag-drop` for drag and drop from angular. Also, I have imported `MatDialog`, `MAT_DIALOG_DATA`, `MatDialogRef` components of this dependency in my job-board.component.ts file. 
- I have used this code to along with change in UI, list of data in TS file should also be changed and move among lists of groups when a drag and drop event happend in UI. 
- The code was implemented as it is in reference and no changes are added.

### job-board.component.css

*Lines 64 - 86*

```
  .cdk-drag-preview {
    box-sizing: border-box;
    border-radius: 4px;
    box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
                0 8px 10px 1px rgba(0, 0, 0, 0.14),
                0 3px 14px 2px rgba(0, 0, 0, 0.12);
  }
  
  .cdk-drag-placeholder {
    opacity: 0;
  }
  
  .cdk-drag-animating {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
  
  .example-box:last-child {
    border: none;
  }
  
  .example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
    transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
  }
```

The code above was created by adapting the code in [Drag&Drop connected sorting group(CSS)- Angular](https://material.angular.io/cdk/drag-drop/overview#transferring-items-between-lists) as shown below: 

```
.cdk-drag-preview {
  box-sizing: border-box;
  border-radius: 4px;
  box-shadow: 0 5px 5px -3px rgba(0, 0, 0, 0.2),
              0 8px 10px 1px rgba(0, 0, 0, 0.14),
              0 3px 14px 2px rgba(0, 0, 0, 0.12);
}

.cdk-drag-placeholder {
  opacity: 0;
}

.cdk-drag-animating {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}

.example-box:last-child {
  border: none;
}

.example-list.cdk-drop-list-dragging .example-box:not(.cdk-drag-placeholder) {
  transition: transform 250ms cubic-bezier(0, 0, 0.2, 1);
}
```

- To used this code, first I have installed dependecy `@angular/cdk/drag-drop` for drag and drop from angular. Also, I have imported `MatDialog`, `MAT_DIALOG_DATA`, `MatDialogRef` components of this dependency in my job-board.component.ts file. 
- I have used this code as provided by Angular to add animation and shadow to placeholder during drag and drop.
- The code was implemented as it is in reference and no changes are added.

## Design Choices
### Color Palette
- I have used different darks colors to seperate different feature slide in carousel slider. Dark color holds the attention of the user and white texts on it gets users' attention and guide users to follow them.
- I have used black color theme for entire home page because *Black is for power, elegance and sophistication* based on this [article](https://99designs.ca/blog/tips/color-meanings/#:~:text=Red%20is%20for%20energy%2C%20passion%20and%20danger&text=Red%20is%20associated%20with%20the,a%20powerful%20color%20in%20branding.).
- This page have same consistent navigation bar that have the same theme.
- In this page, job application cards have different background colors to differentiate it from others in the group.
- Buttons in Activity page and Profile page have two colors blue and grey that help users to identify primary and secondary action of the module. 

### Typography
- The fonts are consistent across the application. I have used defualt fonts provide by Bootstrap framework.
- The font size for different type of text are defined using by html h1-h6 tags and bootstrap classes.
 
### Design Justification
- I have considered and followed Nielsen Heuristics Priciples during implementing design for the web application.
- The design of the web application is very simple and easy to follow by users. 
- The design is responsive and have considered variety of users based on device size. The web application does not flooded with content in smaller devices.
- However, Job board page does not break down content into vertical space for smaller devices. Because, to drag and drop job application card between different group it is very difficult to hold the card and move downwards rather it is easy to do this action in horizontal scrolling.

## Front-end API and Framework choices
- Angular Framework: It has everything that a front-end framework needs. It has inbuild routing component and it is very easy to use. It has form validation support. It also have support for animation, material desing and many more. The primary concern is seperation of html and typescript components and it is easy to write and manage code.
- Bootstrap Framework: It has tremendous amount of classes and apis for most components such as navigation bar, input box, typography, and many more. It also has great community support.


## Acknowledgments

* https://www.digitalocean.com/community/tutorials/angular-drag-drop by Sumit Vekariya - This blog was very helpful to me to gain idea to how I can implement my job board screen and knowledge about angular drag and drop.
* Links of the images used in the applications are:
    - Home Page
        - Feature 1: https://image.flaticon.com/icons/svg/2868/2868034.svg
        - Feature 2: https://image.flaticon.com/icons/png/512/3003/3003418.png
        - Feature 3: https://image.flaticon.com/icons/png/512/1717/1717683.png
        - Feature 4: https://image.flaticon.com/icons/png/512/2936/2936612.png
        - Feature 5: https://www.flaticon.com/premium-icon/icons/svg/2952/2952972.svg
        - User Profile Male: https://image.flaticon.com/icons/svg/3011/3011279.svg
        - User Profile Female: https://image.flaticon.com/icons/svg/3011/3011284.svg
    - Profile Page
        - User Profile: https://image.flaticon.com/icons/svg/2919/2919600.svg
* [Font Awesome](https://fontawesome.com/) library is used for icons and list of icons are as follow:
    - Plus icon and Delete icon on Job board page.
    - Camera and Pen icon on Profile page.