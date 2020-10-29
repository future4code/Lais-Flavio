// Exe 1, 
function deleteLast(
    colectionsNumbers: number[],
    index: number
    ): number {
        const deleteNumber: number = colectionsNumbers[index]
        for(let i = index; i < colectionsNumbers.length; i++) {
            colectionsNumbers[i] = colectionsNumbers [i + 1]
        }
        colectionsNumbers.length--
        return deleteNumber
    }
    const colectionsNumbers = [5, 84, 56, 42, 35 ]

console.log(deleteLast(colectionsNumbers, 4))
console.log(colectionsNumbers)

//Exe 2

export class List {
    constructor(
        public value: any,
        public next: List | null = null
    ) {}
}

export class LinkList {
    constructor(
        public start: List | null = null
    ){}
    public addToTail(value: any): void {
        if(!this.start) {
            this.start = new List(value)
            return
        }

        let currentNode: List = this.start
        while(currentNode.next !== null) {
            currentNode = currentNode.next
        }
        currentNode.next = new List(value)
    }

    public nodeSearch(value: any): List | null {
        let currentNode: List | null = this.start
        while(currentNode !== null && currentNode.value !== value ){
            currentNode = currentNode.next
         }
   
         return currentNode
    }
}

const node: List = new List(
    "A Gaivota",
    new List(
        "O Pombo"
    )
)
export const labenuClasses: LinkList = new LinkList(node)

export class Stack{
    public nodes: any[]=[]
    public isEmpty(): boolean {
        return this.nodes.length === 0
    } public push(value: any): void{
        this.nodes[this.nodes.length] = value
     }
  
     public pop(): any{
        const deletedElement: any = this.nodes[this.nodes.length - 1]
  
        this.nodes.length --
  
        return deletedElement
     }
}
export class Queue{
    public nodes: LinkList = new LinkList()
 
    public isEmpty(): boolean{
       return this.nodes.start === null
    }
 
    public enqueue(value: any):void{
       this.nodes.addToTail(value)
    }
 
    public dequeue(): List | null {
       const deletedElement: List | null = this.nodes.start
 
       if(this.nodes.start === null) return deletedElement
 
       this.nodes.start = this.nodes.start.next
 
       return deletedElement
    }
 }

 const queue: Queue = new Queue()
 queue.enqueue("O Sabiá")
 queue.enqueue("O Gavião")
 console.log(queue)

 queue.dequeue()
 console.log(queue)
