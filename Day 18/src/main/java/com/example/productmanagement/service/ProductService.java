package com.example.productmanagement.service;

import com.example.productmanagement.model.Product;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public interface ProductService {
    Flux<Product> getAllProducts();
    Mono<Product> getProductById(String id);
    Mono<Product> createProduct(Product product);
    Mono<Product> updateProduct(String id, Product product);
    Mono<Void> deleteProduct(String id);
    Flux<Product> getProductsByPriceRange(Double minPrice, Double maxPrice);
}
