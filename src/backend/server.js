import axios from 'axios';

export default axios.create({
    baseURL: 'http://ec2-13-229-66-227.ap-southeast-1.compute.amazonaws.com:8070/api/',
    headers: {'Authorization':'Bearer eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiIxNyIsImlhdCI6MTU3OTA2NzA0OCwiZXhwIjoxNTc5NjcxODQ4fQ.T_elOSqGRhfRSP7Br9CyxGXw6azh1Pk2FjOl-2vK5fNf4Z5249KBqu5AYhNkpPNoquQCBTBtz9RI-6QEoFskaw'}
});