import { defer } from '@defer.run/client';
import axios from 'axios';

async function checkStatus(params = {}) {
    console.log(params)
    const status = await axios('https://status.openai.com/api/v2/status.json');
    console.log(status.data.status.description)

}

export default defer(checkStatus)