import {Directive, Input, OnChanges, HostBinding} from '@angular/core';

enum CardType {
  VISA = 'visa',
  MASTERCARD = 'mastercard',
  AMERICAN_EXPRESS = 'american-express',
  UNKNOWN = 'unknown'
}

@Directive({
  selector: '[ccLogo]'
})
export class CreditCardImageDirective implements OnChanges {


  @HostBinding('src')
  imageSource;

  @Input()
  cardNumber: string

  ngOnChanges() {
    this.imageSource = 'assets/' + this.getCardTypeFromNumber() + '.png';
  }

  getCardTypeFromNumber(): CardType {

    if (this.cardNumber) {

      if (this.cardNumber.startsWith('37') || this.cardNumber.startsWith('34')) {
        return CardType.AMERICAN_EXPRESS;
      } else if (this.cardNumber.startsWith('4')) {
        return CardType.VISA;
      } else if (this.cardNumber.startsWith('5')) {
        return CardType.MASTERCARD;
      }

    }
    return CardType.UNKNOWN;
  }

}
