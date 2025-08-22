import { Component, OnInit } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { DatePipe, NgClass, NgStyle, TitleCasePipe } from '@angular/common';
import { FaceSnapsService } from '../services/face-snaps.service';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-single-face-snap',
  imports: [NgStyle, NgClass, TitleCasePipe, DatePipe, RouterLink],
  templateUrl: './single-face-snap.html',
  styleUrl: './single-face-snap.scss',
})
export class SingleFaceSnapComponent implements OnInit {
  faceSnap!: FaceSnap;
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

  onAddSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'snap');
    this.isSnap = true;
    this.snapButtonText = 'Ouuups, unSnap!';
  }

  onRemoveSnap(): void {
    this.faceSnapService.snapFaceSnapById(this.faceSnap.id, 'unsnap');
    this.isSnap = false;
    this.snapButtonText = 'Oh Snap!';
  }

  handleSnap(): void {
    this.isSnap ? this.onRemoveSnap() : this.onAddSnap();
  }

  private getFaceSnapData() {
    const faceSnapId = this.route.snapshot.params['id'];
    this.faceSnap = this.faceSnapService.getFaceSnapById(faceSnapId);
  }

  private prepareInterface() {
    this.isSnap = false;
    this.snapButtonText = 'Oh Snap!';
  }
}
