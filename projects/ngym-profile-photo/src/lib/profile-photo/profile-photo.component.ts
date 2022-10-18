import { Component, ElementRef, EventEmitter, Input, OnChanges, OnDestroy, OnInit, Output, ViewChild } from '@angular/core';
import { Subject, Subscription } from 'rxjs';

@Component({
  selector: 'ngym-profile-photo',
  templateUrl: './profile-photo.component.html',
  styleUrls: ['./profile-photo.component.scss']
})
export class ProfilePhotoComponent implements OnInit, OnChanges, OnDestroy {
  initialsEnabled: boolean = true;
  profilePhotoSubscription!: Subscription;
  @Input() email!: string;
  @Input() name!: string;
  @Input() size!: number;
  @Input() showOnlyInitials: boolean = false;
  @Input() profilePhotoRefresher = new Subject<{ email: string, data: any }>();
  @Output() onGetProfilePhotoEmitter = new EventEmitter<string>();
  @ViewChild('image') image!: ElementRef;

  ngOnInit() {
    if (this.showOnlyInitials === false) {
      const _this = this;
      this.profilePhotoSubscription = this.profilePhotoRefresher.asObservable().subscribe({
        next: (photoInfo) => {
          if (photoInfo?.email === this.email) {
            this.initialsEnabled = false;
            const reader = new FileReader();
            reader.addEventListener('load', function () {
              // convert image file to base64 string
              if (_this.image) {
                _this.image.nativeElement.src = reader.result;
              }
            }, false);
            if (photoInfo.data) {
              reader.readAsDataURL(photoInfo.data);
            }
          } else {
            this.initialsEnabled = true;
          }
        },
        error: (error) => {
          this.initialsEnabled = true;
        }
      });
    }
  }

  ngOnChanges() {
    if ((this.email || '').trim().length === 0) {
      this.showOnlyInitials === true;
    }

    if (this.showOnlyInitials === false) {
      this.onGetProfilePhotoEmitter.emit(this.email);
    }
  }

  ngOnDestroy() {
    this.profilePhotoSubscription.unsubscribe();
  }
}
