import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  data: Array<any>;
  constructor() {
      this.data = [
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,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',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,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',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,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',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,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',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAY1BMVEX///8AgcIAf8EAfMAAd74Aer8Ae78Adb30+fz6/f7w9/u31OkAg8OKudyrzeUujsiexeLh7vaVwN/Z6fRsqtXp8/lGl8zD2+1go9F/tNnR5PE8k8qkyeMdiMVRnM600uh3r9dBIDBTAAAGaklEQVR4nO2d2XbiMAxAQbYTICthDW1o/v8rJ1DotOB4UaiXHt335ki1LcmSLGYzgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAI9+wO70W/3fZtnW18y/J6duURUpGwK0Lw9K04+ZbplWR7LgDm3wHG82blW7AXUYP4qd0dwbdr38K9gHJMvwuM90vfAk5kt+fj+l11hMy3jJP40Oh3OZB861vKCbRcp9+FpFr4FhTLUZgoOCwj7HyLisNUwYvriFLFrbGCl1WM0DU2RmfwS8XKt7zWnFIbBQfvH5tFXYLWTTyQRuYXt8xSwcHaRBXdbKwO4Ses9S21DXvbPXqBR+QybM3MbRF733Kbc8Qs4bCI0URvO9QSDgFq7VtyU+oEp2E8bv8Nt0kHnxiJrVkgXMUnovQtuxkHi5D7JyyS0K2xjme+6HzLboZ9xPZFEkfkhjY0g0eMI7uYoxWc8zgS4dYXp/+Ig2/hjcAfw1g0/PtrmP95DasJtjSOwiLy7nTVMI6kYoE2NQC+ZTcjQ8elcPYtuxk79N2CNb5lN6TDahhJSDObtciDGMsxnM02yDyNr2Tb6lQ2bdu3TXkwjfyRHtGHN1x8bPOUC3Ftg0kEF+faRMsSZU3h7df1eeRw5oI9tMEIXtX6tCYqNOWuQ7Yyl7cZQMJ7XeiBWUTXS5jlCiEZLzR/3tkvYur0FK7OGq+dzNWu62Dt9ROnpaeD0Hu0VC2RrTkFp2m2JjURT+xVibHa8iQ6zUFtDXcY6xQGZ223TVOXdtS8SwRyhYpWDiN9d6ffrLdpg+nGN6pN+J26LKvVVruLjfswCw3TD4cKWrfBjFrUuekuZeDyzrS0028+HmqtDPcC8LPTWkWPuNnJv2SWyoDEcQMt5mIn5JmHs5FLdZ62wLTByHuZ1vr/FeN57bqYhmyDkRVuRypsNycJTKRd6yEpg0zlSox9KzmFw61LwHy4RbPuWGReehJWyPTKnD+qWDwbUkjfymvo6bPK+45sgxlU/OEVl5L2Z1GFkCicUJ1O8vK+NquGPbscHkTfIb4N5rpI4tyUWVlcXjg9KxhGLhvfBvPJYCDFY+Lqk1DaZJqJGo6rPhL2OGdCG4yaYHq5JhgaJcB8a3ZnQvldSSincDabZEoVJC4zFEqwEY2OcPor/r6GUlf2Cg2DeQyDrk1rCKc4b3QrRwB735rdwVbftQTzFgZXuDUgmAdNlpUGCWOJ/GA6fycFNSA4B+A8kXzEbeVMASZZeteBV/VmuAMvN++yEQOK5L9TTuhtmlTfvPpaUj9mXRgbFduCzvuf3ymflxFGEseOsa3b3hV8El62GxIoTt5f3y1RgZvsdpRJVATGBeTd/tg3mbc9i1tE2ZdGEgaDPwFgTHA4ln7agRFtMPLymi5xByDSs49Lh33lQvTyLxlkfYB3Lou/N2QFB6WUY87cLDcpOvepcMtOn3TMZhjWgD3M31nYdYmM325Nv8Ny112la4t9quoSMY5ygbtOAqwVs7nMFbTpGHLaL3RhnRuF4MBVuWyrJwnc9UP85ZvBTmVMaQbtnpU47Rm60uimkAE/q4NMy4p56txrbCrlLhNM80+3HhwB7qvfWTe2jiBEoZPHOnHHjk60+klW8efLxnBDgEZ7CyrtL9NOO0y/WBdV+r+sO9wKBJ9vDSRZGjucb+S/r4+UXVacOyEEF2K+70uz+AOVehVea1TL1crifr7APZkJpRhuQINrzAmnhKMFmdEKp8ChA52VDKbAoQP90jmcergG9Ht88OH1ESzQ5fJw+lLU4IsD4zmRsJhQhwynqUEJfqRCLKZmQn9cOE0NSiYM/gimHq6GNIxfwynnUPeAOgwm9OVEYkvxjxpi8YcTOuKDabxRY/ryULaGvmU3BN3kGMsQJbypiWaOsP3EiBuRHMMZeqxgPIOSsbeLYF6e6MGNM4vqpwNQgVsSx9XpE4xLjCVJcwPxDu7pqW3gWLePxZPwvmE7uwBEHHM9v/Ee8ASeF2Ez52aexmRHvzD/ya5AnnrbY6yiZmxYwLRG5gYCecuOojQYiwaRpC5GWFeanQp8H52beKDmihgVEl1vVQwsWtkciSsijGcm01k1+fNCAuOd8xFDv8ip7bhg7PLaAq4DNHhVxDFg3oLdodnuu3yed+dtfYjdvBAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRAEQRBY/gFLpk3Y/SBRJAAAAABJRU5ErkJggg==',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,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',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRdiLbP6hiUSKW0fInszX4OKAkLes4FaUE2ARcK6oKit4_S6KIY',
          name: 'Bitcoin',
          price: 589000,
          ask: 589998,
          bid: 585000,
          change: 1.19,
          volume: 4.6221
        },
        {
          img: 'https://s3.ap-south-1.amazonaws.com/koin-images/ether.png',
          name: 'Ether',
          price: 50338,
          ask: 50300,
          bid: 50001,
          change: -1.6,
          volume: 114.632
        },
        {
          img: 'data:image/png;base64,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',
          name: 'Ripple',
          price: 48,
          ask: 48.26,
          bid: 4810,
          change: 0,
          volume: 209580
        },
        {
          img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWsEr5zEtp7nOxIyqwC24Fz-l0mUBFSolMNf4LIXVXoHp6MEwV4Q',
          name: 'Bitcoin cash',
          price: 86900,
          ask: 86900,
          bid: 85051,
          change: 2.23,
          volume: 52.6997
        }
      ];
   }
  ngOnInit() {
    
  }



}
