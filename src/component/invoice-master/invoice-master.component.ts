import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Post, Product } from 'src/models/PostModel';
import { DataServiceService } from 'src/service/data-service.service';

@Component({
  selector: 'app-invoice-master',
  templateUrl: './invoice-master.component.html',
  styleUrls: ['./invoice-master.component.css'],
})
export class InvoiceMasterComponent implements OnInit {
  posts: Post[] = [];
  savedPosts: Post[] = [];
  allProduct: Product[] = [];
  newPost: Post = {
    Color: '',
    Detail: '',
    ProductName: '',
    Quantity: 0,
    Size: '',
  };
  @ViewChild('productsize') productSize!: ElementRef;
  @ViewChild('color') color!: ElementRef;
  @ViewChild('productname') productName!: ElementRef;

  selectedSize = '';
  selectedColor = '';
  onSelectedProductSize(): void {
    this.selectedSize = this.productSize.nativeElement.value;
  }
  onSelectedColor(): void {
    this.selectedColor = this.color.nativeElement.value;
  }
  onSelectedProductName(): void {
    this.newPost.ProductName = this.productName.nativeElement.value;
  }

  constructor(private dataService: DataServiceService) {}

  ngOnInit(): void {
    this.dataService.getInvoice().subscribe((data) => {
      this.savedPosts = data;
      //console.log(data);
    });
    this.dataService.getAllProduct().subscribe((data) => {
      this.allProduct = data;
      console.log(data);
    });
  }

  addProductDetails(): void {
    var tempPost: Post = {
      Color: this.selectedColor,
      Detail: this.newPost.Detail,
      ProductName: this.newPost.ProductName,
      Quantity: this.newPost.Quantity,
      Size: this.selectedSize,
    };
    this.posts.push(tempPost);
  }
  saveProductDetails(): void {
    //alert("Component");
    this.dataService.addInvoice(this.posts).subscribe((data) => {
      console.log(data);
      this.dataService.getInvoice().subscribe((data) => {
        this.savedPosts = data;
        //console.log(data);
      });
    });
  }
  removeItem(index: any): void {
    this.posts.splice(index, 1);
  }
}
