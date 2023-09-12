import { Component, OnInit } from '@angular/core';
import { Cat, CatList } from '../../interface/cat.interface';
import { CatService } from '../../service/cat.service';

@Component({
  selector: 'app-page-vote',
  templateUrl: './page-vote.component.html',
  styleUrls: ['./page-vote.component.scss']
})
export class PageVoteComponent implements OnInit {
  public twoCatsArray: Cat[] = [];
  public allcats: Cat[];
  public likedCat: Cat;
  public allLikedCat: Cat[] = [];
  public displayedColumns: string[] = ['url', 'rating'];

  constructor(private catService: CatService) { }

  ngOnInit() {
    this.showMeTwoCats();
  }

  showMeTwoCats() {
    this.catService.getAllCat().subscribe((cats: CatList) => {
      this.allcats = cats.images;
      this.twoCatsArray = this.chooseTwoRandomCats(this.allcats);
    });
  }

  chooseTwoRandomCats(cats: Cat[]): Cat[] {
    const firstCatIndex = this.getRandomIndex(cats.length);
    const secondCatIndex = this.getRandomIndex(cats.length, firstCatIndex);

    return [cats[firstCatIndex], cats[secondCatIndex]];
  }

  getRandomIndex(maxValue: number, differentThanValue?: number): number {
    let index: number;
    do {
      index = this.getRandomInt(maxValue);
    } while (index === differentThanValue);
    return index;
  }

  getRandomInt(max: number): number {
    return Math.floor(Math.random() * Math.floor(max));
  }

  voteForThisCat(id: string) {
    this.likedCat = this.allcats.find((cat: Cat) => cat.id === id) as Cat;

    if (this.likedCat) {
      this.likedCat.rating = (this.likedCat.rating ?? 0) + 1;
      this.allLikedCat.push(this.likedCat);

      this.twoCatsArray = this.chooseTwoRandomCats(this.allcats);
    }
  }

}