import { Component, inject, input, OnInit, signal } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductCaraouselComponent } from '@products//components/product-caraousel/product-caraousel.component';
import { Product } from '@products//interfaces/product.interfaces';
import { ProductsService } from '@products//services/products.service';
import { FormErrorLabelComponent } from '@shared/components/form-error-label/form-error-label.component';
import { firstValueFrom, single } from 'rxjs';
import { FormUtils } from 'src/app/utils/form-utils';

@Component({
  standalone: true,
  imports: [
    ProductCaraouselComponent,
    ReactiveFormsModule,
    FormErrorLabelComponent,
  ],
  selector: 'product-details',
  templateUrl: './product-details.component.html',
})
export class ProductDetailsComponent implements OnInit {
  product = input.required<Product>();

  fb = inject(FormBuilder);
  productService = inject(ProductsService);
  router = inject(Router);
  wasSaved = signal(false);

  imageFileList = signal<FileList |  null>(null);
  tempImages = signal<string[]>([]);

  productForm = this.fb.group({
    title: ['', [Validators.required]],
    description: ['', [Validators.required]],
    slug: [
      '',
      [Validators.required, Validators.pattern(FormUtils.slugPattern)],
    ],
    price: [0, [Validators.required, Validators.min(0)]],
    stock: [0, [Validators.required, Validators.min(0)]],
    sizes: [['']],
    images: [[]],
    tags: [''],
    gender: ['men', [Validators.pattern(/men|women|kid|unisex/)]],
  });

  sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  ngOnInit(): void {
    this.setFormValue(this.product());

    //this.productForm.reset(this.product() as any);
  }

  setFormValue(formlike: Partial<Product>) {
    this.productForm.reset(this.product() as any);
    //this.productForm.patchValue(formlike as any);
    this.productForm.patchValue({ tags: formlike.tags?.join(',') });
  }

  async onSubmit() {
    const isValid = this.productForm.valid;
    this.productForm.markAllAsTouched();

    if (!isValid) return;
    const formValue = this.productForm.value;

    const productLike: Partial<Product> = {
      ...(formValue as any),
      tags:
        formValue.tags
          ?.toLowerCase()
          .split(',')
          .map((tag) => tag.trim()) ?? [],
    };

    if (this.product().id === 'new') {
      const product = await firstValueFrom(
        this.productService.createProduct(productLike)
      );
      //Crear producto

      this.router.navigate(['/admin/products', product.id]);
    } else {
      await firstValueFrom(
        this.productService.updateProduct(this.product().id, productLike)
      );
    }

    this.wasSaved.set(true);
    setTimeout(() => {
      this.wasSaved.set(false);
    }, 2000);
  }

  onSizeClicked(size: string) {
    const currentSize = this.productForm.value.sizes ?? [];

    if (currentSize.includes(size)) {
      currentSize.splice(currentSize.indexOf(size), 1);
    } else {
      currentSize.push(size);
    }

    this.productForm.patchValue({ sizes: currentSize });
  }


  //Images
  onFilesChange(event: Event) {
    const filesList = (event.target as HTMLInputElement).files;
    this.imageFileList.set(filesList);
    this.tempImages.set([]);

    const imagesUrls = Array.from(filesList ?? []).map(
      file => URL.createObjectURL(file)
    )

    this.tempImages.set(imagesUrls);

    console.log({imagesUrls});
  }
}
