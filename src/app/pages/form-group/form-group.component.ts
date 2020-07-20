import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  contactForm = this.fb.group({
    firstName: ['', [Validators.required, Validators.minLength(3)]],
    userName: [
      '',
      [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
      ],
    ],
    city: ['', [Validators.required, Validators.minLength(3)]],
    state: ['', [Validators.required, Validators.minLength(3)]],
    zip: [
      '',
      [
        Validators.required,
        Validators.minLength(5),
        Validators.pattern('^[0-9]*$'),
      ],
    ],
  });

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('Form->' + JSON.stringify(this.contactForm.value));
  }

  isValidField(name: string): boolean {
    const fieldName = this.contactForm.get(name);
    return fieldName.invalid && fieldName.touched;
  }

  onSetDefault(): void {
    const contact = {
      firstName: 'Bezael',
      userName: 'dominicode',
      city: 'Madrid',
      state: 'Madrid',
      zip: '28001',
    };

    this.contactForm.setValue(contact);
  }

  onPatchValue(): void {
    this.contactForm.patchValue({ city: 'Madrid' });
  }

  onSetValue(): void {
    this.contactForm.setValue({ firstName: 'Dominicode' });
  }

  onReset(): void {
    this.contactForm.reset();
  }
}
