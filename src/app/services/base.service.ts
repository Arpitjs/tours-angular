import { environment } from 'src/environments/environment'
import { HttpHeaders } from '@angular/common/http'

export class BaseService {
    url
    constructor(postfixUrl) {
        this.url = `${environment.baseUrl}/${postfixUrl}`
    }
    getOptions() {
        return {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
        }
      }

      getOptionsWithToken() {
        return {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
          })
        }
      }
}