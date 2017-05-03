/// <reference path="vector/vector2.ts"/>
/// <reference path="vector/rectangle.ts"/>

namespace Game {

    export class Snippets {

        constructor(){
            let vect:Vector.Example = new Vector.Example();
            let drag:Draggable.Example = new Draggable.Example();
            let canv:Canvas.Example = new Canvas.Example();
        }
       
    } 
}

window.addEventListener("load", () => new Game.Snippets());