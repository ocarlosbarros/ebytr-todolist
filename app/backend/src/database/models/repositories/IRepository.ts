interface IRepository<T> {
    create(entity: T): Promise<T>;
    findAll(): Promise<Array<T>>;
    findById(id: number):Promise<T|void>
    update(entity: T): Promise<T>;
    delete(id: number): Promise<void>;
}

export default IRepository;