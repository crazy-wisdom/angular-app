import { Component, OnInit } from '@angular/core';

import { NodeService } from '../services/node.service';
import { NodeList } from '../models/node-list';


@Component({
  selector: 'app-node-list',
  templateUrl: './node-list.component.html',
  styleUrls: ['./node-list.component.scss']
})
export class NodeListComponent implements OnInit {
  nodes: any;

  constructor(private nodeService: NodeService) { }

  ngOnInit(): void {
    this.nodeService.getNodeList().subscribe((nodeList: NodeList) => {
      this.nodes = nodeList;
    });
  }

}
