import { animate, style, transition, trigger, query, group } from '@angular/animations';
import { AfterViewChecked, Component, ElementRef, ViewChild } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

// export const slideUpAnimation = trigger('routeAnimations', [
// 	transition('* <=> *', [
// 		group([
// 			// Current component: slide up and fade out
// 			query(':leave', [
// 				style({ transform: 'translateY(0)', opacity: 1 }),
// 				animate('0.4s ease-in', style({ transform: 'translateY(-100%)', opacity: 0 }))
// 			], { optional: true }),

// 			// New component: slide up from bottom
// 			query(':enter', [
// 				style({ transform: 'translateY(100%)', opacity: 0 }),
// 				animate('1s ease-out', style({ transform: 'translateY(0)', opacity: 1 }))
// 			  ], { optional: true })
// 		])
// 	])
// ]);


// export const slideUpAnimation = trigger('routeAnimations', [
// 	transition(':enter', [ // Only affects new components
// 	style({ transform: 'translateY(100%)', opacity: 0 }),
// 	animate('700ms cubic-bezier(0.22, 1, 0.36, 1)', style({ transform: 'translateY(0)', opacity: 1 }))
//   ]),

//   transition(':leave', [ // This would animate the old component before it's removed
// 	animate('300ms ease-in', style({ transform: 'translateY(-50px)', opacity: 0 }))
//   ])
// ])

export const slideUpAnimation = trigger('routeAnimations', [
	transition('* <=> *', [
		style({ transform: 'translateY(10rem)', opacity: 0 }),
		animate('0.7s ease-in-out', style({ transform: 'translateY(0)', opacity: 1 }))
	])
]);

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss'],
	animations: [slideUpAnimation]
})
export class MainLayoutComponent {

	prepareRoute(outlet: any) {
		return outlet && outlet.activatedRouteData && outlet.activatedRouteData['animation'];
	}
}
