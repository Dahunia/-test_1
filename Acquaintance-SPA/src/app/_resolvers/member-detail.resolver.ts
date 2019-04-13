import { Injectable } from '@angular/core';
import { User } from '../_models/user';
import { Resolve, ActivatedRouteSnapshot, Router } from '@angular/router';
import { AlertifyService } from '../_services/alertify.service';
import { UserService } from '../_services/user.service';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable()
export class MemberDeatailResolver implements Resolve<User> {
    constructor(private userService: UserService,
                private router: Router,
                private alertify: AlertifyService) {}

    resolve(route: ActivatedRouteSnapshot): Observable<User> {
        // This automaticallly subscribes to the method so we don't need to subscribe.
        // But we need catch error therefore use the pipe method
        return this.userService.getUser(route.params.id).pipe(
            catchError(error => {
                this.alertify.error('Проблемы при получении данных.');
                this.router.navigate(['/members']);
                return of(null);
            })
        );
    }
}
