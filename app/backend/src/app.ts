import express, { RequestHandler } from 'express';
import Routes from './routes';

class App {
  public app: express.Express;
  public routes = Routes;
  public accessControl: RequestHandler;

  constructor() {
    this.app = express();
    this.config();
    this.app.use(this.accessControl);
    this.app.use(express.json());
    this.routes(this.app);
  }

  private config():void {
    this.accessControl = (_req, res, next) => {
      res.header('Access-Control-Allow-Origin', '*');
      res.header('Access-Control-Allow-Methods', 'GET,POST,DELETE,OPTIONS,PUT,PATCH');
      res.header('Access-Control-Allow-Headers', '*');
      next();
    }
  };
    
  
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`running on port ${PORT}`));
  }
}

export default App;
