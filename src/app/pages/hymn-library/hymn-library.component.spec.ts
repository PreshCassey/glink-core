import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HymnLibraryComponent } from './hymn-library.component';

describe('HymnLibraryComponent', () => {
  let component: HymnLibraryComponent;
  let fixture: ComponentFixture<HymnLibraryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
    declarations: [HymnLibraryComponent]
})
    .compileComponents();

    fixture = TestBed.createComponent(HymnLibraryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
