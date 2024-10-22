// src/app/components/cart-app/cart-app.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/producto.service';
import { Product } from '../../models/product';
import { CommonModule } from '@angular/common';

@Component({
    selector: 'app-cart-app',
    standalone: true,
    imports: [CommonModule],
    templateUrl: './cart-app.component.html',
})
export class CartAppComponent implements OnInit {
    products: Product[] = [];

    constructor(private service: ProductService) {}

    ngOnInit(): void {
        this.products = this.service.findAll();
    }

    trackByIndex(index: number, item: Product): number {
        return index;
    }
}