/*
*	@filename	lowerkurast.js
*	@author		isid0re
*	@desc		LK runs for MF, rune drops, and gold
*/

function lowerkurast () {
	if (!Pather.accessToAct(3) || me.diff === 0) {
		return true;
	}

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting lower kurast');
	me.overhead("lower kurast");

	if (!Pather.checkWP(79)) {
		Pather.getWP(79);
	} else {
		Pather.useWaypoint(79);
	}

	Precast.doPrecast(true);
	Misc.openChestsInArea(79);

	return true;
}
