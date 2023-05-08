import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';

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
      key: 'name',
      type: 'input',
      props: {
        label: 'Name ',
        placeholder: 'Enter full name',
        required: true,

      },
    },
    {
      key: 'department',
      type: 'select',
      props: {
        label: 'Department',
        placeholder: 'Select department',
        required: true,
        options: [
          { label: 'Product', value: 'Product' },
          { label: 'Product Implementation', value: 'ProductImplementation' },
          { label: 'Technology Services', value: 'technologyServices' },
          { label: 'Solutions', value: 'solutions' },
          { label: 'Tech Venture', value: 'techVenture' },
          { label: 'HR', value: 'humanResource' },
          { label: 'Finance', value: 'finance' },
          { label: 'Operations', value: 'operations' },
          { label: 'Sales', value: 'sales' },
          { label: 'Pre-Sales', value: 'pre-sales' },
          { label: 'Marketing/Distribution', value: 'marketing' },
          { label: 'Alliance', value: 'alliance' },
        ],
      },
    },
    {
      key: 'attending',
      type: 'select',
      props: {
        label: 'Are you attending the event?',
        placeholder: 'yes/no',
        required: true,
        options: [
          { label: 'Yes', value: 'yes' },
          { label: 'No', value: 'no' },
        ],
      },
    },
    {
      key: 'mode',
      type: 'select',
      props: {
        label: 'Would you be attending online or offline? ',
        placeholder: 'offline/online',
        required: true,
        options: [
          { label: 'Online', value: 'online' },
          { label: 'Offline', value: 'offline' },
        ]
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
        placeholder: 'office or on the way back to office',
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