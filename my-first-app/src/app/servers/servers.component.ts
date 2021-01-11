import { Component, OnInit } from '@angular/core';
// import {FormsModule} from '@angular/forms'

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit {
  allowNewServers = false
  serverCreationStatus = 'No server was created'
  serverName = 'TestServer'
  serverCreated = false
  servers = ['testServer', 'testServer 2']
  constructor() {
    setTimeout(() => {
      this.allowNewServers = true
    }, 2000)
   }

  ngOnInit(): void {
  }
  onServerCreation() {
    this.serverCreated = true
    this.servers.push(this.serverName)
    this.serverCreationStatus = `Server was created!!! Name of the server is ${this.serverName}`
  }
  onInput(event: Event) {
    // console.log(event.target.value)
    this.serverName = (<HTMLInputElement>event.target).value
  }
}
