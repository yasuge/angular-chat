import { Component } from '@angular/core';
import { Comment } from './class/comment';

const COMMENTS: Comment[] = [
  { name: '武市 武', message: 'お疲れ様です。' },
  { name: '武市 武', message: 'この間の件ですが、どうなりましたか？' },
  { name: '平地 順', message: 'お疲れ様です。' },
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  comments = COMMENTS;
}
