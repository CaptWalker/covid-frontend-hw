import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-patient-physical-health',
  templateUrl: './patient-physical-health.component.html',
  styleUrls: ['./patient-physical-health.component.scss']
})
export class PatientPhysicalHealthComponent implements OnInit {

  physicalAndHealthForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private service: CommonService) { }

  symptomStatus = false;
  isDisabled = false;
  medicalInsuranceStatus = false;
  agreementStatus = false;

  ngOnInit(): void {
    this.physicalAndHealthForm = this.formBuilder.group({
      heightCm: [null],
      weightKg: [null],
      travelIn15Days: [],
      age: [null],
      travelHistory: this.formBuilder.array([
        this.initTravel()
      ]),
      quarantineIn15Days: [null],
      bodyMassIndex: [],
      symptoms: [],
      cough: [],
      cold: [],
      throatPain: [],
      bloodPressure: [],
      diabetes: [],
      lungDisease: [],
      heartPatient: [],
      boneFracture: [],
      accidentalHistory: [],
      workType: [],
      junkFoodConsumptionFreq: [1],
      exerciseDurationPerDay: [],
      medicalInsurance: [],
      doctorDetailDTO: []
    });
    //this.getPatient();

  }

  // getPatient = () => {
  //   this.service.getPatient().subscribe((response)=>{
  //     console.log(response);
  //   });
  // }

  initTravel = () => {
    return this.formBuilder.group({
      travel: [],
      dateOfTravel: [],
      fromPlace: [],
      toPlace: [],
      stayDurationInDay: []
    });
  }

  addTravel = () => {
    const control = <FormArray> this.physicalAndHealthForm.controls['travelHistory'];
    control.push(this.initTravel());
  }

  removeTravel = (i: number) => {
    const control = <FormArray> this.physicalAndHealthForm.controls['travelHistory'];
    control.removeAt(i);
  }

  registerHealthAndPhysicalData = (data) => {         // I have to put patientid physicalData and doctorDetailDTO as a object a for request
    data.junkFoodConsumptionFrequency = data.junkFoodConsumptionFrequency === null ? 1 : data.junkFoodConsumptionFrequency;
    data.bodyMassIndex = (data.weightKg * 100 * 100) / (data.heightCm * data.heightCm);
    data.doctorDetailDTO = { doctorId: null };
    console.log(data);
  }

  symptomStatusToggle = () => {
    this.symptomStatus = !this.symptomStatus;
  }

  medicalInsuranceToggle = () => {
    this.medicalInsuranceStatus = !this.medicalInsuranceStatus;
  }

  agreementToggle = () => {
    this.agreementStatus = !this.agreementStatus;
  }
}
