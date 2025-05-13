import { Component, OnInit, inject } from '@angular/core';
import { CommonModule, DatePipe, CurrencyPipe } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, ActivatedRoute, RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { MatIconModule } from '@angular/material/icon';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatDividerModule } from '@angular/material/divider';
import { MatTabsModule } from '@angular/material/tabs';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule, PageEvent } from '@angular/material/paginator';
import { animate, state, style, transition, trigger } from '@angular/animations';

interface PaymentMethod {
  value: string;
  label: string;
  icon: string;
  description: string;
  color: string;
}

interface PaymentHistory {
  id: string;
  amount: number;
  method: string;
  status: 'completed' | 'pending' | 'failed';
  date: string;
  reference?: string;
  details?: string;
}

@Component({
  selector: 'app-payment',
  templateUrl: './a-payment.component.html',
  styleUrls: ['./a-payment.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    RouterModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatProgressSpinnerModule,
    MatDividerModule,
    MatTabsModule,
    MatCheckboxModule,
    MatTableModule,
    MatPaginatorModule,
    DatePipe,
    CurrencyPipe
  ],
  animations: [
    trigger('detailExpand', [
      state('collapsed', style({ height: '0px', minHeight: '0', visibility: 'hidden' })),
      state('expanded', style({ height: '*', visibility: 'visible' })),
      transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
    ]),
  ]
})
export class APaymentComponent implements OnInit {
  private fb = inject(FormBuilder);
  private route = inject(ActivatedRoute);
  private router = inject(Router);
  private toastr = inject(ToastrService);

  paymentForm: FormGroup;
  paymentMethods: PaymentMethod[] = [
    { value: 'paypal', label: 'PayPal', icon: 'pay', description: 'Pay securely with your PayPal account', color: '#003087' },
    { value: 'credit_card', label: 'Credit Card', icon: 'card', description: 'Pay with Visa, Mastercard, or other major cards', color: '#4a5568' },
    { value: 'mobile_money', label: 'Mobile Money', icon: 'phone', description: 'Pay using your mobile money account', color: '#38a169' },
    { value: 'chapa', label: 'Chapa', icon: 'chapa', description: 'Secure online payments via Chapa gateway', color: '#6b46c1' }
  ];

  private _amount = 0;
  get amount(): number {
    return this._amount;
  }
  set amount(value: number) {
    this._amount = value;
  }

  appointmentDetails: any;
  
  private _isLoading = false;
  get isLoading(): boolean {
    return this._isLoading;
  }
  set isLoading(value: boolean) {
    this._isLoading = value;
  }

  private _isProcessing = false;
  get isProcessing(): boolean {
    return this._isProcessing;
  }
  set isProcessing(value: boolean) {
    this._isProcessing = value;
  }

  private _paymentHistory: PaymentHistory[] = [];
  get paymentHistory(): PaymentHistory[] {
    return this._paymentHistory;
  }
  set paymentHistory(value: PaymentHistory[]) {
    this._paymentHistory = value;
  }

  currentPage = 0;
  pageSize = 5;
  totalPayments = 0;

  private _activeTab = 0;
  get activeTab(): number {
    return this._activeTab;
  }
  set activeTab(value: number) {
    this._activeTab = value;
  }

  expandedPaymentId: string | null = null;

  displayedColumns: string[] = ['date', 'amount', 'method', 'status', 'actions'];
  paymentStatusColors: { [key: string]: string } = {
    'completed': 'completed-badge',
    'pending': 'pending-badge',
    'failed': 'failed-badge'
  };

