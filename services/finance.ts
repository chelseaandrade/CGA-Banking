import  axios  from '../utils/axios';

export const amount = async (data: any) => await axios.post('/api/v1/finance', data).then((res: any) => res.data);

export const getFinance = async (params:any) => await axios.get('/api/v1/finance', { params }).then((res: any) => res.data);
export const getTotal = async (params:any) => await axios.get('/api/v1/finance/getTotal', { params }).then((res: any) => res.data);
