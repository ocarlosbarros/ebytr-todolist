import express from 'express';
import Routes from './routes';

class App {
  public app: express.Express;
  public routes = Routes;

  constructor() {
    this.app = express();
    this.app.use(express.json());
    this.routes(this.app);
  }
  
  public start(PORT: string | number): void {
    this.app.listen(PORT, () => console.log(`running on port ${PORT}`));
  }
}

export default App;
