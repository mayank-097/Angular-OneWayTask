import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'onewayTask';

  sum:number =0;
  per:number=89;
  fact:string[] =[];
  doSum(num1:string,num2:string)
  {
    let n1:number = parseInt(num1);
    let n2:number = parseInt(num2);
    this.sum=n1+n2;
  }
   
  calcfact(num:string)
  {
    let n = parseInt(num);
    for(var i=1;i<=n/2;i++)
    {
      
      if((n%i)==0)
      {
        this.fact.push(i+" x "+(n/i));
        console.log(i+" x "+(n/i));
      }

    }
  }

  
}




