/*
*	@filename	tome.js
*	@author		isid0re
*	@desc		get the lam essen's tome
*/

function tome () {
	if (!Pather.accessToAct(3) || Misc.checkQuest(17, 0)) {
		return true;
	}

	Town.townTasks();
	print('ÿc9SoloLevelingÿc0: starting tome');
	me.overhead("tome");

	if (!Pather.checkWP(80)) {
		Pather.getWP(80);
	} else {
		Pather.useWaypoint(80);
	}

	Precast.doPrecast(true);

	if (!Pather.moveToExit(94, true) || !Pather.moveToPreset(me.area, 2, 193)) {
		print('ÿc9SoloLevelingÿc0: Failed to move to LamEssen Tome');
	}

	Quest.collectItem(548, 193);
	Town.goToTown();
	Town.unfinishedQuests();

	return true;
}
