import { ComponentFixture, TestBed } from '@angular/core/testing';
import { APaymentComponent } from './a-payment.component';
import { MatChipsModule } from '@angular/material/chips';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatIconModule } from '@angular/material/icon';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDialogModule } from '@angular/material/dialog';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('APaymentComponent', () => {
  let component: APaymentComponent;
  let fixture: ComponentFixture<APaymentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        NoopAnimationsModule,
        FormsModule,
        ReactiveFormsModule,
        MatChipsModule,
        MatPaginatorModule,
        MatSortModule,
        MatIconModule,
        MatTableModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatDatepickerModule,
        MatCardModule,
        MatButtonModule,
        MatMenuModule,
        MatButtonToggleModule,
        MatDialogModule,
        MatProgressBarModule
      ],
      declarations: [APaymentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(APaymentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should have correct displayed columns', () => {
    expect(component.displayedColumns).toEqual(['transactionId', 'user', 'amount', 'status', 'actions']);
  });

  it('should initialize with empty payments array', () => {
    expect(component.payments).toEqual([]);
  });

  it('should have default page size of 10', () => {
    expect(component.pageSize).toBe(10);
  });
});