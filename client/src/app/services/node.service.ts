import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

import { Node } from '../models/node';
import { NodeList } from '../models/node-list';


@Injectable({
  providedIn: 'root'
})
export class NodeService {
  url: string = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http:HttpClient) { }

  getNodeList():Observable<NodeList> {
    return this.http.get<NodeList>(`${this.url}`);
  }
}
