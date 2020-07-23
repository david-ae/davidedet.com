import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./../../assets/css/split.css', './quote.component.css']
})
export class QuoteComponent implements OnInit {
  quoteForm: FormGroup;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.quoteForm = this.fb.group({
      quote: ['', Validators.required],
      author: ['', Validators.required]
    });
  }

  addQoute(){
    let quote = this.quoteForm.get('quote').value;
    let author = this.quoteForm.get('author').value;


  }

}
