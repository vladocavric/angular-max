import {
  Component,
  Input,
  OnInit,
  ViewEncapsulation,
  OnChanges,
  SimpleChanges,
  DoCheck,
  AfterContentInit, AfterContentChecked, OnDestroy, AfterViewInit, ViewChild, ElementRef, ContentChild
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
  // emulated is default none - for global shadowDom - the same results as emulated but is not supported by all browsers
})
export class ServerElementComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, OnDestroy {
  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name: string;
  @ViewChild('header', {static: true}) header: ElementRef;
  @ContentChild('contentParagraph', {static: true}) paragraph: ElementRef;

  constructor() {
    console.log('constructor called');
  }

  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log(changes);
  }


  ngOnInit(): void {
    console.log('ngOnInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('AfterContent init called');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log(this.header.nativeElement.textContent);
    console.log(this.paragraph.nativeElement.textContent);
  }

  ngOnDestroy() {
    console.log('ngOnDestroy called');
  }
}
