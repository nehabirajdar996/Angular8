import { Component } from '@angular/core';

@Component({
  selector: 'app-password-gen',
  templateUrl: './password-gen.component.html',
  styleUrls: ['./password-gen.component.css']
})
export class PasswordGenComponent{
  includeLetters = false;
  includeNumbers= false;
  includeSymbols = false;
  password = '';
 length = 0;
  // constructor() { 
     
  // }
  // ngOnInit() {
  // }

  onButtonClick() {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols ='!@#$%^&*()';

    let validChars = '';
    if(this.includeLetters){
   validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }

    let generatedPassword = '';
    for(let i=0; i<this.length; i++){
       const index = Math.floor(Math.random() * validChars.length);
       generatedPassword += validChars[index];
      
    }
    this.password =generatedPassword; 
    
    
  }
  onChangeUseLetters(){
     this.includeLetters = !this.includeLetters;
  }
  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers;
 }
 onChangeUseSymbols(){
  this.includeSymbols = !this.includeSymbols;
}
onChangeLength(value: string){
  const parsedValue = parseInt(value);

  if(!isNaN(parsedValue)){
    this.length = parsedValue;
  }
}
}
