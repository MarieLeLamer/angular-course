import { Injectable } from '@angular/core';
import { FaceSnap } from '../models/face-snap';
import { SnapType } from '../models/snap-type.type';

@Injectable({
  providedIn: 'root',
})
export class FaceSnapsService {
  private faceSnaps: FaceSnap[] = [
    new FaceSnap(
      'My First Face Snap',
      'This is a description of my first face snap.',
      new Date(),
      10,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ).withLocation('Paris'),
    new FaceSnap(
      'My Second Face Snap',
      'This is a description of my second face snap.',
      new Date(),
      125,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ),
    new FaceSnap(
      'My third face snap',
      'This is a description of my third face snap.',
      new Date(),
      220,
      'https://cdn.pixabay.com/photo/2015/05/31/16/03/teddy-bear-792273_1280.jpg'
    ),
  ];

  getFaceSnaps(): FaceSnap[] {
    return [...this.faceSnaps];
  }

  getFaceSnapById(faceSnapId: string): FaceSnap {
    const foundFaceSnap = this.faceSnaps.find(
      (faceSnap) => faceSnap.id === faceSnapId
    );
    if (!foundFaceSnap) {
      throw new Error('FaceSnap not found!');
    }
    return foundFaceSnap;
  }

  snapFaceSnapById(faceSnapId: string, snapType: SnapType): void {
    const faceSnap = this.getFaceSnapById(faceSnapId);
    faceSnap.snap(snapType);
  }

addFaceSnap(formValue: { title: string, description: string, imgUrl: string, location?: string }) {
    const faceSnap: FaceSnap = {
      ...formValue,
      snaps: 0,
      createdDate: new Date(),
      id: this.faceSnaps[this.faceSnaps.length - 1].id + 1,
      addSnap: function (): void {
        throw new Error('Function not implemented.');
      },
      removeSnap: function (): void {
        throw new Error('Function not implemented.');
      },
      snap: function (snapType: SnapType): void {
        throw new Error('Function not implemented.');
      },
      setLocation: function (location: string): void {
        throw new Error('Function not implemented.');
      },
      withLocation: function (location: string): FaceSnap {
        throw new Error('Function not implemented.');
      }
    };
    this.faceSnaps.push(faceSnap);
}
}
