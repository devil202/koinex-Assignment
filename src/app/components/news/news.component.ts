import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-news',
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {

  data: Array<any>;
  tweets: Array<any>;
  constructor() {
    this.tweets = [
      {
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      },
      {
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      },
      {
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      },
      {
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      },
      {
        content: `Lorem Ipsum is simply dummy text of the printing and typesetting industry.Lorem Ipsum has been the industry\'s standard dummy
        text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.It
        has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.It
        was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with
        desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum`
      }
    ];
    this.data = [
      {
      title: 'TRADING',
      content: 'Polymath (POLY) trading will be live at 5:00 pm.',
      date: '01/05/2018, 12:28:43'
    },
      {
      title: 'TRADING',
      content: 'Polymath (POLY) trading will be live at 5:00 pm.',
      date: '01/05/2018, 12:28:43'
    },
      {
      title: 'TRADING',
      content: 'Polymath (POLY) trading will be live at 5:00 pm.',
      date: '01/05/2018, 12:28:43'
    }
  ];
  }

  ngOnInit() {
  }

}
