import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit, OnDestroy {
  user: { id: number; name: string };
  paramsubscription: Subscription;
  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    console.log(this.user);
    this.user = {
      id: this.activatedRoute.snapshot.params['id'],
      name: this.activatedRoute.snapshot.params['name']
    };
    this.paramsubscription = this.activatedRoute.params.subscribe(data => {
      this.user.id = data['id'];
      this.user.name = data['name'];
    });
  }
  ngOnDestroy(): void {
    this.paramsubscription.unsubscribe();
  }
}
