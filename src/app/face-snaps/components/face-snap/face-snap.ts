import { Component, Input } from '@angular/core';
import { TitleCasePipe } from '@angular/common';
import { Router } from '@angular/router';
import { FaceSnap } from '../../../core/models/face-snap';

@Component({
  selector: 'app-face-snap',
  imports: [ TitleCasePipe,],
  templateUrl: './face-snap.html',
  styleUrl: './face-snap.scss',
})
export class FaceSnapComponent {

  @Input() faceSnap!: FaceSnap;

  constructor(private route: Router) {}

  onViewFaceSnap() {
    this.route.navigateByUrl(`facesnaps/${this.faceSnap.id}`);
  }
}
