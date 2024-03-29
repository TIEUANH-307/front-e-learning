import { Component, OnInit } from '@angular/core';


export interface RouteInfo {
    path: string;
    title: string;
    icon: string;
    class: string;
}

export const ROUTES: RouteInfo[] = [
    { path: '/subject',     title: 'Môn học',         icon:'nc-bank',       class: '' },
    { path: '/personal-information',     title: 'Thông tin cá nhân',         icon:'nc-bank',       class: '' },
    { path: '/user-manager',     title: 'Quản lí người dùng',         icon:'nc-bank',       class: '' },
    { path: '/subject-manager',     title: 'Quản lí môn học',         icon:'nc-bank',       class: '' },
  
];

@Component({
    moduleId: module.id,
    selector: 'sidebar-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
        this.menuItems = ROUTES.filter(menuItem => menuItem);
    }
}
