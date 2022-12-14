import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Product from 'src/app/models/product';
import { DataService } from 'src/app/servises/dataService';
import ProductService from 'src/app/servises/prodService';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css'],
})
export class ItemComponent implements OnInit {
  @Input() product = new Product();
  curr: string = "USD"

  constructor(private pService: ProductService,
    private router: Router,
    private data: DataService) {
      this.data.currentCurrency.subscribe(c => this.curr = c);
    }

  ngOnInit(): void {
    
  }
}
