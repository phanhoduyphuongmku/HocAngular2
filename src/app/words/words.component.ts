import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-words',
  templateUrl: './words.component.html',
  styleUrls: ['./words.component.css']
})
export class WordsComponent implements OnInit {
  newEn = '';
  newVn = '';
  isShowForm = false;
  filterStatus = 'XEM_TAT_CA';
  arrWords = [
    { id: 1, en: 'action', vn: 'hành động', memorized: true },
    { id: 2, en: 'love', vn: 'yêu', memorized: false },
    { id: 3, en: 'go', vn: 'đi', memorized: true },
  ]
  constructor() { }

  ngOnInit() {
  }
  addWord() {
    this.arrWords.unshift({
      id: this.arrWords.length + 1,
      en: this.newEn,
      vn: this.newVn,
      memorized: false
    }); // them vao dau arr
    this.newEn = '';
    this.newVn = '';
    this.isShowForm = false;
  }
  removeWord(id: number) {
    const i = this.arrWords.findIndex(e => e.id === id);
    //this.newEn = i.toString();
    this.arrWords.splice(i, 1);
  }
  getStatus(memorized:boolean){
    const dkXemTatCa = this.filterStatus === 'XEM_TAT_CA';
    const dkXemDaNho = this.filterStatus === 'XEM_DA_NHO' && memorized;
    const dkXemChuaNho = this.filterStatus === 'XEM_CHUA_NHO' && !memorized;
    return dkXemTatCa||dkXemDaNho||dkXemChuaNho;
  }
}
