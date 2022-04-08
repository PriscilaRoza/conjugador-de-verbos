import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BcdbdComponent } from './bcdbd.component';

describe('BcdbdComponent', () => {
    let component: BcdbdComponent;
    let fixture: ComponentFixture<BcdbdComponent>;

    beforeEach(async(() => {
        TestBed.configureTestingModule({
            declarations: [ BcdbdComponent ]
        })
        .compileComponents();
    }));

    beforeEach(() => {
        fixture = TestBed.createComponent(BcdbdComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should be created', () => {
        expect(component).toBeTruthy();
    });
});