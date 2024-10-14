import express from 'express';
import maintenanceRouter from './routers/maintenanceRouter.js';
import vehicleRouter from './routers/vehicleRouter.js';
import workshopRouter from './routers/workshopRouter.js';
import dbConfig from './config/db.js';

dbConfig();

const app = express();
app.use(express.json());

app.use('/maintenance', maintenanceRouter);
app.use('/vehicle', vehicleRouter);
app.use('/workshop', workshopRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));