import { SnapType } from "./snap-type.type";

export class FaceSnap {
  location?: string;
  id!: number;

  constructor(
    public title: string,
    public description: string,
    public createdDate: Date,
    public snaps: number,
    public imageUrl: string
  ) {
  }

  addSnap(): void {
    this.snaps++;
  }

  removeSnap(): void {
    this.snaps--;
  }

  snap(snapType : SnapType){
    if (snapType === 'snap') {
      this.addSnap();
    } else if (snapType === 'unsnap') {
      this.removeSnap();
    }
  }

  setLocation(location: string): void {
    this.location = location;
  }

  withLocation(location: string): FaceSnap {
    this.setLocation(location);
    return this;
  }
}
