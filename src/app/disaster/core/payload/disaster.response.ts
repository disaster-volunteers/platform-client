import {DisasterTypeResponse} from './disaster-type.response';
import {UserResponse} from '../../../user/core/payload/user.response';

export class DisasterResponse {
    constructor(
        public id: number = 0,
        public coordinates: string = '',
        public dateStarted: Date = new Date(),
        public type: DisasterTypeResponse = null,
        public resolved: boolean = false,
        public description: string = '',
        public essentials: string = '',
        public finalMessage: string = '',
        public dateResolved: Date = new Date(),
        public volunteers: UserResponse[] = [],
        public outerHelp: number = 0
    ) {

    }
}
