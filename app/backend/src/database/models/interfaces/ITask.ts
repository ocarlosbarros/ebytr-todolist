interface ITask {
    id?:number,
    userId?: number,
    name:string;
    description:string;
    status: string;
    createdAt: Date,
    updatedAt: Date,
}

export default ITask;