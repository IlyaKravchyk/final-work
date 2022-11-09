import { makeAutoObservable, runInAction } from "mobx";

export class ProductsCategoryStore {

   categoriesProducts = undefined;

   constructor() {
      makeAutoObservable(this)
   }

   loadCategoriesProducts = () => {
      if (!this.categoriesProducts) {
         fetch('http://localhost:3010/products')
            .then(response => response.json())
            .then(data => runInAction(() => this.categoriesProducts = [...data]))
      }
   }

   addToCart = (product) => {
      console.log(product);
   }

}
