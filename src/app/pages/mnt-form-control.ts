import { FormControl } from '@angular/forms';
export class MntFormControl extends FormControl {
  myValue: string;
  setValue(value: string | null, options: any) {
    if (!value) {
      super.setValue('', { ...options, emitModelToViewChange: true });
      return;
    }
    if (value.match(/[^0-9| .,/]/gi)) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });

      return;
    }

    if (value.length > 15) {
      super.setValue(this.value, { ...options, emitModelToViewChange: true });

      return;
    }

    this.myValue = value.split(' ').join('');
    if (this.myValue.length % 3 === 0) {
    

      super.setValue(value + ' ', { ...options, emitModelToViewChange: true });
      return;
    }
    super.setValue(value, { ...options, emitModelToViewChange: true });
  }
}
