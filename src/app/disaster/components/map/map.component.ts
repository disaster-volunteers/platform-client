import {Component, ElementRef, EventEmitter, Input, NgZone, OnInit, Output, ViewChild} from '@angular/core';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'dv-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {
  @Output() setCoordinatesEmitter = new EventEmitter<string>();
  @Input() showSearch = false;
  @Input() showButton = false;

  latitude = 42.254692;
  longitude = 23.132930;
  zoom = 10;

  address: string;
  private geoCoder;

  @ViewChild('search', {static: false, read: false})
  public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone
  ) {
  }

  ngOnInit() {
    if (this.showSearch) {
      this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        this.geoCoder = new google.maps.Geocoder;

        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
        autocomplete.addListener('place_changed', () => {
          this.ngZone.run(() => {
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            this.latitude = place.geometry.location.lat();
            this.longitude = place.geometry.location.lng();
            this.zoom = 10;
          });
        });
      });
    }
  }

  private setCurrentLocation() {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        this.latitude = position.coords.latitude;
        this.longitude = position.coords.longitude;
        this.zoom = 8;
        this.getAddress(this.latitude, this.longitude);
      });
    }
  }

  getAddress(latitude, longitude) {
    this.geoCoder.geocode({'location': {lat: latitude, lng: longitude}}, (results, status) => {
      if (status === 'OK') {
        if (results[0]) {
          this.zoom = 12;
          this.address = results[0].formatted_address;
        } else {
          window.alert('No results found');
        }
      } else {
        window.alert('Geocoder failed due to: ' + status);
      }

    });
  }

  submitCoordinates() {
    const coordsStr = this.latitude + ', ' + this.longitude;

    this.setCoordinatesEmitter.emit(coordsStr);
  }
}
