import { Component } from '@angular/core';
import { AdminOrdersServiceService } from '../../admin-orders/services/admin-orders-service.service';
import { ProfileService } from 'src/app/profile/services/profile.service';
import { AuthService } from 'src/app/auth/services/log-in/auth.service';
@Component({
  selector: 'app-admin-side-nav',
  templateUrl: './admin-side-nav.component.html',
  styleUrls: ['./admin-side-nav.component.css']
})
export class AdminSideNavComponent {
  orders: any
  pnedingOrdersCount: any
  user: any;

  avatarUrl =
    '';
  name: string = '';
  email: string = '';
  constructor(public OrderService: AdminOrdersServiceService,
    private profileService: ProfileService,
    private authService: AuthService

  ) { }

  ngOnInit(): void {

    this.OrderService.getAllOrders().subscribe(
      {
        next: (data: any) => {
          this.orders = data;
          this.orders = data.filter((order: any) => order.status === 'pending');

          this.pnedingOrdersCount = this.orders.length

        },
        error: (err) => { console.log(err) }
      }
    )

    this.user = this.authService.getUser();
    if (!this.user.id) {
      return console.log("No User");
    }
    this.profileService.getProfileInfo(this.user.id).subscribe(
      (data: any) => {
        console.log(data);
        this.avatarUrl = data.avatar;
        this.name = data.fname + ' ' + data.lname;
        this.email = data.email;
      },
      (error) => console.log('Error', error)
    );
  }

}


