export type d3BaseSelection = d3.Selection<any,unknown,any,any>


export enum PlatFormClassesEnum {

  ROOT_VIEW_CLASS = 'landing__visual',
  STICKY_RECT_CLASS = 'sticky_rect_class'

}


export interface Point {
   x:number;
   y:number;
}

export interface Dim {
  width:number;
  height:number;
}


export type Rect2D = Point & Dim;
