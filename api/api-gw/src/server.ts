import 'module-alias/register';
import * as process from 'process';

/** App */
import app from './app';

const port = process.env.PORT || 3000;

app.listen(port, () => {
    console.log(`API Gateway running on port ${port}`);
});
