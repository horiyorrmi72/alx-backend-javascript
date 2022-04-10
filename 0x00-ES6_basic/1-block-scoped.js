export default function taskblock(trueOrFalse) {
    const task , task2;
    
    if (trueOrFalse) {
	task = true;
	task2 = false;
    }

    return [task, task2];
}
