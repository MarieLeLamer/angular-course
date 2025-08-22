import { Component, OnDestroy, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { FaceSnapComponent } from '../face-snap/face-snap';
import { FaceSnapsService } from '../services/face-snaps.service';
import { interval, Subject, takeUntil, tap } from 'rxjs';

@Component({
  selector: 'app-face-snap-list',
  imports: [FaceSnapComponent],
  templateUrl: './face-snap-list.html',
  styleUrl: './face-snap-list.scss',
})
export class FaceSnapListComponent implements OnInit, OnDestroy {
  faceSnaps!: FaceSnap[];
  private destroy$!: Subject<boolean>;

  constructor(private faceSnapsService: FaceSnapsService) {}

  ngOnInit(): void {
    this.destroy$ = new Subject<boolean>();
    this.faceSnaps = this.faceSnapsService.getFaceSnaps();
    interval(1000).pipe(tap(console.log), takeUntil(this.destroy$)).subscribe();
  }

  ngOnDestroy() {
    this.destroy$.next(true);
  }
}
