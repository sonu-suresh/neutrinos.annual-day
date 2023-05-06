import {Component} from '@angular/core';
import {FormGroup} from '@angular/forms';
import {FormlyFieldConfig} from '@ngx-formly/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  form = new FormGroup({});
  model = {};
  fields: FormlyFieldConfig[] = [
    {
      key: 'select',
      type: 'select',
      props: {
        label: 'Are you attending the event?',
        placeholder: 'Select placeholder',
        required: true,
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      },
    },
    {
      key: 'radio',
      type: 'select',
      props: {
        label: 'Would you be attending online or offline? ',
        placeholder: 'Input placeholder',
        required: true,
        options: [
          { label: 'Online', value: 'online' },
          { label: 'Offline', value: 'offline' },
        ]
      },
    },
    {
      key: 'name',
      type: 'input',
      props: {
        label: 'Name ',
        placeholder: 'Enter full name',
        required: true,
       
      },
    },
    {
      key: 'employeeNumber',
      type: 'input',
      props: {
        label: 'Employee Number',
        placeholder: 'Enter employee number',
        required: true,
       
      },
    },
    {
      key: 'foodPreference',
      type: 'select',
      props: {
        label: 'Food Preference',
        placeholder: 'Select Food Preference',
        required: true,
        options: [
          { label: 'Vegetarian', value: 'veg' },
          { label: 'Non Vegetarian', value: 'non-veg' },
        ],
      },
    },
    {
      key: 'shirtSize',
      type: 'select',
      props: {
        label: 'T-shirt Size',
        placeholder: 'Select T-shirt Size',
        required: true,
        options: [
          { label: 'S- Small', value: 's-small' },
          { label: 'M- Medium', value: 'm-medium' },
          { label: 'L- Large', value: 'l-large' },
          { label: 'XL- Large', value: 'xl-extralarge' },


        ],
      },
    },
    {
      key: 'areaofDrop',
      type: 'textarea',
      props: {
        label: 'Preffered area of drop',
        placeholder: 'Preffered area of drop',
        required: false,
        
      },
    },
    // {
    //   key: 'checkbox',
    //   type: 'checkbox',
    //   props: {
    //     label: 'Checkbox',
    //   },
    // },
    // {
    //   key: 'select',
    //   type: 'select',
    //   props: {
    //     label: 'Select',
    //     placeholder: 'Select placeholder',
    //     required: true,
    //     options: [
    //       { label: 'Option 1', value: '1' },
    //       { label: 'Option 2', value: '2' },
    //       { label: 'Option 3', value: '3' },
    //     ],
    //   },
    // },
    // {
    //   key: 'radio',
    //   type: 'radio',
    //   props: {
    //     label: 'Radio',
    //     required: true,
    //     options: [
    //       { label: 'Option 1', value: '1' },
    //       { label: 'Option 2', value: '2' },
    //     ],
    //   },
    // },
  ];

  onSubmit() {
    if (this.form.valid) {
      alert(JSON.stringify(this.model, null, 2));
    }
  }
}