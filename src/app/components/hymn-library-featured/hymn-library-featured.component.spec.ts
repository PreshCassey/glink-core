import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnLibraryFeaturedComponent } from './hymn-library-featured.component';

describe('HymnLibraryFeaturedComponent', () => {
  let component: HymnLibraryFeaturedComponent;
  let fixture: ComponentFixture<HymnLibraryFeaturedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    imports: [HymnLibraryFeaturedComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HymnLibraryFeaturedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
