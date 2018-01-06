import {
    trigger,
    state,
    animate,
    style,
    transition,
    group,
    query
} from '@angular/animations';

export function slideHorizontal() {
    return trigger('slideHorizontal', [
        state('void', style({'z-index': '50', width: '100%'})),
        state('fromLeft', style({'z-index': '40', width: '100%'})),
        state('fromRight', style({'z-index': '40', width: '100%'})),
        state('toLeft', style({'z-index': '55', width: '100%'})),

        transition('void => fromLeft', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(-30%)'}),
            animate('1s ease-in-out', style({transform: 'translateX(-130%)'}))
        ]),
        transition('fromLeft => void', [  // before 2.1: transition('* => void', [
            style({transform: 'translateX(-130%)'}),
            animate('1s ease-in-out', style({transform: 'translateX(-130%)'}))
        ]),
        transition('void => toLeft', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(-130%)'}),
            animate('1s ease-in-out', style({transform: 'translateX(-130%)'}))
        ]),
        transition('toLeft => void', [  // before 2.1: transition('* => void', [
            style({transform: 'translateX(-130%)'}),
            animate('1s ease-in-out', style({transform: 'translateX(-30%)'}))
        ]),
        transition('void => fromRight', [  // before 2.1: transition('void => *', [
            style({transform: 'translateX(-30%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-30%)'})),
            animate('0.5s ease-in-out', style({transform: 'translateX(-130%)'}))
        ]),
        transition('fromRight => void', [  // before 2.1: transition('* => void', [
            style({transform: 'translateX(-130%)'}),
            animate('0.5s ease-in-out', style({transform: 'translateX(-30%)'})),
            animate('0.5s ease-in-out', style({transform: 'translateX(-30%)'}))
        ])
    ]);
}

export function logoAnimate() {
    return trigger('scrollap', [
        state('s1', style({'margin-top': '0', })),
        state('s2', style({'margin-top': '0', })),
        transition('s1 <=> s2', [  // before 2.1: transition('void => *', [
            style({'margin-top': '20px'}),
            animate('0.5s ease-in-out', style({'margin-top': '20px'})),
            animate('0.5s ease-in-out', style({'margin-top': '0'}))
        ]),
    ]);
}
