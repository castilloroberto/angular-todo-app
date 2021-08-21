export class Todo {
    content:string = '';
    done:boolean = false

}
export interface TodoIf {
    content:string
    done?:boolean 
} 
export type TodoType = {
    content:string
    done?:boolean // "?" es opcional
} 