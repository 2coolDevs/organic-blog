import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-skeleton-loader',
  template: `

      <!-- <div class="wrap-image">
        <ngx-skeleton-loader
          [theme]="{
            'background-color': '#E5E5E5',
            height: '197px'
          }"
        ></ngx-skeleton-loader>
      </div>
      <div class="wrap-info">
        <ngx-skeleton-loader
          [theme]="{ 'background-color': '#E5E5E5' }"
        ></ngx-skeleton-loader>
        <ngx-skeleton-loader
          [theme]="{ 'background-color': '#E5E5E5' }"
        ></ngx-skeleton-loader>
        <ngx-skeleton-loader
          [theme]="{ 'background-color': '#E5E5E5' }"
        ></ngx-skeleton-loader>
        <div></div>
      </div>
    </article> -->
    <mat-spinner ></mat-spinner>
  `,
  styles: [`

  `],
})
export class SkeletonLoaderComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
  @Input() post!: any;
}
