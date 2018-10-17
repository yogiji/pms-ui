import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders  } from '@angular/common/http';

import { User, Policy } from '../_models';

const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()
export class UserService {
    constructor(private http: HttpClient) { }

    getAll() {
        return this.http.get<User[]>('http://localhost:8080/policy-management/users/');
    }

    getAllPolicies() {
        return this.http.get<Policy[]>('http://localhost:8080/policy-management/policies/');
    }

    getById(id: number) {
        return this.http.get<User>('http://localhost:8080/policy-management/users/' + id);
    }

    create(user: User) {
        return this.http.post('http://localhost:8080/policy-management/users/', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}