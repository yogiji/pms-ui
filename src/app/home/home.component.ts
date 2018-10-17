﻿import { Component, OnInit } from '@angular/core';

import { User , Policy } from '../_models';
import { UserService } from '../_services';

@Component({
    moduleId: module.id.toString(),
    templateUrl: 'home.component.html'
})

export class HomeComponent implements OnInit {
    currentUser: User;
    policies : Policy[] = [];
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        this.loadAllUsers();
        this.loadAllPolicies();
    }

    deleteUser(id: number) {
        this.userService.delete(id).subscribe(() => { this.loadAllUsers() });
    }

    private loadAllUsers() {
        this.userService.getAll().subscribe(users => { this.users = users; });
    }
    private loadAllPolicies() {
        this.userService.getAllPolicies().subscribe(policies => { this.policies = policies; });
    }
    private loadUserDetails(id: number) {
        this.userService.getById(id).subscribe(user => { this.currentUser = user; });
    }
}