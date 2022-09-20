import { MatDialog } from '@angular/material/dialog';
import { Component, OnInit } from '@angular/core';
import SwiperCore, { SwiperOptions ,Navigation, Autoplay} from 'swiper';
import { SymptomesDialogComponent } from '../symptomes-dialog/symptomes-dialog.component';

interface Symptomes {
  src: string;
  id?: number;
  description: string;
}
SwiperCore.use([Navigation, Autoplay]);
@Component({
  selector: 'app-symptomes',
  templateUrl: './symptomes.component.html',
  styleUrls: ['./symptomes.component.scss'],
})
export class SymptomesComponent implements OnInit {
  symptomes: Symptomes[] = [
    {
      src: 'assets/imgs/icon01.png',
      id: 1,
      description: 'Сильное натуживание',
    },
    {
      src: 'assets/imgs/icon02.png',
      id: 2,
      description: 'Редкая и трудная дефекация',
    },
    {
      src: 'assets/imgs/icon03.png',
      id: 3,
      description: 'Боль в животе',
    },
    {
      src: 'assets/imgs/icon04.png',
      id: 4,
      description: 'Урчание',
    },
    {
      src: 'assets/imgs/icon05.png',
      id: 5,
      description: 'Ощущение неполного опорожнения',
    },
    {
      src:'assets/imgs/icon06.png',
      id: 6,
      description:'Тяжесть в животе'
      },
  ];
  mobile = false;
  config: SwiperOptions = {
    slidesPerView: 1,
    spaceBetween: 0,
    navigation: true,
    pagination: { clickable: true },
    scrollbar: { draggable: true },
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
  };
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {
    if (window.screen.width <= 768) {
      // 768px portrait
      this.mobile = true;
    }
  }

  openDialog() {
    console.log();
    const dialogRef = this.dialog.open(SymptomesDialogComponent);

    dialogRef.afterClosed().subscribe((result) => {
      console.log(`Dialog result: ${result}`);
    });
  }
}
