import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  selects = [
    { IdPortReference: 1, namePort: 'CLPLN Penalolen' },
    { IdPortReference: 2, namePort: 'CLPMA Palmilla' },
    { IdPortReference: 3, namePort: 'CLPMC Puerto Montt' },
    { IdPortReference: 4, namePort: 'CLPMI Puerto Melinka' },
    { IdPortReference: 5, namePort: 'CLPNE Paine' },
  ];
  cards = [
    {
      boarding: {
        boardingName: 'NOTOCARMSC-01',
        incotermName: 'CIF',
        quantityContainer: '02',
        loadType: 'FTL',
        ETD: 'Feb 23, 2023',
        ETA: 'Apr 17, 2023',
        POL: 'Shanghai, China (CNSHA)',
        POD: 'Santiago, Chile (CNSHA)',
        releaseDate: 'Apr 20, 2023',
        contacts: [
          { nameContant: 'Proveedor', letterRef: 'P' },
          { nameContant: 'Freight Forwarder', letterRef: 'F' },
          { nameContant: 'Agente de Aduana', letterRef: 'A' },
        ],
      },
      containersInBoarding: [
        {
          containerType: "20'DC",
          containerNumber: 'MSDU2189953',
          warehouseArrival: 'Apr 19, 2023',
          demurrage: 'Apr 21, 2023',
          img: './assets/container-icon-demurrage-red.svg',
        },
        {
          containerType: "40'DC",
          containerNumber: 'MSDU2774644',
          warehouseArrival: 'Apr 19, 2023',
          demurrage: 'Apr 21, 2023',
          img: './assets/container-icon-demurrage-yellow.svg',
        },
      ],
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
