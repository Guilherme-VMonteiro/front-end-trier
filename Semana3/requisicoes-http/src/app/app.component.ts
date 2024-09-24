import { Component, OnInit } from '@angular/core';
import { HttpExampleService } from './main/services/http-example.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{

  title = 'requisicoes-http';

  constructor(private service: HttpExampleService){}

  ngOnInit(): void {
    this.service.findAllPosts().subscribe(values => {
      console.log(values);
    })

    this.service.findById(1).subscribe(values => {
      console.log(values);
    })

    this.service.findByIdQueryParams(1).subscribe(values => {
      console.log(values);
    })

    this.service.create().subscribe(values => {
      console.log(values);
    })

    this.service.update(1).subscribe(values => {
      console.log(values);
    })

    this.service.delete(1).subscribe(values => {
      console.log(values);
    })
  }
}
