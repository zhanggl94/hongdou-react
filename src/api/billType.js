import axios from '../request/axios'
import baseUrl from './baseUrl'

const billType = {
    select: params => axios.get(baseUrl.billType.select, { params }),
}
export default billType