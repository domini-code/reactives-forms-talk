import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, Validators, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.scss'],
})
export class FormGroupComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  get addresses(): FormArray {
    return this.contactForm.get('addresses') as FormArray;
  }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit(): void {
    this.contactForm.get('name');
    console.log('Form->' + JSON.stringify(this.contactForm.value));
  }

  isValidField(name: string): boolean {
    const fieldName = this.contactForm.get(name);
    return fieldName.invalid && fieldName.touched;
  }

  onReset(): void {
    this.contactForm.reset();
  }

  onAddNewAddresses(): void {
    this.addresses.push(this.formAddress());
  }

  onRemove(index: number): void {
    this.addresses.removeAt(index);
  }

  private initForm(): void {
    this.contactForm = this.fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: [''],
      userName: ['',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,4}$'),
        ],
      ],
      bill: false,
      addresses: this.fb.array([this.formAddress()])
    });
  }


  private formAddress(): FormGroup {
    return this.fb.group({
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
  }
}
