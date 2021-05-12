import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MegaMenuItem, PrimeIcons } from 'primeng/api';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  logo: any = '/assets/img/logo 4.png';
  items: MegaMenuItem[];
  constructor() { }

  ngOnInit(): void {
    this.items = [
      {
          label: 'Todos os Departamentos', icon: PrimeIcons.BARS,
          items: [
              [
                  {

                      items: [{label: 'Mesa'}, {label: 'Cadeira'}, {label: 'Sofa'}, {label: 'Rack'}]
                    }
              ]
          ]
      },
      {
          label: 'Users', icon: 'pi pi-fw pi-users',
          items: [
              [
                  {
                      items: [{label:  'Login | Cadastro',routerLink: '/cliente-cadastro'}]
                  }
              ]
          ]
      }
  // tslint:disable-next-line: semicolon
  ]
}
  }


