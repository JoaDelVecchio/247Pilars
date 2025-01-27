export type Workout = {
    userId:string,
    title:string,
    dayOfWeek:string,
    exercises:Exercise[]
}

export type Exercise = {
    name:string,
    notes:string,
    reps:{numberOfReps:number,weight:number},
}
