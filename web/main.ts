import './index.html';
import test from './custom';
import 'bootstrap';
import './styles.scss';
import { of } from 'rxjs';


document.getElementsByTagName('h1')[0].innerHTML = test('aaaaddd');
of(0,1,2,3).subscribe((val: number) => {
    console.log(val);
});