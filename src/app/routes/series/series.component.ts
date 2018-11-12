import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { MenuService, Menu } from '@delon/theme';

@Component({
  selector: 'app-series',
  templateUrl: './series.component.html',
})
export class SeriesComponent implements OnInit {
  id: Number = 0;
  symbol: String = '';
  loading: Boolean = true;
  title: String = '';
  menus: Menu[] = [];

  constructor(private route: ActivatedRoute, private menuSrv: MenuService, private router: Router) { }

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      this.id = +params.get('id');
      this.symbol = params.get('symbol');
      this.menus = this.menuSrv.getPathByUrl(this.router.url.split('?')[0]);
      this.title = this.menus[this.menus.length - 1].text;
      this.loading = false;
    });
  }
}
