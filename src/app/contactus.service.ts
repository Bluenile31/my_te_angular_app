import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Contactus } from './contactus';

@Injectable({
  providedIn: 'root'
})
export class ContactusService {

  constructor() { }
  contact: Contactus[]=[
    {
      empid: 1001,
      ename:'Nilesh Hosure',
      edesg:'Co-Head NH furniture',
      phno:9876547654,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwWiP7r_Qf_yvqEvPF-DhahSsSdEpJ0CaBBw&usqp=CAU'
    },
    {
      empid: 1002,
      ename:'Jagadish V Gaikwad',
      edesg:'Co-head NH furniture',
      phno:98765473456,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSVCoe7IKOQoc91b3CFKHfo2JsjEB0OSY62VQ&usqp=CAU'
    },
    {
      empid: 1003,
      ename:'Nikita Kulloli',
      edesg:'co-Head NH furniture',
      phno:9876547654,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfDqmUeM0Lc0wQJYyqzUWBSzVaAYme6Ht2Ag&usqp=CAU'
    },
    {
      empid: 1004,
      ename:'Kushal Makams',
      edesg:'Head NH furniture- Mumbai Branch',
      phno:9876547654,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv-BrJyHbhvj7LhGkT-8ZiCpbqoMHfoIhsrQ&usqp=CAU'
    },
    {
      empid: 1001,
      ename:'Guruprasad',
      edesg:'Head NH furniture- Bangalore Branch',
      phno:9876547654,
      img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzddEG-q0fs9JntAy_8tA7SQCvBwa3G0rYgw&usqp=CAU'
    }
  ];
  public getContactusDetails():any {
    const contactObservable= new Observable(observe=>{
      setTimeout(() =>{
        observe.next(this.contact);

      },50);
    });
    return contactObservable;
  }
}
