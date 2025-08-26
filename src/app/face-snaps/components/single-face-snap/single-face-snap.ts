import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../../../core/models/face-snap';
import {
  AsyncPipe,
  DatePipe,
  NgClass,
  NgIf,
  NgStyle,
  TitleCasePipe,
} from '@angular/common';
import { FaceSnapsService } from '../../../core/services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Component({
  selector: 'app-single-face-snap',
  imports: [
    NgStyle,
    NgClass,
    TitleCasePipe,
    DatePipe,
    RouterLink,
    NgIf,
    AsyncPipe,
  ],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap$!: Observable<FaceSnap>;
  isSnap!: boolean;
  snapButtonText!: string;

  constructor(
    private faceSnapService: FaceSnapsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.prepareInterface();
    this.getFaceSnapData();
  }

onSnap(faceSnapId: number) {
    if (this.snapButtonText === 'Oh Snap!') {
        this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'snap').pipe(
            tap(() => this.snapButtonText = 'Oops, unSnap!')
        );
    } else {
        this.faceSnap$ = this.faceSnapService.snapFaceSnapById(faceSnapId, 'unsnap').pipe(
            tap(() => this.snapButtonText = 'Oh Snap!')
        );
    }
}

  private getFaceSnapData() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap$ = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.isSnap = false;
    this.snapButtonText = 'Oh Snap!';
  }
}
