// src/app/services/product.service.ts
import { Injectable } from '@angular/core';
import { Product } from '../models/product';
import { products } from '../data/product.data';

@Injectable({
  providedIn: 'root'  // Asegúrate de que esto esté presente
})
export class ProductService {
  constructor() { }
  
  findAll(): Product[] {
    return products;
  }
}