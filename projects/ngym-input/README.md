# NgymInput

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.0.

## Description

This library has basic input elements compatible to Reactive Forms. You can use in your ```<form>``` with ```formControlName``` or you can use with ```[(ngModel)]```. 

## Examples
### Input group button

```html
    <ngym-input-group-button
        formControlName="note"
        [faClass]="'fa-regular fa-circle-minus'"
        [faRobotClass]="'robot_contactCreate_deleteNote'" 
        [placeholder]="'Enter Note'"
        (onClickEmitter)="myFuction()">
    </ngym-input-group-button>
```

### Input password

```html
    <ngym-input-password 
        [(ngModel)]="inputValue">
    </ngym-input-password>
```

### Input text

```html
    <ngym-input
        [(ngModel)]="inputValue">
    </ngym-input>
```

## CSS

You can always override css classes in ```input.scss```. such as ```.form-control``` and ```.input-group```.for different visual elements file.

## Code scaffolding

Run `ng generate component component-name --project ngym-input` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module --project ngym-input`.
> Note: Don't forget to add `--project ngym-input` or else it will be added to the default project in your `angular.json` file. 

## Build

Run `ng build ngym-input` to build the project. The build artifacts will be stored in the `dist/` directory.

## Publishing

After building your library with `ng build ngym-input`, go to the dist folder `cd dist/ngym-input` and run `npm publish`.


## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