  constructor() {
    this.paymentForm = this.fb.group({
      paymentMethod: ['paypal', Validators.required],
      phoneNumber: ['', [Validators.pattern(/^[0-9]{10,15}$/)]],
      cardNumber: ['', [Validators.pattern(/^[0-9\s]*$/)]],
      expiryDate: [''],
      cvv: ['', [Validators.pattern(/^[0-9]{3,4}$/)]],
      rememberDetails: [false],
      nameOnCard: [''],
      email: ['', [Validators.email]]
    });
  }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      if (params['appointmentId']) {
        this.loadAppointmentDetails(params['appointmentId']);
      } else {
        this.amount = params['amount'] || 0;
      }
    });

    this.loadPaymentHistory();
    this.updateFormValidators('paypal');

    this.paymentForm.get('paymentMethod')?.valueChanges.subscribe(method => {
      this.updateFormValidators(method);
    });
  }

  updateFormValidators(method: string): void {
    const controls = {
      phoneNumber: this.paymentForm.get('phoneNumber'),
      cardNumber: this.paymentForm.get('cardNumber'),
      expiryDate: this.paymentForm.get('expiryDate'),
      cvv: this.paymentForm.get('cvv'),
      nameOnCard: this.paymentForm.get('nameOnCard'),
      email: this.paymentForm.get('email')
    };

    Object.values(controls).forEach(control => {
      control?.clearValidators();
      control?.updateValueAndValidity();
    });

    switch (method) {
      case 'mobile_money':
        controls.phoneNumber?.setValidators([Validators.required, Validators.pattern(/^[0-9]{10,15}$/)]);
        controls.email?.setValidators([Validators.email]);
        break;
      case 'credit_card':
        controls.cardNumber?.setValidators([Validators.required, Validators.pattern(/^[0-9\s]{16}$/)]);
        controls.expiryDate?.setValidators([Validators.required]);
        controls.cvv?.setValidators([Validators.required, Validators.pattern(/^[0-9]{3,4}$/)]);
        controls.nameOnCard?.setValidators([Validators.required]);
        break;
      case 'paypal':
      case 'chapa':
        controls.email?.setValidators([Validators.required, Validators.email]);
        break;
    }

    Object.values(controls).forEach(control => {
      control?.updateValueAndValidity();
    });
  }

  async loadAppointmentDetails(appointmentId: string): Promise<void> {
    this.isLoading = true;
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      this.appointmentDetails = {
        id: appointmentId,
        fee: 500,
        service: 'Medical Consultation',
        date: new Date().toISOString(),
        provider: 'Dr. Abebe Kebede'
      };
      this.amount = this.appointmentDetails.fee || 0;
    } catch (error) {
      this.toastr.error('Failed to load appointment details');
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  async loadPaymentHistory(): Promise<void> {
    this.isLoading = true;
    try {
      await new Promise(resolve => setTimeout(resolve, 800));
      this.paymentHistory = [
        {
          id: '1',
          amount: 500,
          method: 'paypal',
          status: 'completed',
          date: new Date().toISOString(),
          reference: 'PYPL-2023-001',
          details: 'Payment for medical consultation'
        },
        {
          id: '2',
          amount: 750,
          method: 'mobile_money',
          status: 'pending',
          date: new Date(Date.now() - 86400000).toISOString(),
          reference: 'MM-2023-002'
        },
        {
          id: '3',
          amount: 1200,
          method: 'credit_card',
          status: 'failed',
          date: new Date(Date.now() - 172800000).toISOString(),
          reference: 'CC-2023-003',
          details: 'Card declined'
        }
      ];
      this.totalPayments = this.paymentHistory.length;
    } catch (error) {
      this.toastr.error('Failed to load payment history');
      console.error(error);
    } finally {
      this.isLoading = false;
    }
  }

  onPageChange(event: PageEvent): void {
    this.currentPage = event.pageIndex;
    this.pageSize = event.pageSize;
  }

  async initiatePayment(): Promise<void> {
    if (this.paymentForm.invalid) {
      this.paymentForm.markAllAsTouched();
      this.toastr.warning('Please fill all required fields correctly');
      return;
    }

    this.isProcessing = true;
    try {
      const formValue = this.paymentForm.value;
      const paymentData = {
        amount: this.amount,
        method: formValue.paymentMethod,
        email: formValue.email,
        ...(formValue.paymentMethod === 'mobile_money' && { phone: formValue.phoneNumber }),
        ...(formValue.paymentMethod === 'credit_card' && {
          cardNumber: formValue.cardNumber.replace(/\s/g, ''),
          expiryDate: formValue.expiryDate,
          cvv: formValue.cvv,
          nameOnCard: formValue.nameOnCard
        }),
        appointmentId: this.appointmentDetails?.id,
        rememberDetails: formValue.rememberDetails
      };

      await new Promise(resolve => setTimeout(resolve, 1500));

      const newPayment: PaymentHistory = {
        id: Math.random().toString(36).substring(2, 9),
        amount: this.amount,
        method: paymentData.method,
        status: 'completed',
        date: new Date().toISOString(),
        reference: `PAY-${new Date().getTime()}`,
        details: this.appointmentDetails ? `Payment for ${this.appointmentDetails.service}` : 'Manual payment'
      };

      this.paymentHistory = [newPayment, ...this.paymentHistory];
      this.totalPayments = this.paymentHistory.length;

      this.toastr.success('Payment processed successfully');
      this.router.navigate(['/payment/receipt', newPayment.id], {
        state: { payment: newPayment, appointment: this.appointmentDetails }
      });
    } catch (error) {
      this.toastr.error('Payment processing failed');
      console.error(error);
    } finally {
      this.isProcessing = false;
    }
  }

  viewReceipt(paymentId: string): void {
    const payment = this.paymentHistory.find(p => p.id === paymentId);
    if (payment) {
      this.router.navigate(['/payment/receipt', paymentId], {
        state: { payment, appointment: this.appointmentDetails }
      });
    }
  }

  togglePaymentDetails(paymentId: string): void {
    this.expandedPaymentId = this.expandedPaymentId === paymentId ? null : paymentId;
  }

  getPaymentMethodIcon(method: string): string {
    return this.paymentMethods.find(m => m.value === method)?.icon || 'payment';
  }

  formatCardNumber(event: Event): void {
    const input = event.target as HTMLInputElement;
    let value = input.value.replace(/\s+/g, '');
    
    if (value.length > 16) {
      value = value.substring(0, 16);
    }
    
    value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
    
    this.paymentForm.get('cardNumber')?.setValue(value, { emitEvent: false });
    input.value = value;
  }
}